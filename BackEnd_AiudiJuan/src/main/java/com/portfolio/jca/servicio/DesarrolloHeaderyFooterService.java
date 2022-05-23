package com.portfolio.jca.servicio;

import com.portfolio.jca.entidad.HeaderyFooter;
import com.portfolio.jca.interfaz.IHeaderyFooterServicio;
import com.portfolio.jca.repositorio.IHeaderyFooterRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DesarrolloHeaderyFooterService implements IHeaderyFooterServicio{
    //Con el autowired realizo inyección de dependencia
    @Autowired IHeaderyFooterRepositorio iheaderyfooterrepositorio;

    @Override
    public List<HeaderyFooter> getHeaderyFooter() {
        List<HeaderyFooter> headeryfooter = iheaderyfooterrepositorio.findAll();
        return headeryfooter;
    }

    @Override
    public void saveHeaderyFooter(HeaderyFooter headeryfooter) {
        iheaderyfooterrepositorio.save(headeryfooter);
    }

    @Override
    public void deleteHeaderyFooter(Long id) {
        iheaderyfooterrepositorio.deleteById(id);
    }

    @Override
    public HeaderyFooter finHeaderyFooter(Long id) {
        HeaderyFooter headeryfooter = iheaderyfooterrepositorio.findById(id).orElse(null);
        return headeryfooter;
    }
    
}
