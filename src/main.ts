import { NormalPagination } from './code/normalPagination';
import { MiddlePagination } from './code/middlePagination';

let normal = new NormalPagination(3, 22, 345, 10);
normal.build();
for (let i = 0; i < normal.items.length; i++) {
    let pi = normal.items[i];
    console.log(pi.text);
}

let middle = new MiddlePagination(9, 10, 1000, 10);
middle.build();
for (let i = 0; i < middle.items.length; i++) {
    let pi = middle.items[i];
    console.log(pi.text);
}