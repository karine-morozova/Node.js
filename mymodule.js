// const sqrt = Math.sqrt;
// export const square = x => x * x;
// export const diag = (x,y) => sqrt(square(x) + square(y));

// объект со свойствами для экспорта

const sqrt = Math.sqrt;
 const square = x => x * x;
 const diag = (x,y) => sqrt(square(x) + square(y));

 export {square, diag};

//  Default export

export default function myFunction () { console.log("Kari")};
export default class MyClass {};