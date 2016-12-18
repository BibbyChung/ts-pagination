"use strict";
Array.prototype.toConvertType = function () {
    var arr = [];
    for (let obj of this) {
        let newObj = {};
        for (let p in obj) {
            let pArr = p.split(':');
            let newP = pArr[0];
            var v = obj[p].toString();
            if (pArr.length == 1) {
                newObj[newP] = v;
                continue;
            }
            let postfix = pArr[1];
            if (postfix == "Number") {
                newObj[newP] = parseFloat(v);
            }
            if (postfix == "Date") {
                newObj[newP] = new Date(v);
            }
            if (postfix == "Boolean") {
                newObj[newP] = (v === 'true');
            }
        }
        arr.push(newObj);
    }
    return arr;
};
String.prototype.toEvalGetObject = function () {
    return eval(`(${this})`);
};
//# sourceMappingURL=extensions.js.map
