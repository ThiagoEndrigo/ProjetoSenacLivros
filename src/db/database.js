import { mongoose } from "mongoose";
mongoose.set('strictQuery', true);

const urlDatabase = 'mongodb+srv://endrigolivraria:livraria@cluster0.of4tgkl.mongodb.net/?retryWrites=true&w=majoritycls';

export const startDB = () => {
    mongoose.connect(urlDatabase, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
          console.log("Conexão com MongoDB realizada com sucesso! Url: http://localhost:80");
      }).catch((erro) => {
          console.log("Erro: Ao estabelecer conexão com mongoDB! Verifique a URL");
      });
    
    const db = mongoose.connection;
   };


