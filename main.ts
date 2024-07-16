#! /usr/bin/env node

import inquirer from "inquirer"
let currency : any ={
     USD: 1, //base currency
     ERU: 0.92,
     TK: 117,
     INR: 83.51,
     PKR: 278.25
}

let userAnswer = await inquirer.prompt([
    
    {
        name:"from",
        message:"enter from currency",
        type:"list",
        choices:[
            {name:"USD",value:"USD"},
            {name:"ERU",value:"ERU"},
            {name:"TK",value:"TK"},
            {name:"INR",value:"INR"},
            {name:"PKR",value:"PKR"},
        ]
     },
     {
        name: "to",
        message:"enter to currency",
        type:"list",
        choices:[
        {name:"USD",value:"USD"},
        {name:"ERU",value:"ERU"},
        {name:"TK",value:"TK"},
        {name:"INR",value:"INR"},
        {name:"PKR",value:"PKR"},
    ]
 },
 {
    name:"amount",
    message:"enter your amount",
    type:"number",
 }
     
])

let fromAmount =  currency[userAnswer.from]  //dinamic
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount //USD
let convertedAmount = baseAmount * toAmount  
console.log(convertedAmount)