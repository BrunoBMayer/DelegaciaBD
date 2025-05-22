DELIMITER //
CREATE PROCEDURE listar_denuncias_detalhadas()
BEGIN
    SELECT
        d.id_denuncia,
        d.data_registro_sistema,
        d.descricao_fato,
        d.status_denuncia,
        p.nome AS denunciante,
        f.nome AS avaliador
    FROM Denuncia d
    LEFT JOIN Pessoa p ON d.fk_Pessoa_id_pessoa = p.id_pessoa
    LEFT JOIN Funcionario f ON d.fk_Funcionario_matricula_avaliador = f.matricula
    ORDER BY d.data_registro_sistema DESC;
END;
//
DELIMITER ;
