package com.portfolio.jca.security;

//Esta es la clase que va a controlar todo el jwt

import com.portfolio.jca.security.jwt.JwtEntryPoint;
import com.portfolio.jca.security.jwt.JwtTokenFilter;
import com.portfolio.jca.security.service.UserDetailsImplementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MainSecurity extends WebSecurityConfigurerAdapter{
    @Autowired
    UserDetailsImplementService userDetailsImplementService;
    @Autowired
    JwtEntryPoint jwtEntryPoint;
    
    @Bean
    public JwtTokenFilter jwtTokenFilter(){
        return new JwtTokenFilter();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
//.antMatchers("/auth/**").permitAll()
//.antMatchers("/*/**").permitAll()
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers("**").permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsImplementService).passwordEncoder(passwordEncoder());
    }
    
    
}

/* este sería el MainSecurity sin cambiar la versión
public class MainSecurity {
    @Autowired     
    UserDetailsImplements userDetailsImplements;     
    @Autowired     
    JwtEntryPoint jwtEntryPoint;     
    
    @Bean     
    public JwtTokenFilter jwtTokenFilter() {         
        return new JwtTokenFilter();     
    }     
    
    @Bean     
    public PasswordEncoder passwordEncoder() {         
        return new BCryptPasswordEncoder();     
    }     
    
    @Bean     
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {         
        return authenticationConfiguration.getAuthenticationManager();     
    }     
    
    @Bean     
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {         
        http.cors()
                .and()
                .csrf()
                .disable()                 
                .exceptionHandling()
                .authenticationEntryPoint(jwtEntryPoint).and()                 
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()                 
                .authorizeRequests()                 
                .antMatchers("/**")
                .permitAll()                 
                .anyRequest()
                .authenticated();         
        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);         
        return http.build();     
    } 
}

*/