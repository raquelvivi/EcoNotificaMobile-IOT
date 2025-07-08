

INSERT INTO cidade (nome, estado, pais, cep) VALUES
('São Paulo', 'SP', 'Brasil', '01001-000'),     
('Rio de Janeiro', 'RJ', 'Brasil', '20040-002'),
('Belo Horizonte', 'MG', 'Brasil', '30130-010'),
('Salvador', 'BA', 'Brasil', '40010-000'),      
('Porto Alegre', 'RS', 'Brasil', '90010-320'),  
('Recife', 'PE', 'Brasil', '50030-230'),        
('Fortaleza', 'CE', 'Brasil', '60010-000'),     
('Brasília', 'DF', 'Brasil', '70040-010'),      
('Curitiba', 'PR', 'Brasil', '80010-000'),      
('Florianópolis', 'SC', 'Brasil', '88015-120'), 
('Currais Novos', 'RN', 'Brasil', '59380-000'); 

INSERT INTO pessoa (tipo, nome, senha, bairro, email, cidade) VALUES
('prefeitura', 'João Silva', 'senha123', 'Centro', 'joao@gmail.com', 1),
('empresa', 'Maria Oliveira', '123456', 'Jardins', 'maria@gmail.com', 2),
('reciclador', 'Carlos Souza', 'abc123', 'Liberdade', 'carlos@gmail.com', 3),
('comunidade', 'Ana Paula', 'qwerty', 'Copacabana', 'ana@gmail.com', 4),
('reciclador', 'Rafael Lima', 'senha321', 'Pinheiros', 'rafael@gmail.com', 5),
('reciclador', 'Juliana Costa', '123abc', 'Bela Vista', 'juliana@gmail.com', 6),
('reciclador', 'Lucas Pereira', 'lucas2023', 'Mooca', 'lucas@gmail.com', 7),
('reciclador', 'Fernanda Rocha', 'fer123', 'Barra', 'fernanda@gmail.com', 8),
('empresa', 'Pedro Henrique', 'pedro!@#', 'Ipiranga', 'pedro@gmail.com', 9),
('reciclador', 'Aline Dias', 'aline321', 'Santa Cecília', 'aline@gmail.com', 10),
('reciclador', 'Vinicius Melo', 'vinimelo', 'Santana', 'vinicius@gmail.com', 1),
('comunidade', 'Bruna Nogueira', 'brunaa', 'Centro', 'bruna@gmail.com', 2),
('reciclador', 'Diego Ramos', 'diego123', 'Aclimação', 'diego@gmail.com', 3),
('reciclador', 'Laura Martins', 'lauram', 'Grajaú', 'laura@gmail.com', 4),
('reciclador', 'Henrique Costa', 'costah', 'Vila Mariana', 'henrique@gmail.com', 5),
('reciclador', 'Letícia Prado', 'leticia@', 'Lapa', 'leticia@gmail.com', 6),
('reciclador', 'Ricardo Alves', 'ricardo01', 'Tatuapé', 'ricardo@gmail.com', 7),
('prefeitura', 'Natália Gomes', 'natalia#', 'Centro', 'natalia@gmail.com', 8),
('reciclador', 'Bruno Souza', 'b_souza', 'Campo Belo', 'bruno@gmail.com', 9),
('reciclador', 'Camila Andrade', 'camila!', 'Perdizes', 'camila@gmail.com', 10),

('adm', 'Vivian', 'vivian123', 'IFRN', 'vivian@gmail.com', 11),
('adm', 'Welson', 'welson123', 'IFRN', 'welson@gmail.com', 11),
('adm', 'Jainy', 'jainy123', 'IFRN', 'jainy@gmail.com', 11),
('adm', 'Eduarda', 'eduarda123', 'IFRN', 'eduarda@gmail.com', 11),
('adm', 'Kennyd', 'kennyd123', 'IFRN', 'kennyd@gmail.com', 11);

INSERT INTO lixeira (nome, situacao, ip, latitude, longitude) VALUES
('Lixeira 01', 'ativa', '192.168.1.1', -23.550520, -46.633308),
('Lixeira 02', 'inativa', '192.168.1.2', -22.903540, -43.209587),
('Lixeira 03', 'manutenção', '192.168.1.3', -19.916681, -43.934493),
('Lixeira 04', 'ativa', '192.168.1.4', -12.971599, -38.501305),
('Lixeira 05', 'ativa', '192.168.1.5', -30.034647, -51.217659),
('Lixeira 06', 'inativa', '192.168.1.6', -8.047562, -34.877003),
('Lixeira 07', 'ativa', '192.168.1.7', -3.717220, -38.543304),
('Lixeira 08', 'manutenção', '192.168.1.8', -15.793889, -47.882778),
('Lixeira 09', 'ativa', '192.168.1.9', -16.686882, -49.264788),
('Lixeira 10', 'inativa', '192.168.1.10', -25.428954, -49.267137),
('Lixeira 11', 'ativa', '192.168.1.11', -27.595377, -48.548050),
('Lixeira 12', 'ativa', '192.168.1.12', -20.315500, -40.312800),
('Lixeira 13', 'manutenção', '192.168.1.13', -9.665990, -35.735000),
('Lixeira 14', 'ativa', '192.168.1.14', -2.539110, -44.282530),
('Lixeira 15', 'inativa', '192.168.1.15', -7.115320, -34.861100),
('Lixeira 16', 'ativa', '192.168.1.16', -5.794480, -35.211000),
('Lixeira 17', 'ativa', '192.168.1.17', -1.455020, -48.502380),
('Lixeira 18', 'manutenção', '192.168.1.18', -3.119030, -60.021730),
('Lixeira 19', 'ativa', '192.168.1.19', -10.184000, -48.333600),
('Lixeira 20', 'inativa', '192.168.1.20', -5.089210, -42.801600);



INSERT INTO grupo (pessoa, lixeira) VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
(6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
(11, 11), (12, 12), (13, 13), (14, 14), (15, 15),
(16, 16), (17, 17), (18, 18), (19, 19), (20, 20);




-- INSERT INTO cidade (nome, estado, pais, cep) VALUES ('São Paulo', 'SP', 'Brasil', '01001-000'),('Rio de Janeiro', 'RJ', 'Brasil', '20040-002'),('Belo Horizonte', 'MG', 'Brasil', '30130-010'),('Salvador', 'BA', 'Brasil', '40010-000'),('Porto Alegre', 'RS', 'Brasil', '90010-320'),  ('Recife', 'PE', 'Brasil', '50030-230'),('Fortaleza', 'CE', 'Brasil', '60010-000'),     ('Brasília', 'DF', 'Brasil', '70040-010'),      ('Curitiba', 'PR', 'Brasil', '80010-000'),      ('Florianópolis', 'SC', 'Brasil', '88015-120'), ('Currais Novos', 'RN', 'Brasil', '59380-000'); 

-- INSERT INTO pessoa (tipo, nome, senha, bairro, email, cidade) VALUES ('prefeitura', 'João Silva', 'senha123', 'Centro', 'joao@gmail.com', 1),('empresa', 'Maria Oliveira', '123456', 'Jardins', 'maria@gmail.com', 2),('reciclador', 'Carlos Souza', 'abc123', 'Liberdade', 'carlos@gmail.com', 3),('comunidade', 'Ana Paula', 'qwerty', 'Copacabana', 'ana@gmail.com', 4),('reciclador', 'Rafael Lima', 'senha321', 'Pinheiros', 'rafael@gmail.com', 5),('reciclador', 'Juliana Costa', '123abc', 'Bela Vista', 'juliana@gmail.com', 6),('reciclador', 'Lucas Pereira', 'lucas2023', 'Mooca', 'lucas@gmail.com', 7),('reciclador', 'Fernanda Rocha', 'fer123', 'Barra', 'fernanda@gmail.com', 8),('empresa', 'Pedro Henrique', 'pedro!@#', 'Ipiranga', 'pedro@gmail.com', 9),('reciclador', 'Aline Dias', 'aline321', 'Santa Cecília', 'aline@gmail.com', 10),('reciclador', 'Vinicius Melo', 'vinimelo', 'Santana', 'vinicius@gmail.com', 1),('comunidade', 'Bruna Nogueira', 'brunaa', 'Centro', 'bruna@gmail.com', 2),('reciclador', 'Diego Ramos', 'diego123', 'Aclimação', 'diego@gmail.com', 3),('reciclador', 'Laura Martins', 'lauram', 'Grajaú', 'laura@gmail.com', 4),('reciclador', 'Henrique Costa', 'costah', 'Vila Mariana', 'henrique@gmail.com', 5),('reciclador', 'Letícia Prado', 'leticia@', 'Lapa', 'leticia@gmail.com', 6),('reciclador', 'Ricardo Alves', 'ricardo01', 'Tatuapé', 'ricardo@gmail.com', 7),('prefeitura', 'Natália Gomes', 'natalia#', 'Centro', 'natalia@gmail.com', 8),('reciclador', 'Bruno Souza', 'b_souza', 'Campo Belo', 'bruno@gmail.com', 9),('reciclador', 'Camila Andrade', 'camila!', 'Perdizes', 'camila@gmail.com', 10),('adm', 'Vivian', 'vivian123', 'IFRN', 'vivian@gmail.com', 11),('adm', 'Welson', 'welson123', 'IFRN', 'welson@gmail.com', 11),('adm', 'Jainy', 'jainy123', 'IFRN', 'jainy@gmail.com', 11),('adm', 'Eduarda', 'eduarda123', 'IFRN', 'eduarda@gmail.com', 11),('adm', 'Kennyd', 'kennyd123', 'IFRN', 'kennyd@gmail.com', 11);

-- INSERT INTO lixeira (nome, situacao, ip, latitude, longitude) VALUES ('Lixeira 01', 'ativa', '192.168.1.1', -23.550520, -46.633308),('Lixeira 02', 'inativa', '192.168.1.2', -22.903540, -43.209587),('Lixeira 03', 'manutenção', '192.168.1.3', -19.916681, -43.934493),('Lixeira 04', 'ativa', '192.168.1.4', -12.971599, -38.501305),('Lixeira 05', 'ativa', '192.168.1.5', -30.034647, -51.217659),('Lixeira 06', 'inativa', '192.168.1.6', -8.047562, -34.877003),('Lixeira 07', 'ativa', '192.168.1.7', -3.717220, -38.543304),('Lixeira 08', 'manutenção', '192.168.1.8', -15.793889, -47.882778),('Lixeira 09', 'ativa', '192.168.1.9', -16.686882, -49.264788),('Lixeira 10', 'inativa', '192.168.1.10', -25.428954, -49.267137),('Lixeira 11', 'ativa', '192.168.1.11', -27.595377, -48.548050),('Lixeira 12', 'ativa', '192.168.1.12', -20.315500, -40.312800),('Lixeira 13', 'manutenção', '192.168.1.13', -9.665990, -35.735000),('Lixeira 14', 'ativa', '192.168.1.14', -2.539110, -44.282530),('Lixeira 15', 'inativa', '192.168.1.15', -7.115320, -34.861100),('Lixeira 16', 'ativa', '192.168.1.16', -5.794480, -35.211000),('Lixeira 17', 'ativa', '192.168.1.17', -1.455020, -48.502380),('Lixeira 18', 'manutenção', '192.168.1.18', -3.119030, -60.021730),('Lixeira 19', 'ativa', '192.168.1.19', -10.184000, -48.333600),('Lixeira 20', 'inativa', '192.168.1.20', -5.089210, -42.801600);

-- INSERT INTO grupo (pessoa, lixeira) VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19), (20, 20);
