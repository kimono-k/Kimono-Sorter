"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // You don't have to use length in the method now
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex]; // 10
        this.data[leftIndex] = this.data[rightIndex]; // 3, left overwrite
        this.data[rightIndex] = leftHand; // 10 to right overwrite
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
var collection = new NumbersCollection([1, 2, 3]);
collection.length; // getter custom property in property style on the object
