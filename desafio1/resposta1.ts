// Resposta 1
let funcionario = {
    codigo: 10,
    nome: 'Vitor',
};

// Resposta 2
let funcionario2: {codigo: number, nome: string} = {
    codigo: 11,
    nome: 'Geovani'
}

// Resposta 3
interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'Marcos'
}

// Resposta 4
const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}