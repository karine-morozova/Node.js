
// import {square, diag} from "./mymodule.js";

// console.log(square(11));
// console.log(diag(4,3));

// импортиует все экспорты модуля как объект с указанным именем

import * as mymodule from "./mymodule.js";

console.log(mymodule.square(11));
 console.log(mymodule.diag(4,3));

//  Export default

// import myFunction from "./mymodule.js";
// import MyClass from "./mymodule.js";

// myFunction();
// const importClass = new MyClass();