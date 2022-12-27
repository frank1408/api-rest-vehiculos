package rodriguez.api.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SiteController {

    @RequestMapping("/")
    public String index(){
        return "index";
    }

    @RequestMapping("/index")
    public String index2(){
        return "index";
    }

    @RequestMapping("/crear")
    public String crear(){
        return "crear";
    }

    @RequestMapping("/crear2")
    public String crear2(){
        return "crear2";
    }

    @RequestMapping("/mostrar")
    public String mostrar(){
        return "/mostrar";
    }

    @RequestMapping("/mostrar-usuario")
    public String mostrarusuario(){
        return "/mostrar-usuario";
    }

    @RequestMapping("/contacto")
    public String contacto(){
        return "contacto";
    }

    @RequestMapping("/login")
    public String login(){
        return "login";
    }


} /* IndexController */
