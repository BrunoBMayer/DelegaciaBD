package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.Services.AtoProcessualDocumentoService;
import com.api.ProjetoBD.models.AtoProcessualDocumentoModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/corregedorias")
public class CorregedoriaController {

    private final AtoProcessualDocumentoService corregedoriaDAO;

    public CorregedoriaController(AtoProcessualDocumentoService corregedoriaDAO) {
        this.corregedoriaDAO = corregedoriaDAO;
    }

    // List all
    @GetMapping
    public String list(Model model) {
        model.addAttribute("corregedorias", corregedoriaDAO.findAll());
        return "corregedorias/list";  // list.html
    }

    // Show create form
    @GetMapping("/new")
    public String showForm(Model model) {
        model.addAttribute("corregedoria", new AtoProcessualDocumentoModel());
        return "corregedorias/form";  // form.html
    }

    // Save new
    @PostMapping
    public String save(@ModelAttribute AtoProcessualDocumentoModel corregedoria) {
        corregedoriaDAO.save(corregedoria);
        return "redirect:/corregedorias";
    }

    // Edit form
    @GetMapping("/edit/{cnpj}")
    public String edit(@PathVariable String cnpj, Model model) {
        model.addAttribute("corregedoria", corregedoriaDAO.findByCnpj(cnpj));
        return "corregedorias/form";  // reuse the form
    }

    // Update existing
    @PostMapping("/update")
    public String update(@ModelAttribute AtoProcessualDocumentoModel corregedoria) {
        corregedoriaDAO.update(corregedoria);
        return "redirect:/corregedorias";
    }

    // Delete
    @GetMapping("/delete/{cnpj}")
    public String delete(@PathVariable String cnpj) {
        corregedoriaDAO.deleteByCnpj(cnpj);
        return "redirect:/corregedorias";
    }
}
