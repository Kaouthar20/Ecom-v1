package org.sid.ecomv1.dao;

import org.sid.ecomv1.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product,Long> {
}
