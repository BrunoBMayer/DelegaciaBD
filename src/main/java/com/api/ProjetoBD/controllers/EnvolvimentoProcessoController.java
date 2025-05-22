//OK
package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.EnvolvimentoProcessoModel;
import com.api.ProjetoBD.Services.EnvolvimentoProcessoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/envolvimentos")
public class EnvolvimentoProcessoController {

    private final EnvolvimentoProcessoService service;

    public EnvolvimentoProcessoController(EnvolvimentoProcessoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody EnvolvimentoProcessoModel e) {
        service.save(e);
        return ResponseEntity.ok("Envolvimento salvo com sucesso");
    }

    @GetMapping
    public List<EnvolvimentoProcessoModel> listar() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public EnvolvimentoProcessoModel buscar(@PathVariable String id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable String id, @RequestBody EnvolvimentoProcessoModel e) {
        e.setIdEnvolvimento(id);
        service.update(e);
        return ResponseEntity.ok("Envolvimento atualizado");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {
        service.deleteById(id);
        return ResponseEntity.ok("Envolvimento deletado");
    }
}
