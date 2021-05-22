export class NumbersCollection {
    constructor(public data: number[]) {}

        // You don't have to use length in the method now
        get length(): number {
            return this.data.length;
        }


    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex]; // 10
        this.data[leftIndex] = this.data[rightIndex]; // 3, left overwrite
        this.data[rightIndex] = leftHand; // 10 to right overwrite
    }
}

const collection = new NumbersCollection([1, 2, 3]);
collection.length; // getter custom property in property style on the object
