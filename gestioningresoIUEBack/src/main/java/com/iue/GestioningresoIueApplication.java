package com.iue;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.app"})
public class GestioningresoIueApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestioningresoIueApplication.class, args);
	}

}
