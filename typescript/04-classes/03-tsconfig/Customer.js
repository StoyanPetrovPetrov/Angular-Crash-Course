"use strict";
class Customer {
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
let myCustomer = new Customer("Stoyan", "Petrov");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
