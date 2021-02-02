//chaining methods- Private fields and private methods in es6 classes
'use strict';

const result = document.querySelector('.result');
let resultHtml =``;

class Account{
    locale = navigator.language;
    #movements=[];
    #pin;
constructor(fullName,pin){
this.fullName=fullName;
this.#pin=pin;
}

get movements(){
return this.#movements;
}

deposit(val){
this.#movements.push(val);
resultHtml=`<p>${val} deposited. </p>`;
result.insertAdjacentHTML('beforeend',resultHtml);
return this;
}

withdraw(val){
this.#movements.push(-val);
resultHtml=`<p>${val} withdrawn. </p>`;
result.insertAdjacentHTML('beforeend',resultHtml);
return this;
}

#approveLoan(val){
return Math.random() > 0.5 ? true :false;
    return true;
}
requestLoan(val){
if(this.#approveLoan(val)){
this.deposit(val);
}else{
    alert('Sorry. Loan not approved');
}
}
}

const accountMarie = new Account('Marie',1234);
accountMarie.deposit(100).withdraw(50).requestLoan(2000);

