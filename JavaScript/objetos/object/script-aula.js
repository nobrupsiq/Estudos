// OBJECT
// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

const pessoa = new Object({
  nome: 'Bruno',
  idade: 28,
})


// MÉTODOS DE OBJECT
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro).init('Honda');
// console.log(honda.acelerar())

const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.buzinar())


// OBJECT.ASSIGN()
// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

// console.log(carro2)


// OBJECT.DEFINEPROPERTIES()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.


const moto2 = {}
// Existe também o Object.defineProperty, para uma propriedade única.
Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  }
})

// GET E SET
// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const moto3 = {}
Object.defineProperties(moto3, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto3.velocidade = 200;
moto3.velocidade;
// Velocidade 200



// OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


// OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro3);
// ['marca', 'ano']
Object.values(carro3);
// ['Ford', 2018]
Object.entries(carro3);
// [['marca', 'Ford'], ['ano', 2018]]



// OBJECT.GETOWNPROPERTYNAMES(OBJ)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro4 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro4);
// ['marca', 'ano']


// OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

const novaFruta = frutas1;
novaFruta[0] = 'Uva';
Object.is(frutas1, novaFruta) // true


// OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

const carro5 = {
  marca: 'Ford',
  ano: 2018,
}

Object.freeze(carro5);
Object.seal(carro5);
Object.preventExtensions(carro5);
// formas de verificar
Object.isFrozen(carro5); // true
Object.isSealed(carro5); // true
Object.isExtensible(carro5); // false



// PROPRIEDADES E MÉTODOS DO PROTÓTIPO
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

const frutas3 = ['Banana', 'Uva'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; //String


// {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.

