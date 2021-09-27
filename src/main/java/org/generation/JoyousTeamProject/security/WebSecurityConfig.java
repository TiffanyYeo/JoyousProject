package org.generation.JoyousTeamProject.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import javax.sql.*;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .dataSource(dataSource)
                .usersByUsernameQuery("select username, password, enabled from users where username=?")
                .authoritiesByUsernameQuery("select username, role from users where username=?")
        ;
    }

    @CrossOrigin
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();

        //not using the HTTP sercurity default login page
        http.formLogin().loginPage("/admin");

        //if user successfully login, URL will be directed to the productForm.html
        http.formLogin()
                .defaultSuccessUrl("/form");

        http.logout()
                .logoutSuccessUrl("/homepage");

        http.authorizeRequests()
                .antMatchers("/", "/homepage", "/Shop", "/aboutUs").permitAll()
                .antMatchers("/form/**").hasRole("ADMIN")
                .and()
                .formLogin()
                .loginPage("/admin").permitAll()
                .and()
                .logout().permitAll();

    }

}
