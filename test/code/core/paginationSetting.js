(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var PaginationSetting = (function () {
        function PaginationSetting() {
        }
        return PaginationSetting;
    }());
    exports.PaginationSetting = PaginationSetting;
});
//# sourceMappingURL=paginationSetting.js.map
