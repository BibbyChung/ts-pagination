import { NormalPagination } from './code/normalPagination';
import { MiddlePagination } from './code/middlePagination';

var normalPager = new NormalPagination();
normalPager.SetData(9, 22, 345, 10);
for (var i = 0; i < normalPager.items.length; i++) {
    var pi = normalPager.items[i];
    console.log(pi.ItemText);
}

var middlePager = new MiddlePagination();
middlePager.SetData(9, 10, 1000, 10);
for (var i = 0; i < middlePager.items.length; i++) {
    var pi = middlePager.items[i];
    console.log(pi.ItemText);
}