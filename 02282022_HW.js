// --- Homework --- 

//#1
//HW instructions - Write a function hello which given a name, says hello to the name. Use the following template:

// function hello(name) {
//     // put your code here
// }
// hello('Mustache');

//--------------------

// let myName = "Chewie"

// console.log(`Hello ${myName}`)

// - - - - - - - - - - - - - - - - - - - - - - - -

//#2
//HW instructions - Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.




// - - - - - - - - - - - - - - - - - - - - - - - -

//#3 MADLIB
//HW instructions - Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// function madlib(name, subject) {
//     return `${name}'s favorite subject in school is ${subject}.`;
// }
// console.log(madlib("Anushka", "art"));

// - - - - - - - - - - - - - - - - - - - - - - - -

//#4 TIP CALCULATOR
//HW instruction - Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip.

// function tipAmount(billAmount, service) { 
//     let result;
//     switch (service) {
//         case "good":
//             result = billAmount * 0.2
//             return result
//             break
//         case "fair":
//             result = billAmount * 0.15
//             return result
//             break
//         case "bad":
//             result = billAmount * 0.1
//             return result
//             break
//         default:
//             console.log("no no no no")
//     }
// }
// console.log(tipAmount(50, "bad"))


// - - - - - - - - - - - - - - - - - - - - - - - -

//#5 TIP CALCULATOR 2
//HW instruction - Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.


function tipAmount(billAmount, service) { 
    let result;
    switch (service) {
        case "good":
            result = billAmount * 0.2
            return result
            break
        case "fair":
            result = billAmount * 0.15
            return result
            break
        case "bad":
            result = billAmount * 0.1
            return result
            break
        default:
            console.log("no no no no")
    }
}
justTheTip = (tipAmount(50, "bad"))

    // console.log(justTheTip + billAmount)  //?AAAAAAHHHHHHH









