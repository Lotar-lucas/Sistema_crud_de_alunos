const transformToLowerCase = async (studentData) => {
  const ArrayLowerCase = Object.values(studentData).map((value) => value.toLowerCase());
  return {
    username: ArrayLowerCase[0],
    email: studentData.email,
    cpf: ArrayLowerCase[2],
  };
};

module.exports = { transformToLowerCase };
