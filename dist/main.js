"use strict";
const normalPagination_1 = require('./code/normalPagination');
const middlePagination_1 = require('./code/middlePagination');
let normal = new normalPagination_1.NormalPagination(3, 22, 345, 10);
normal.build();
for (let i = 0; i < normal.items.length; i++) {
    let pi = normal.items[i];
    console.log(pi.text);
}
let middle = new middlePagination_1.MiddlePagination(9, 10, 1000, 10);
middle.build();
for (let i = 0; i < middle.items.length; i++) {
    let pi = middle.items[i];
    console.log(pi.text);
}

//# sourceMappingURL=main.js.map
