DELIMITER //
CREATE TRIGGER set_status_default_denuncia
BEFORE INSERT ON Denuncia
FOR EACH ROW
BEGIN
    IF NEW.status_denuncia IS NULL OR NEW.status_denuncia = '' THEN
        SET NEW.status_denuncia = 'Recebida';
    END IF;
END;
//
DELIMITER ;
