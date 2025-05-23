//OK
package com.api.ProjetoBD.Services;

import com.api.ProjetoBD.models.FuncionarioModel;
import com.api.ProjetoBD.Repositories.FuncionarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    private final FuncionarioRepository repository;

    public FuncionarioService(FuncionarioRepository repository) {
        this.repository = repository;
    }

    public List<FuncionarioModel> listarTodos() {
        return repository.listarTodos();
    }

    public void salvar(FuncionarioModel funcionario) {
        repository.salvar(funcionario);
    }

    public FuncionarioModel buscarPorMatricula(String matricula) {
        return repository.buscarPorMatricula(matricula);
    }

    public void deletar(String matricula) {
        repository.deletar(matricula);
    }

    public void atualizar(FuncionarioModel funcionario) {
        repository.atualizar(funcionario);
    }
}
