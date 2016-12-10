import { NormalPagination } from './code/normalPagination';
import { MiddlePagination } from './code/middlePagination';

let normal = new NormalPagination(3, 22, 345, 10);
normal.build();
for(let p of normal.items){
    console.log(p);
}

// let middle = new MiddlePagination(9, 10, 1000, 10);
// middle.build();
// for(let p of middle.items){
//     console.log(p);
// }