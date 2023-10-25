const mongoose = require("mongoose")

async function main() {

  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect("mongodb+srv://albericojr:DShtBzest5kNUvDa@cluster0.yxfs0vi.mongodb.net/?retryWrites=true&w=majority");
    
    console.log("Conectado ao banco!")

  } catch (error) {

    console.log(`Erro: ${error}`)
  }

}

module.exports = main