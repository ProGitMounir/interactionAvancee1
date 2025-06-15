package example.product.backend.repositories;
import org.springframework.data.jpa.repository.JpaRepository;


import example.product.backend.models.Products;

public interface ProductRepository extends JpaRepository<Products, Long>{
	
}
