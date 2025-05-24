//OK
package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.PessoaModel;
import com.api.ProjetoBD.Services.PessoaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    private final PessoaService service;

    public PessoaController(PessoaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody PessoaModel p) {
        service.salvar(p);
        return ResponseEntity.ok("Pessoa salva com sucesso");
    }

    @GetMapping
    public List<PessoaModel> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public PessoaModel buscar(@PathVariable String id) {
        return service.buscarPorId(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable String id, @RequestBody PessoaModel p) {
        p.setIdPessoa(id);
        service.atualizar(p);
        return ResponseEntity.ok("Pessoa atualizada com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {
        service.deletar(id);
        return ResponseEntity.ok("Pessoa removida com sucesso");
    }
}
