const mongoose = require("mongoose");
const { data } = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    let newData = data.map((obj)=>({...obj , owner:"679679d34623583125403fea"}));
    await Listing.insertMany(newData);
    console.log("data enter successfully");
}

initDB();