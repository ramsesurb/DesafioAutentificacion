import mongoose from "mongoose";

const connectionStringUrl = "mongodb+srv://ramses:iddqdq12@eshop.hdewcog.mongodb.net/Eshop?retryWrites=true&w=majority";

  try {
     mongoose.connect(connectionStringUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Base de datos conectada');}
  
  catch (error) {
    console.log('Error al conectar a la base de datos', error)
  }
