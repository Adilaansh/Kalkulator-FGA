const calcScreen = document.querySelector(".calc-screen");
const updateScreen = (number) => {
    calcScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click", (e) =>{
        updateScreen(e.target.value);
    });
});


let prevNum = "";
let calcOpr = "";
let currNum = "";
const inputNumber = (number) =>{
    if(currNum === "0"){
        currNum = number
    } else{
        currNum += number
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click", (e) =>{
        inputNumber(e.target.value)
        updateScreen(currNum);
    });
});

const oper = document.querySelectorAll(".operator");

oper.forEach((opr) =>{
    opr.addEventListener("click", (e) =>{
        inptOpr(e.target.value);
    });
});

const inptOpr = (oper) =>{
    prevNum = currNum
    calcOpr = oper
    currNum = ""

    if(calcOpr === ""){
        prevNum = currNum
    }
    calcOpr = oper
    currNum = "0"
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", ()=>{
    calculate()
    updateScreen(currNum)
})

const calculate = () =>{
    let result = ""
    switch(calcOpr){
        case "+":
            result = parseFloat(prevNum) + parseFloat(currNum)
            break
        case "-":
            result = parseFloat(prevNum) - parseFloat(currNum)
            break
        case "*":
            result = parseFloat(prevNum) * parseFloat(currNum)
            break
        case "/":
            result = parseFloat(prevNum) / parseFloat(currNum)
            break
        case "%":
            result = parseFloat(prevNum) / parseFloat(currNum)
            break
        default:
            break    
    }
    currNum = result
    calcOpr = ""
}


const clearAll = () =>{
    prevNum = ""
    calcOpr = ""
    currNum = "0"
}
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () =>{
    clearAll()
    updateScreen(currNum)
})

inputDecimal = (dot) =>{
    if(currNum.includes('.')){
        return
    }
    currNum += dot
}
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (e)=>{
    inputDecimal(e.target.value)
    updateScreen(currNum)
})
