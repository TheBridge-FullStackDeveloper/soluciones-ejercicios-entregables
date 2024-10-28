const btn = document.getElementById("btn");
const usersContainer = document.querySelector(".users-container");

let users = [];

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => (users = res.data))
  .catch((err) => console.error(err));

console.log(users);

function pintarUsuarios() {
  usersContainer.innerHTML = "";
  for (const user of users) {
    usersContainer.innerHTML += `<p>${user.name}</p>`;
  }
}

btn.addEventListener("click", pintarUsuarios);
