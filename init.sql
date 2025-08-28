CREATE TABLE IF NOT EXISTS salasdeaula (
    salasdeaulaid SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    capacidade INTEGER NOT NULL,
    removido BOOLEAN DEFAULT FALSE
);

INSERT INTO salasdeaula (descricao, localizacao, capacidade) VALUES
('Laboratório de Redes', 'Bloco C - Sala 101', 25),
('Sala de Reuniões Principal', 'Administração - 2º Andar', 12),
('Anfiteatro', 'Prédio Central', 200),
('Laboratório de Química', 'Bloco B - Térreo', 30);