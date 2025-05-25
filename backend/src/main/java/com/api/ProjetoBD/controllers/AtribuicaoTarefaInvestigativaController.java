//OK
package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.AtribuicaoTarefaInvestigativaModel;
import com.api.ProjetoBD.Services.AtribuicaoTarefaInvestigativaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/atribuicoes")
public class AtribuicaoTarefaInvestigativaController {

    private final AtribuicaoTarefaInvestigativaService service;

    public AtribuicaoTarefaInvestigativaController(AtribuicaoTarefaInvestigativaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody AtribuicaoTarefaInvestigativaModel a) {
        service.save(a);
        return ResponseEntity.ok("Atribuição salva com sucesso");
    }

    @GetMapping
    public List<AtribuicaoTarefaInvestigativaModel> listar() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public AtribuicaoTarefaInvestigativaModel buscar(@PathVariable String id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable String id, @RequestBody AtribuicaoTarefaInvestigativaModel a) {
        a.setIdAtribuicao(id);
        service.update(a);
        return ResponseEntity.ok("Atribuição atualizada");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {
        service.deleteById(id);
        return ResponseEntity.ok("Atribuição deletada");
    }
}
