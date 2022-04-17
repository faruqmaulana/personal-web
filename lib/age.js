const getAge = () => {
  const diff = Date.now() - new Date("2002, 10, 24").getTime();
  const age = new Date(diff);

  return Math.abs(age.getUTCFullYear() - 1970);
};

export default getAge;
