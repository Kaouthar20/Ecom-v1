package org.sid.ecomv1.dao;

import org.sid.ecomv1.entities.Category;
import org.sid.ecomv1.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CategoryRepository extends JpaRepository <Category,Long> {
}
