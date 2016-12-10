export { };

declare global {

    interface String {

        toEvalGetObject(): Object;

    }

    interface Array<T> {

        toConvertType(): T[];

    }

}

Array.prototype.toConvertType = function <T>() {

    var arr: T[] = [];

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
            if (postfix == "number") {
                newObj[newP] = parseFloat(v);
            }
            if (postfix == "Date") {
                newObj[newP] = new Date(v);
            }
            if (postfix == "boolean") {
                newObj[newP] = (v === 'true');
            }

        }
        arr.push(newObj as T);
    }
    return arr;

}

String.prototype.toEvalGetObject = function () {

    return eval(`(${this})`);

}
