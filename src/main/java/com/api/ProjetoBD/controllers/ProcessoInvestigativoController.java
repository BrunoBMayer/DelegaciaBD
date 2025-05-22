//OK
package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.ProcessoInvestigativoModel;
import com.api.ProjetoBD.Services.ProcessoInvestigativoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/processos")
public class ProcessoInvestigativoController {

    private final ProcessoInvestigativoService service;

    public ProcessoInvestigativoController(ProcessoInvestigativoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody ProcessoInvestigativoModel p) {
        service.save(p);
        return ResponseEntity.ok("Processo salvo com sucesso");
    }

    @GetMapping
    public List<ProcessoInvestigativoModel> listar() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ProcessoInvestigativoModel buscar(@PathVariable String id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable String id, @RequestBody ProcessoInvestigativoModel p) {
        p.setIdProcesso(id);
        service.update(p);
        return ResponseEntity.ok("Processo atualizado com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {
        service.deleteById(id);
        return ResponseEntity.ok("Processo deletado com sucesso");
    }
}
