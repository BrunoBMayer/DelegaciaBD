package com.api.ProjetoBD.controllers;

import com.api.ProjetoBD.models.FuncionarioModel;
import com.api.ProjetoBD.Services.FuncionarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    private final FuncionarioService service;

    public FuncionarioController(FuncionarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<FuncionarioModel> listar() {
        return service.listarTodos();
    }

    @PostMapping
    public ResponseEntity<String> salvar(@RequestBody FuncionarioModel f) {
        service.salvar(f);
        return ResponseEntity.status(HttpStatus.CREATED).body("Funcionário salvo com sucesso");
    }

    @GetMapping("/{matricula}")
    public FuncionarioModel buscar(@PathVariable String matricula) {
        return service.buscarPorMatricula(matricula);
    }

    @PutMapping("/{matricula}")
    public ResponseEntity<String> atualizar(@PathVariable String matricula, @RequestBody FuncionarioModel f) {
        f.setMatricula(matricula);
        service.atualizar(f);
        return ResponseEntity.ok("Funcionário atualizado");
    }

    @DeleteMapping("/{matricula}")
    public ResponseEntity<String> deletar(@PathVariable String matricula) {
        service.deletar(matricula);
        return ResponseEntity.ok("Funcionário removido");
    }
}
