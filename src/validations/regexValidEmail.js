const regexValidEmail = (studentData) => {
  const { email } = studentData;
  const REGEX_EMAIL = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  if (!REGEX_EMAIL.test(email)) return { isError: true, message: 'Email do aluno(a) inválido' };
  return { isError: false };
};

module.exports = { regexValidEmail };
