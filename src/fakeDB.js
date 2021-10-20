const getDb = () => localStorage.getItem("user_info");
const updateDb = (user) => {
  localStorage.setItem("user_info", JSON.stringify(user));
};

const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
  } else {
    const user_info = JSON.parse(exists);
    delete user_info[id];
    updateDb(user_info);
  }
};

const addToDb = (id, name) => {
  const exists = getDb();
  console.log(exists);
  let user_info = {};
  if (!exists) {
    user_info[id] = name;
  } else {
    user_info = JSON.parse(exists);
    user_info[id] = name;
  }

  console.log(user_info);
  updateDb(user_info);
};

const getUserInfo = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

export { addToDb, getUserInfo };
