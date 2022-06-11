const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  try {
    //async kedua promise
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    //spread kedua data
    const data = await [...theaterIXX, ...theaterVGC];

    //hitung jumlah elemen yg sesuai keyword
    const countMatchedKey = data.filter(item => {
      return item.hasil == keyword
    }).length;

    return countMatchedKey
  } catch (err) {
    console.error(err)
  }
};

module.exports = {
  promiseOutput,
};
