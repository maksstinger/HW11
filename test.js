const assert = require('assert');
const sum = require('./src/main');

describe("Check right sum", function() {

    it("sums two args", function() {
        const actual = sum(3)(4);
        assert.equal(actual, 7);
    });
    it("sums three args", function() {
        const actual = sum(3)(4)(11);
        assert.equal(actual, 18);
    });
    it("sums six args", function() {
        const should = sum(3)(3)(-1)(10)(1)(0);
        assert.equal(should, 16);
    });
});