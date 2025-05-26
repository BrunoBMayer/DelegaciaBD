DELIMITER //
CREATE TRIGGER set_data_registro_padrao
BEFORE INSERT ON Denuncia
FOR EACH ROW
BEGIN
    IF NEW.data_registro_sistema IS NULL THEN
        SET NEW.data_registro_sistema = NOW();
    END IF;
END;
//
DELIMITER ;

