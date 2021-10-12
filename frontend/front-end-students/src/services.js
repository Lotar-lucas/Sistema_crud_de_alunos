const fetchGetAllStudents = async (method, url) => {
  const myHeaders = new Headers();
  const myInit = {
    method,
    headers: myHeaders,
  };
  const response = await fetch(`http://localhost:3000/${url}`, myInit)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log((error)));
  return response;
};

const fetchCreateStudent = async (method, url, username, email, cpf) => {
  // const myHeaders = new Headers();
  // console.log(username);
  const myInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, cpf }),
  };
  const response = await fetch(`http://localhost:3000/${url}`, myInit)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log((error)));
  return response;
};
// { username, email, cpf }
// { method: 'Post', body: 'tulio=faria' }
module.exports = { fetchGetAllStudents, fetchCreateStudent };
