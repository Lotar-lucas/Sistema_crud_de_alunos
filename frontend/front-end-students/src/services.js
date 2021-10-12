const fetchGetAllStudents = (method, url) => {
  const myHeaders = new Headers();
  const myInit = { method, headers: myHeaders };

  const response = fetch(`http://localhost:3000/${url}`, myInit)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error((error)));
  return response;
};

const fetchCreateStudent = (method, url, username, email, cpf) => {
  const myInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, cpf }),
  };
  const response = fetch(`http://localhost:3000/${url}`, myInit)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error((error)));
  return response;
};

const fetchExcludeStudent = (method, url) => {
  const myInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  const response = fetch(`http://localhost:3000/${url}`, myInit)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error));
  return response;
};

const fetchEditStudent = (method, url, username, email, cpf) => {
  const myInit = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, cpf }),
  };
  const response = fetch(`http://localhost:3000/${url}`, myInit)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error((error)));
  return response;
};

module.exports = {
  fetchGetAllStudents,
  fetchCreateStudent,
  fetchExcludeStudent,
  fetchEditStudent,
};
