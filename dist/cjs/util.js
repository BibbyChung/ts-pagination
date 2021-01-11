"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTableToTypeArray = void 0;
const convertTableToTypeArray = (dataTable) => {
    const arr = [];
    for (const obj of dataTable) {
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
exports.convertTableToTypeArray = convertTableToTypeArray;
//# sourceMappingURL=util.js.map