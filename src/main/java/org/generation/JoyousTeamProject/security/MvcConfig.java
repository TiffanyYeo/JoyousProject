package org.generation.JoyousTeamProject.security;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class MvcConfig implements WebMvcConfigurer{

    //WebMVCConfigurer is an interface ( so use implements)
    //To configure Spring MVC and setup view controllers to expose these templates and static folder
    //HTMLs, CSSS/Images/JS folders

    @Value("${image.folder}")
    private String imageFolder;

    public void addViewControllers(ViewControllerRegistry registry) {
        //Map the browser's URL to a specific View (HTML) inside resources/templates directory
        registry.addViewController("/").setViewName("homepage");
        registry.addViewController("/homepage").setViewName("homepage");
        registry.addViewController("/aboutUs").setViewName("aboutUs");
        registry.addViewController("/Shop").setViewName("Shop");
        registry.addViewController("/form").setViewName("form");
        registry.addViewController("/admin").setViewName("admin");
        registry.addViewController("/logout").setViewName("homepage");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);

        exposeDirectory(registry);
    }

    private void exposeDirectory(ResourceHandlerRegistry registry) {

        Path uploadDir = Paths.get(imageFolder);

        String uploadPath = uploadDir.toFile().getAbsolutePath();
        System.out.println(uploadPath);

        registry.addResourceHandler("/" + imageFolder +"/**")
                .addResourceLocations("file:" + uploadPath + "/")
                .setCachePeriod(0)
                .resourceChain(true)
                .addResolver(new PathResourceResolver());
    }

}