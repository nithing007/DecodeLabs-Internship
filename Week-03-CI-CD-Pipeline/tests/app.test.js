
const { test } = require("node:test");
const assert = require("node:assert/strict");

const { getStatus, add } = require("../src/app");

test("status message should be correct", () => {
    assert.equal(
        getStatus(),
        "DecodeLabs CI/CD Pipeline is running!"
    );
});

test("addition should return the correct sum", () => {
    assert.equal(add(2, 3), 5);
});

test("addition should support negative numbers", () => {
    assert.equal(add(-2, 5), 3);
});
