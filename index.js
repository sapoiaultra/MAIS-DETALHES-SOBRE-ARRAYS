// alguns aspectos adicionais sobre arrays
// os arrays são copiados por referência
let nomes = ["João", "Ana", "Carlos"];
let outros_nomes = nomes; // cópia por referência

outros_nomes[1] = "Antônio";
console.log(outros_nomes, nomes);

// os indices podem não ser sequênciais
nomes[100]= "Joaquim";
console.log(nomes);

// importante!
// push e pop são mais rápidos que shift e unshift que vimos anteriormente.
// existe uma outra forma de iteração nos arrays
for(let nome of nomes){ // OF extrai um nome a cada ciclo
  console.log(nome)
}

// ou (não aconselhavel por razões técnicas)
for(let k in nomes){ // IN se refere explicitamente as chaves 
  console.log(nomes[k]);
}

// length pode não corresponder ao número total de elementos do array.
// length não conta o numero de elementos. Vê apenas o último indice e acrescenta + 1.

console.log(nomes.length);