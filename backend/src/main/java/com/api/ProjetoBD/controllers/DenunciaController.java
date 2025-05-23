//OK
package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.DenunciaModel;
import com.api.ProjetoBD.Services.DenunciaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/denuncias")
public class DenunciaController {

    private final DenunciaService service;

    public DenunciaController(DenunciaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody DenunciaModel d) {
        service.save(d);
        return ResponseEntity.ok("Denúncia salva com sucesso");
    }

    @GetMapping
    public List<DenunciaModel> listar() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public DenunciaModel buscar(@PathVariable String id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> atualizar(@PathVariable String id, @RequestBody DenunciaModel d) {
        d.setIdDenuncia(id);
        service.update(d);
        return ResponseEntity.ok("Denúncia atualizada");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletar(@PathVariable String id) {
        service.deleteById(id);
        return ResponseEntity.ok("Denúncia removida");
    }
}
