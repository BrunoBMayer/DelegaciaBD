DELIMITER //
CREATE PROCEDURE listar_funcionarios()
BEGIN
    SELECT
        f.matricula,
        f.nome,
        f.fk_Corregedoria_CNPJ,
        f.tipo_funcionario
    FROM Funcionario f
    LEFT JOIN Corregedoria c ON f.fk_Corregedoria_CNPJ = c.CNPJ
    ORDER BY f.nome;
END;
//
DELIMITER ;
