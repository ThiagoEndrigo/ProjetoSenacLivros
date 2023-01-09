import mongoose from 'mongoose';
const { Schema } = mongoose;

// esse é apenas o schema do documento ("tabela")

const bookSchema = new Schema({
    isbn: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    }
});

export const Livros = mongoose.model('Livros', bookSchema);