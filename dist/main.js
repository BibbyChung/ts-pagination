"use strict";
const normalPagination_1 = require('./code/normalPagination');
const middlePagination_1 = require('./code/middlePagination');
var normalPager = new normalPagination_1.NormalPagination(3, 22, 345, 10);
normalPager.build();
for (var i = 0; i < normalPager.items.length; i++) {
    var pi = normalPager.items[i];
    console.log(pi.text);
}
var middlePager = new middlePagination_1.MiddlePagination(9, 10, 1000, 10);
middlePager.build();
for (var i = 0; i < middlePager.items.length; i++) {
    var pi = middlePager.items[i];
    console.log(pi.text);
}

//# sourceMappingURL=main.js.map
