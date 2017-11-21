(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var PagerItem = (function () {
        function PagerItem() {
        }
        return PagerItem;
    }());
    exports.PagerItem = PagerItem;
    (function (PagerEnum) {
        PagerEnum[PagerEnum["Number"] = 0] = "Number";
        PagerEnum[PagerEnum["First"] = 1] = "First";
        PagerEnum[PagerEnum["Last"] = 2] = "Last";
        PagerEnum[PagerEnum["PreGroup"] = 3] = "PreGroup";
        PagerEnum[PagerEnum["NextGroup"] = 4] = "NextGroup";
        PagerEnum[PagerEnum["Previous"] = 5] = "Previous";
        PagerEnum[PagerEnum["Next"] = 6] = "Next";
    })(exports.PagerEnum || (exports.PagerEnum = {}));
    var PagerEnum = exports.PagerEnum;
});

//# sourceMappingURL=pagerItem.js.map
