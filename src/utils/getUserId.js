import jwt from 'jsonwebtoken';

const getUserId = (request, requireAuth = true) => {
  const header = request.request
    ? request.request.headers.authorisation
    : request.connection.contect.Authorization;

  if (header) {
    const token = header.replace('Bearer ', '');
    const decoded = jwt.verify(token, 'secret');
    return decoded.userId;
  }

  if (requireAuth) {
    throw new Error('Authentication required');
  }

  return null;
};

export { getUserId as default };
