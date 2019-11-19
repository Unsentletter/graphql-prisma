import jwt from 'jsonwebtoken';

const generateToken = userId => {
  return jwt.sign({ userId: userId }, 'secret', { expiresIn: '7 days' });
};

export { generateToken as default };
