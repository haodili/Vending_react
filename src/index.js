import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//initial setting for money and products
var money = {
        nickel: {
            name: '5cent',
            amount: 100
        },
        dime: {
            name: '10cent',
            amount: 50
        },
        quarter: {
            name: '25cent',
            amount: 100
        },
        dollar: {
            name: '100cent',
            amount: 50
        }
    }

    var products = {
        pepsi: {
            id: 1,
            name: 'Pepsi',
            cost: 150,
            amount: 50
        },
        mtnDew: {
            id: 2,
            name: 'MtnDew',
            cost: 150,
            amount: 40
        },
        cheetos: {
            id: 3,
            name: 'Cheetos',
            cost: 100,
            amount: 30
        },
        laysChips: {
            id: 4,
            name: 'LaysChips',
            cost: 100,
            amount: 20
        }
    }

//exchange system
function moneyCount(count,flag){
if (count === 10 && flag === 1) {
                money.dime.amount++;
            }
            if (count === 25 && flag === 1) {
                money.quarter.amount++;
            }
            if (count === 100 && flag === 1) {
                money.dollar.amount++;
            }
            if (flag === -1) {
                if (count === 50) {
                    money.quarter.amount--;
                    money.quarter.amount--;
                }
                if (count === 45) {
                    money.dime.amount--;
                    money.dime.amount--;
                    money.quarter.amount--;
                }
                if (count === 35) {
                    money.quarter.amount--;
                    money.dime.amount--;
                }
                if (count === 30) {
                    money.dime.amount--;
                    money.dime.amount--;
                    money.dime.amount--;
                }
                if (count === 25) {
                    money.quarter.amount--;
                }
                if (count === 20) {
                    money.dime.amount--;
                    money.dime.amount--;
                }
                if (count === 15) {
                    money.dime.amount--;
                    money.nickel.amount--;
                }
                if (count === 10) {
                    money.dime.amount--;
                }
                if (count === 5) {
                    money.nickel.amount--;
                }
            }
}

//initial flag is true 
var serviceFlag = true;


//wrapped by React
class Vending extends Component {
	payment (choice) {
  var totalInserted = 0;
  var productIndex = choice-1;
  var price = products[Object.keys(products)[productIndex]].cost;
  var name = products[Object.keys(products)[productIndex]].name;
  products[Object.keys(products)[productIndex]].amount--;

  function avail() {
  if (products.pepsi.amount <= 1 ||　products.mtnDew.amount <= 1 || products.cheetos.amount <= 1 || products.laysChips.amount <= 1 || money.nickel.amount <= 1 || money.dime.amount <= 1 || money.quarter.amount <= 1 || money.dollar.amount <= 1) 
     serviceFlag = false;
     alert("Under Maintenance, sorry for the inconvenience")
}
     
     while (totalInserted < price && serviceFlag) {

                var added = prompt("for payment, please insert coins,only Dime(10),Quarter(25) and one dollar(100) are accepted");
                var intAdded = parseInt(added);
                if (intAdded === 10 || intAdded === 25 || intAdded === 100) {
                    totalInserted += intAdded;
                    alert("Inserted money: "+totalInserted);
                    moneyCount(intAdded, 1);
                } else {
                    added = 0;
                    intAdded = 0;
                    alert("please make sure insert Dime, Quarter or One Dollar Cash")
                }
            }

            var change = totalInserted - price;
            moneyCount(change, -1)
            alert("Enjoy your " + name + " and your change is " + change)
};




  render () {
   return (
     <div>
     <h1>Welcome to our vending machine</h1>
     <button id="pepsi" onClick={this.payment.bind(this,1)}>pepsi</button>
     <span> </span>
     <button id="mtnDew" onClick={this.payment.bind(this,2)}>mtnDew</button>
     <span> </span>
     <button id="cheetos" onClick={this.payment.bind(this,3)}>cheetos</button>
     <span> </span>
     <button id="lays" onClick={this.payment.bind(this,4)}>laysChips</button>
     <span> </span>
     </div>
  		)
  }
};


ReactDOM.render(
  <Vending />,
  document.getElementById('root')
);

 
