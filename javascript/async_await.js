async function getUserID() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

async function getUserDetails(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id, // Uses the passed 'id' argument instead of hardcoding 1
        name: "ABCD"
      });
    }, 1000);
  });
}

async function test() {
  let id = await getUserID();
  let details = await getUserDetails(id);
  console.log(details);
}

test();