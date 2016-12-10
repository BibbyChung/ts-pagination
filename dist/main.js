"use strict";
const normalPagination_1 = require('./code/normalPagination');
const middlePagination_1 = require('./code/middlePagination');
var normalPager = new normalPagination_1.NormalPagination();
normalPager.SetData(9, 22, 345, 10);
normalPager.DoProcess(9, 22, 345);
for (var i = 0; i < normalPager.items.length; i++) {
    var pi = normalPager.items[i];
    console.log(pi.text);
}
var middlePager = new middlePagination_1.MiddlePagination();
middlePager.SetData(9, 10, 1000, 10);
middlePager.DoProcess();
for (var i = 0; i < middlePager.items.length; i++) {
    var pi = middlePager.items[i];
    console.log(pi.text);
}

//# sourceMappingURL=main.js.map
