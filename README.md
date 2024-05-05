# Desafio Dio Introdução Prática Ao TypeScript

### **Introdução Prática ao TypeScript**

**Introdução:**

TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que estende o JavaScript, adicionando tipagem estática. Ela permite que os desenvolvedores escrevam código JavaScript mais robusto e mantenível, aproveitando os benefícios da tipagem estática.

## Desafio 1
 Como podemos rodar isso em um arquivo .ts sem causar erros? 

```javascript
let employee = {};
employee.code = 10;
employee.name = "John";
```

## Desafio 2
Como podemos melhorar o esse código usando TS? 

```javascript
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
```

## Desafio 3
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

```javascript
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
```

## De outra forma:

I**Introdução Prática ao TypeScript**

**Introdução:**

TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que estende o JavaScript, adicionando tipagem estática. Ela permite que os desenvolvedores escrevam código JavaScript mais robusto e mantenível, aproveitando os benefícios da tipagem estática.

**Pré-requisitos:**

- Conhecimento básico de JavaScript
- Editor de código ou IDE (por exemplo, Visual Studio Code, WebStorm)
- Node.js instalado

**Configurando o TypeScript:**

1. Instale o TypeScript globalmente usando npm:

   plaintext

   ![Done](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/b3baca6de20012788f7d.svg)![Copy](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/7120b68615ebe4b28075.svg)

   ```plaintext
   npm install -g typescript
   ```

2. Crie um novo projeto TypeScript:

   plaintext

   ![Done](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/b3baca6de20012788f7d.svg)![Copy](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/7120b68615ebe4b28075.svg)

   ```plaintext
   mkdir meu-projeto-typescript
   cd meu-projeto-typescript
   npm init -y
   ```

3. Adicione o TypeScript ao projeto:

   plaintext

   ![Done](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/b3baca6de20012788f7d.svg)![Copy](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/7120b68615ebe4b28075.svg)

   ```plaintext
   npm install --save-dev typescript
   ```

#### **Criando um Arquivo TypeScript:**

1. Crie um arquivo com extensão `.ts` (por exemplo, `main.ts`).
2. Escreva o código TypeScript no arquivo.

**Exemplo de Código TypeScript:**

typescript

![Done](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/b3baca6de20012788f7d.svg)![Copy](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/7120b68615ebe4b28075.svg)

```typescript
// main.ts
let nome: string = "João";
let idade: number = 30;

console.log(`Nome: ${nome}, Idade: ${idade}`);
```

#### **Compilando o TypeScript para JavaScript:**

1. Abra o terminal e navegue até o diretório do projeto.

2. Compile o TypeScript para JavaScript usando o comando:

   plaintext

   ![Done](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/b3baca6de20012788f7d.svg)![Copy](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/7120b68615ebe4b28075.svg)

   ```plaintext
   tsc
   ```

### **Executando o JavaScript Compilado:**

1. Após a compilação, um arquivo JavaScript (`main.js`) será gerado.

2. Execute o JavaScript usando o comando:

   plaintext

   ![Done](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/b3baca6de20012788f7d.svg)![Copy](chrome-extension://igpdmclhhlcpoindmhkhillbfhdgoegm/7120b68615ebe4b28075.svg)

   ```plaintext
   node main.js
   ```

#### **Recursos Adicionais:**

- Documentação do TypeScript
- Tutorial do TypeScript
- Playground do TypeScript

### **Conclusão:**

Esta introdução prática ao TypeScript fornece os passos iniciais para começar a usar a linguagem. Ao aproveitar a tipagem estática, o TypeScript ajuda os desenvolvedores a escrever código JavaScript mais robusto e confiável.