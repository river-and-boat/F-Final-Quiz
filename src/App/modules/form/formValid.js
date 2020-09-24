export const validNotNull = (input) => {
  return input !== "";
}

export const validEmail = (email) => {
  const reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(email);
}