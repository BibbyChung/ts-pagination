(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Array.prototype.toConvertType = function () {
        var arr = [];
        for (var _i = 0, _a = this; _i < _a.length; _i++) {
            var obj = _a[_i];
            var newObj = {};
            for (var p in obj) {
                var pArr = p.split(':');
                var newP = pArr[0];
                var v = obj[p].toString();
                if (pArr.length === 1) {
                    newObj[newP] = v;
                    continue;
                }
                var postfix = pArr[1];
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
        // tslint:disable-next-line:no-eval
        return eval("(" + this + ")");
    };
});
//# sourceMappingURL=extensions.js.map
