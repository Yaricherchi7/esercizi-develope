const isLogged = true;

function loggedPromise(data) {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(Math.random());
    } else {
      reject(new Error("offline"));
    }
  });
}

function namePromise(nameID) {
  return new Promise((resolve, reject) => {
    if (nameID > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("error"));
    }
  });
}

loggedPromise(isLogged)
  .then(namePromise)
  .then((run) => console.log(run))
  .catch((err) => console.log(err))
  .finally(() => console.log("succes"))

