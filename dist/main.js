"use strict";
const normalPagination_1 = require('./code/normalPagination');
let normal = new normalPagination_1.NormalPagination(3, 9, 63, 5);
normal.build();
for (let p of normal.items) {
    console.log(p);
}
console.log("total", normal.total);
console.log("current", normal.current);
// let middle = new MiddlePagination(9, 10, 1000, 10);
// middle.build();
// for(let p of middle.items){
//     console.log(p);
// } 

//# sourceMappingURL=main.js.map
