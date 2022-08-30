const request = async (callback) => {
  try {
    await callback();
  } catch (err) {
    throw new Erorr(err);
  }
}