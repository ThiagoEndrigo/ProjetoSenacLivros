import { Livros } from "../models/livroModel.js";


export async function inserir(objeto) {
    const livro = new Livros(objeto);
    try {
        console.log(objeto.isbn)
        const existlivro = await buscar(objeto.isbn) 
        console.log(existlivro)
        if (existlivro == null) {
            await livro.save();
            return { messagen: "Cadastrado com Sucesso" }
        } else {
            return { messagen: "Cadastrado ja existe" }
        }
    } catch (error) {
        console.error(error)
    }
}

export async function buscar(isbn) {
    console.log(isbn)
    if (!isbn) {
        return Livros.find();
    } else {
        let livro = await Livros.findOne({ isbn });
        return livro;
    }
}

export async function deletar(isbn) {
    try {
        await Livros.findOneAndDelete({ isbn: isbn });
    } catch (error) {
        console.error(error);
    }
}

export async function alterar(isbn, objeto) {
    try {
        await Livros.findOneAndUpdate({ isbn: isbn }, objeto);
    } catch (error) {
        console.error(error);
    }
}