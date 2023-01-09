import  express  from 'express';
import {inserir, buscar, deletar, alterar} from '../controllers/livroControllers.js'

const app = express();
app.use(express.json());

//Pagina principal
app.get('/', (req, res) => res.send('Pagina Inicial!'));

//Endpoint de consulta de livro
app.get('/livros', async (req, res) => {
    let livros = await buscar()
    res.status(200).json(livros)
})

//Endpoint de consulta de livro pelo isbn
app.get('/livros/:isbn', async (req, res) => {
    let livros = await buscar(req.params.isbn)    
    res.status(200).json(livros);

})

//Endpoint cadastrar um novo livro
    app.post('/livros/inserir', async (req, res) => {
        const mensagem =  await inserir(req.body)  
        res.status(200).json(mensagem);
    })


//Endpoint para atualizar o cadastro de livros
app.put('/livros/alterar/:isbn', async (req, res) => {
    await alterar(req.params.isbn, req.body)
    res.status(200).send("Cadastro atualizado")
})


//Endpoint para excluir o cadastro de livros
app.delete('/livros/delete/:isbn', async(req,res) =>{
    await deletar(req.params.isbn)
    res.status(200).send("O livro foi excluido com sucesso!")
})

export default app