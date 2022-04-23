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