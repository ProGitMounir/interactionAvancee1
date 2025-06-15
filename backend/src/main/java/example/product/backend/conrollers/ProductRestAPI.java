package example.product.backend.conrollers;

import org.springframework.web.bind.annotation.RestController;

import example.product.backend.models.Products;
import example.product.backend.repositories.ProductRepository;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@CrossOrigin("*")
public class ProductRestAPI {
    private ProductRepository productRepository;

    public ProductRestAPI(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products")
    public List<Products> listProducts() {
        return productRepository.findAll();
    }
    
    @GetMapping("/products/{id}") 
    public Products findById(@PathVariable(name="id") Long id) {
        return productRepository.findById(id).get();
    }

    @DeleteMapping("/products/{id}") 
    public void deleteById(@PathVariable(name="id") Long id) {
        productRepository.deleteById(id);
    }
    
}
