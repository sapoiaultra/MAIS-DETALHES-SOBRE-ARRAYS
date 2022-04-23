// alguns aspectos adicionais sobre arrays
// os arrays são copiados por referência
let nomes = ["João", "Ana", "Carlos"];
let outros_nomes = nomes; // cópia por referência

outros_nomes[1] = "Antônio";
console.log(nomes);