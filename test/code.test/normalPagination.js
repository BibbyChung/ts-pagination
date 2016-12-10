/// <reference path="./../../typings/index.d.ts" />
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const assert = require("assert");
require("./../extensions");
const normalPagination_1 = require('../code/normalPagination');
let prepareToRun = (_self, tag) => {
    _self.Before({ tags: [tag] }, (scenario) => __awaiter(this, void 0, void 0, function* () {
    }));
    _self.After({ tags: [tag] }, (scenario) => __awaiter(this, void 0, void 0, function* () {
    }));
};
module.exports = function () {
    prepareToRun(this, "@ud_G");
    var pageInfo;
    var pagination;
    this.Given(/^ud_G ==> prepare the data\.$/, function (table) {
        pageInfo = table.hashes().toConvertType()[0];
    });
    this.When(/^ud_G ==> intial the normal pagination\.$/, function () {
        pagination = new normalPagination_1.NormalPagination(pageInfo.itemSize, pageInfo.current, pageInfo.dataCount, pageInfo.pageSize);
        pagination.build();
    });
    this.Then(/^ud_G ==> the result should equal those data\.$/, function (table) {
        let exp = table.hashes().toConvertType()[0];
        let act = pagination.items[0];
        assert.equal(act.description, exp.description);
        assert.equal(act.index, exp.index);
        assert.equal(act.isCurrent, exp.isCurrent);
        assert.equal(act.isShow, exp.isShow);
        assert.equal(act.text, exp.text);
    });
};
//# sourceMappingURL=normalPagination.js.map
