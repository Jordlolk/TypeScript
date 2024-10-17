/* 
A interface no TS é usada para estabelecer uma maior segurança ao código, uma leitura mais 
fácil. Evita com que funçoes, classes e muitos outros tipos de var, recebam valores errados. 
*/
interface structOfUser {
  name: string;
  age: number;
  statusAge: string;
  cpf: string
}

const usuario1 : structOfUser = {
  name : 'Pedro',
  age : 15,
  statusAge : this.age < 18 ? 'Menor de idade' : 'Maior de idade',
  cpf : '031.230.412-13'
}
/* 
  Caso algo não esteja de acordo com o sctructOfUser o VS retorna isso:
  "O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)
  interface.ts(7, 3): O tipo esperado vem da propriedade 'propDaInterface', 
  que é declarada aqui no tipo 'structOfUser'."
*/