import React, { useState } from 'react';

import Soon from "../../components/dev/Soon"
import Container from "../../components/Container"


const CashRegister = () => {
    const [cashPaid, setCashPaid] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    const price = 19.5;
    const initialCid = [
        ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
        ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
    ];

    const calcMoney = (arr) => arr.reduce((acc, [, value]) => acc + value, 0);

    const tryToReturn = (change) => {
    const tempArr = structuredClone(initialCid);
    const finalResult = getChange(tempArr, change);
    return calcMoney(finalResult) === change;
    };

    const getChange = (tempArr, change) => {
    const currency = [
        ["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25],
        ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]
    ];

    let finalChange = currency.map(([name]) => [name, 0]);
    let num = change;

    for (let i = tempArr.length - 1; i >= 0; i--) {
        if (num >= currency[i][1] && tempArr[i][1] > 0) {
            finalChange[i][1] += currency[i][1];
            tempArr[i][1] -= currency[i][1];
            num = Math.round((num - currency[i][1]) * 100) / 100;
            i++;
        }
    }

    return finalChange.filter(([, value]) => value > 0);
    };

    const btnClicked = () => {
        const cashPaidNumber = parseFloat(cashPaid);
        const change = cashPaidNumber - price;

        if (cashPaidNumber < price) {
            alert("Customer does not have enough money to purchase the item");
            return;
        }

        if (calcMoney(initialCid) < change) {
            setResultMessage(`<p>Status: INSUFFICIENT_FUNDS</p>`);
        } else if (calcMoney(initialCid) === change) {
            const finalChange = getChange(initialCid, change).reverse();
            const formattedChange = finalChange
            .map(([name, value]) => `${name}: $${value}`)
            .join(' ');
            setResultMessage(`<p>Status: CLOSED + ${formattedChange}</p>`);
        } else {
            if (cashPaidNumber === price) {
            setResultMessage(`<p>No change due - customer paid with exact cash</p>`);
            } else if (cashPaidNumber > price) {
                if (!tryToReturn(change)) {
                    const finalChange = getChange(initialCid, change).reverse();
                    setResultMessage(`<p>Status: INSUFFICIENT_FUNDS</p>`);
                } else {
                    const finalChange = getChange(initialCid, change).reverse();
                    const formattedChange = finalChange
                    .map(([name, value]) => `${name}: $${value}`)
                    .join(' ');
                    setResultMessage(`<p>Status: OPEN ${formattedChange}</p>`);
                }
            }
        }
    };

    return (
        <Container title="Cash Validator" subtitle="">
            <p>You have the following amount of money in the Cash Register:</p>
            <p>~data~</p>
            <p>price: {price}</p>
            <p>Money in the cash-drawer: {calcMoney(initialCid)}</p> <br />
            <p>
            This app will return change to the customer based on the price of the item, 
            the amount of cash provided by the customer, and the amount of cash in the cash drawer.
            </p><br/>

            <input
                id="cash"
                type="number"
                step="0.01"
                placeholder='Pay $$$'
                value={cashPaid}
                onChange={(e) => setCashPaid(e.target.value)}
            />
            <button id="purchase-btn" onClick={btnClicked}>
                Purchase
            </button>
            <div>
                <p id="change-due" dangerouslySetInnerHTML={{ __html: resultMessage }}></p>
            </div>
        </Container>
    )
}

export default CashRegister