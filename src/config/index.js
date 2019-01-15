export const proxy =
  process.env.NODE_ENV === 'production'
    ? 'https://fitnote.inhere.top/api'
    : 'http://localhost:7001/api';
