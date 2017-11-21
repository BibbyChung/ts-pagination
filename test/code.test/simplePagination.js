(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'assert', './../extensions', '../code/simplePagination'], factory);
    }
})(function (require, exports) {
    "use strict";
    var assert = require('assert');
    require('./../extensions');
    var simplePagination_1 = require('../code/simplePagination');
    var prepareToRun = function (_self, tag) {
        _self.Before({ tags: [tag] }, function (scenario) {
        });
        _self.After({ tags: [tag] }, function (scenario) {
        });
    };
    return function () {
        prepareToRun(this, '@ud_G');
        var pageInfo;
        var pagination;
        this.Given(/^ud_G ==> prepare the pagination data\.$/, function (table) {
            pageInfo = table.hashes().toConvertType()[0];
        });
        this.When(/^ud_G ==> prepare the normal pagination\.$/, function () {
            pagination = new simplePagination_1.SimplePagination(pageInfo.itemSize, pageInfo.current, pageInfo.dataCount, pageInfo.pageSize);
            pagination.build();
        });
        this.Then(/^ud_G ==> the page items should equal those data\.$/, function (table) {
            var expArr = table.hashes().toConvertType();
            var actArr = pagination.items;
            for (var i = 0; i < actArr.length; i += 1) {
                var exp = expArr[i];
                var act = actArr[i];
                assert.equal(act.type, exp.type);
                assert.equal(act.index, exp.index);
                assert.equal(act.isCurrent, exp.isCurrent);
                assert.equal(act.isEnabled, exp.isEnabled);
                assert.equal(act.text, exp.text);
            }
        });
        this.Then(/^ud_G ==> the pagination should equal those data\.$/, function (table) {
            var exp = table.hashes().toConvertType()[0];
            var act = pagination;
            assert.equal(act.total, exp.total);
            assert.equal(act.current, exp.current);
        });
    };
});
//# sourceMappingURL=simplePagination.js.map
