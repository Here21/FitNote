const info = (title, ...body) => {
  if (checkEnv()) {
    console.log(title, ...body);
  }
};

const warn = (title, ...body) => {
  if (checkEnv()) {
    console.warn(title, ...body);
  }
};

const error = (title, ...body) => {
  if (checkEnv()) {
    console.error(title, ...body);
  }
};

function checkEnv() {
  return process.env.NODE_ENV !== 'production';
}

export default {
  info,
  warn,
  error
};
