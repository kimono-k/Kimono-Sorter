import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
    // Collection type gets used
    constructor(public collection: NumbersCollection) {}

    sort(): void {
        const { length } = this.collection; // { length } shorthand .length

        /**
         * Bubble sorting algorithm for arrays
         */
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}