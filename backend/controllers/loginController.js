const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Firebase Auth does not support password verification on server side directly.
    // Usually, client handles Firebase Auth and sends token to backend.
    // Here, we simulate login by verifying user exists in Firebase Auth.

    const user = await admin.auth().getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // In real app, verify token from client instead of password here.
    // For demo, we issue a JWT token with user info.

    const token = jwt.sign(
      { uid: user.uid, email: user.email, role: user.customClaims?.role || 'Agricultor' },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};
