import { NormalPagination } from './code/normalPagination';
import { MiddlePagination } from './code/middlePagination';

let normal = new NormalPagination(3, 11, 64, 5);
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