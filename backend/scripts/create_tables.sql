CREATE TABLE solo (
  id SERIAL PRIMARY KEY,
  umidade DECIMAL,
  temperatura DECIMAL,
  ph DECIMAL,
  lat DECIMAL,
  lon DECIMAL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE clima (
  id SERIAL PRIMARY KEY,
  vento DECIMAL,
  chuva BOOLEAN,
  temperatura DECIMAL,
  lat DECIMAL,
  lon DECIMAL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE missoes (
  id SERIAL PRIMARY KEY,
  requested_by TEXT,
  status TEXT,
  dados JSONB,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE plantas (
  id SERIAL PRIMARY KEY,
  imagem_url TEXT,
  diagnostico JSONB,
  lat DECIMAL,
  lon DECIMAL,
  resolvida BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMP DEFAULT NOW()
);
