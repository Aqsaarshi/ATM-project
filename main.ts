import inquirer from "inquirer"
let myBalance = 10000; // PKR
let myPin = 2297;
         // PIN CODE 

let pinAnswer = await inquirer.prompt([
   { name : "pin",
   message : " enter your pin",
   type:"number"}
]) 
if (pinAnswer.pin === myPin)
    console.log("Correct pin code!!!");
else{console.log("Incorrect pin number");
};
          //OPERATION
   let operationAns = await  inquirer.prompt([
        { name: "operation",
        message :" please select option ",
        type:"list",
        choices :["withdraw", "check balance","fast cash"]
    }
    ]);
    console.log (operationAns);
 
          // With Draw 
    if ( operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt ([
            {name : "amount",
            message : "enter your amount ",
            type : "number", }
        ]);
    myBalance -= amountAns.amount;
        console.log(`Your remaining balance is = ${ myBalance}`)}
        else if (operationAns.operation === "check balance")
        {console.log(`Your balance is = ${myBalance}`)};

                  // fast cash 

    if ( operationAns.operation === "fast cash")
       {let fastcashAns = await inquirer.prompt ([
            {name :"fastcash",
            message :" please select an option ",
            type :"list",
            choices: ["1000","3000", "5000","7000","10000",]
        }]) ; 
        if (fastcashAns.fastcash )
        {console.log( `This amount is taken by Fast cash method = ${fastcashAns.fastcash}`);}
    }
