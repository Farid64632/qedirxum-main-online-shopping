package az.qedirxum.shopping;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import az.qedirxum.shopping.file.StorageProperties;
import az.qedirxum.shopping.file.StorageService;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class ShoppingApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingApplication.class, args);
		System.out.println("ss");
	}


	@Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {

            storageService.init();
        };
    }
}
