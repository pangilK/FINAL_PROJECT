package com.bitc.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@ComponentScan(basePackages = "com.bitc.controller")
@EnableWebMvc	// annotation-driven
public class ServletContextConfig 
implements WebMvcConfigurer{ 	// 추가 해주면 설정을 편하게 할 수 있음.

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		System.out.println("무언가의 요청");
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");		
	}

	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		registry.jsp("/WEB-INF/views/",".jsp");
	} 	
	
}
