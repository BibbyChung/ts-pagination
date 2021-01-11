"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.toConvertType = function () {
    const arr = [];
    for (const obj of this) {
        const newObj = {};
        for (const p in obj) {
            const pArr = p.split(':');
            const newP = pArr[0];
            const v = obj[p].toString();
            if (pArr.length === 1) {
                newObj[newP] = v;
                continue;
            }
            const postfix = pArr[1];
            if (postfix === 'Number') {
                newObj[newP] = parseFloat(v);
            }
            if (postfix === 'Date') {
                newObj[newP] = new Date(v);
            }
            if (postfix === 'Boolean') {
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