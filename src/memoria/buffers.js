//Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
let buffer2 = Buffer.from([1,2,3]);
console.log(buffer2);

//Guardar espacio con el tamaño del abcedareo
let abc =  Buffer.alloc(26);
console.log(abc);

for (let i = 0; i< abc.length; i++){
  abc[i] = i + 97;
}

console.log(abc);