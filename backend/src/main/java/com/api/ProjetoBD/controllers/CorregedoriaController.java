//OK
package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.Services.CorregedoriaService;
import com.api.ProjetoBD.models.CorregedoriaModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/corregedorias")
public class CorregedoriaController {

    private final CorregedoriaService service;

    public CorregedoriaController(CorregedoriaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody CorregedoriaModel c) {
        service.save(c);
        return ResponseEntity.ok("Corregedoria salva com sucesso");
    }

    @GetMapping
    public List<CorregedoriaModel> listar() {
        return service.findAll();
    }

    @GetMapping("/{cnpj}")
    public CorregedoriaModel buscar(@PathVariable String cnpj) {
        return service.findByCnpj(cnpj);
    }

    @PutMapping("/{cnpj}")
    public ResponseEntity<String> atualizar(@PathVariable String cnpj, @RequestBody CorregedoriaModel c) {
        c.setCnpj(cnpj);
        service.update(c);
        return ResponseEntity.ok("Corregedoria atualizada");
    }

    @DeleteMapping("/{cnpj}")
    public ResponseEntity<String> deletar(@PathVariable String cnpj) {
        service.deleteByCnpj(cnpj);
        return ResponseEntity.ok("Corregedoria deletada");
    }
}
