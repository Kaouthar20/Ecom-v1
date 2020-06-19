package org.sid.ecomv1;

import net.bytebuddy.utility.RandomString;
import org.sid.ecomv1.dao.CategoryRepository;
import org.sid.ecomv1.dao.ProductRepository;
import org.sid.ecomv1.entities.Category;
import org.sid.ecomv1.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Random;

@SpringBootApplication
public class EcomV1Application  implements CommandLineRunner {
	@Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
	public static void main(String[] args) {
		SpringApplication.run(EcomV1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		categoryRepository.save(new Category(null,"Computers",null,null));
		categoryRepository.save(new Category(null,"Printers",null,null));
		categoryRepository.save(new Category(null,"SmartPhons",null,null));
		Random rnd=new Random();
		categoryRepository.findAll().forEach(c ->{
		Product p=new Product();
		p.setName(RandomString.make(18));
		p.setCurrentPrice(100+rnd.nextInt(10000));
        p.setAvailable(rnd.nextBoolean());
        p.setPromotion(rnd.nextBoolean());
        p.setCategory(c);
        productRepository.save(p);
		} );
	}
}
