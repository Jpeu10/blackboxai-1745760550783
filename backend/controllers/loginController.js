const jwt = require('jsonwebtoken');

// Simulação simples de usuários para autenticação
const users = [
  { id: 1, email: 'admin@example.com', password: 'admin123', role: 'Administrador' },
  { id: 2, email: 'agricultor@example.com', password: 'agricultor123', role: 'Agricultor' },
];

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }

  const token = jwt.sign(
    { uid: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '12h' }
  );

  res.json({ token });
};
