class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index) {
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i]=this.data[i+1];
        }
        this.pop();
    }
}

const newArr = new MyArray();
newArr.push(1);
newArr.push(2);
newArr.push(3);
newArr.push(4);
console.log(newArr);

// newArr.pop();
// console.log(newArr);

// newArr.delete(2);
// console.log(newArr);