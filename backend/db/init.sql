-- Criação das tabelas

CREATE TABLE IF NOT EXISTS solo (
  id SERIAL PRIMARY KEY,
  umidade DECIMAL,
  temperatura DECIMAL,
  ph DECIMAL,
  lat DECIMAL,
  lon DECIMAL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clima (
  id SERIAL PRIMARY KEY,
  vento DECIMAL,
  chuva BOOLEAN,
  temperatura DECIMAL,
  lat DECIMAL,
  lon DECIMAL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS missoes (
  id SERIAL PRIMARY KEY,
  requested_by TEXT,
  status TEXT, -- Agendada, EmVoo, Concluída, Bloqueada
  dados JSONB,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS plantas (
  id SERIAL PRIMARY KEY,
  imagem_url TEXT,
  diagnostico JSONB,
  lat DECIMAL,
  lon DECIMAL,
  resolvida BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMP DEFAULT NOW()
);

-- Inserção de dados de exemplo

INSERT INTO solo (umidade, temperatura, ph, lat, lon) VALUES
(45.5, 22.3, 6.8, -23.5505, -46.6333),
(50.2, 21.8, 6.5, -23.5505, -46.6333);

INSERT INTO clima (vento, chuva, temperatura, lat, lon) VALUES
(12.5, TRUE, 25.0, -23.5505, -46.6333),
(8.0, FALSE, 27.3, -23.5505, -46.6333);

INSERT INTO missoes (requested_by, status, dados) VALUES
('admin@example.com', 'Agendada', '{"waypoints":[{"lat":-23.55,"lon":-46.63,"alt":100}]}'),
('agricultor@example.com', 'Concluída', '{"waypoints":[{"lat":-23.56,"lon":-46.64,"alt":120}]}');

INSERT INTO plantas (imagem_url, diagnostico, lat, lon, resolvida) VALUES
('https://example.com/plant1.jpg', '{"diagnosis":"Fungo detectado"}', -23.5505, -46.6333, FALSE),
('https://example.com/plant2.jpg', '{"diagnosis":"Praga detectada"}', -23.5510, -46.6340, TRUE);
