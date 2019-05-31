const assert = require('assert');
const sum = require('./src/main');

describe("Check right sum", function() {

    it("sums two args", function() {
        const result = sum(3)(4);
        assert.equal(result, 7);
    });
    it("sums three args", function() {
        const result = sum(3)(4)(11);
        assert.equal(result, 18);
    });
    it("sums six args", function() {
        const result = sum(3)(3)(-1)(10)(1)(0);
        assert.equal(result, 16);
    });
});