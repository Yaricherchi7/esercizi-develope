const user = {
  id: 1,
  name: "John",
  age: 25,
};
function saveData(newUser) {
  localStorage.setItem("user", JSON.stringify(newUser));
}

saveData(user);
