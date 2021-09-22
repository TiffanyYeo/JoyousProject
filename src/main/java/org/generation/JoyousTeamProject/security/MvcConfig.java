package org.generation.JoyousTeamProject.security;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer{
    //WebMVCConfigurer is an interface ( so use implements)
    //To configure Spring MVC and setup view controllers to expose these templates and static folder
    //HTMLs, CSSS/Images/JS folders
    public void addViewControllers(ViewControllerRegistry registry) {
        //Map the browser's URL to a specific View (HTML) inside resources/templates directory
        registry.addViewController("/").setViewName("homepage");
        registry.addViewController("/homepage").setViewName("homepage");
        registry.addViewController("/aboutUs").setViewName("aboutUs");
        registry.addViewController("/Shop").setViewName("Shop");
        registry.addViewController("/admin").setViewName("admin");
        registry.addViewController("/form").setViewName("form");

    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);
    }

}