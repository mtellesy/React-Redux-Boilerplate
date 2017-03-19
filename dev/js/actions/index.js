export const selectUser = (user) => {
  console.log("I clicked on User: ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  };
};
