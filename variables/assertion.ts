let n: any = "Arara";
let d: number = n as number;
console.log(d); // Arara
console.log(typeof d); // outPut = string
//let d : string = (n as number) -- Aqui o TS retorna erro.
