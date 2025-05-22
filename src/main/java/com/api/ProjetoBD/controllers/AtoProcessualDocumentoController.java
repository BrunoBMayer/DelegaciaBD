package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.AtoProcessualDocumentoModel;
import com.api.ProjetoBD.Services.AtoProcessualDocumentoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ato-processual-documento")
public class AtoProcessualDocumentoController {

    private final AtoProcessualDocumentoService service;

    public AtoProcessualDocumentoController(AtoProcessualDocumentoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody AtoProcessualDocumentoModel a) {
        service.save(a);
        return ResponseEntity.ok("Ato processual salvo com sucesso");
    }

    @GetMapping
    public List<AtoProcessualDocumentoModel> listar() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public AtoProcessualDocumentoModel buscar(@PathVariable String id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable String id, @RequestBody AtoProcessualDocumentoModel a) {
        a.setIdAtoDocumento(id);
        service.update(a);
        return ResponseEntity.ok("Ato processual atualizado");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {
        service.deleteById(id);
        return ResponseEntity.ok("Ato processual deletado");
    }
}
