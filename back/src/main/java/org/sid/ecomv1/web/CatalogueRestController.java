package org.sid.ecomv1.web;

import org.sid.ecomv1.dao.ProductRepository;
import org.sid.ecomv1.entities.Product;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
public class CatalogueRestController {
@Autowired
    private ProductRepository productRepository;
//

    @GetMapping(path = "/photoProduct/{id}",produces= MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
        //recuperer le produit
        Product p= productRepository.findById(id).get();
       return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/Pictures/ecom/Produacts/"+p.getPhotoName()));

    }
}
