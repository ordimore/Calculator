const numbers = document.querySelectorAll(".number")
/* console.log (numbers) */
/* numbers.forEach(num => {
    console.log(num);
}); */

/* numbers.forEach(num => {
    num.addEventListener("click",(x)=>{
        console.log(x.target.value);
    })
}); */

const calcScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
    calcScreen.value = number;
};
/* numbers.forEach(num => {
    num.addEventListener("click",(x)=>{
        updateScreen(x.target.value);
    })
}); */

let prevNum = '';
let currentNum = '0';
let calcOperator = '';

/* const inputNumber = (number) =>{
    currentNum = currentNum + number;
} */
const inputNumber = (number) =>{
    if (currentNum === '0'){
        currentNum = number;
    } else {
        currentNum = currentNum + number;
    }
}

numbers.forEach(num => {
    num.addEventListener("click",(x)=>{
        inputNumber(x.target.value);
        updateScreen(currentNum);
        console.log("-------- Klik Btn Num --------");
        console.log(`isi current num : ${currentNum}`);
    })
});

/* const operators = document.querySelectorAll(".operator");
operators.forEach((ops) => {
    ops.addEventListener("click",(event)=>{
        console.log(event.target.value);
    })
}); */


//input ops default pertama
/* const inputOperator = (ops) =>{
    prevNum = currentNum;
    calcOperator = ops;
    currentNum = '';
} */

//input ops edit
const inputOperator = (ops) =>{
    if(calcOperator === ''){
        prevNum = currentNum;
    }
    calcOperator = ops;
    currentNum = '0';
}

const operators = document.querySelectorAll(".operator");
operators.forEach((ops) => {
    ops.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
        //updateScreen(calcOperator);
        console.log("------- Klik Operator -------");
        console.log(`isi prev num : ${prevNum}`);
        console.log(`isi current num : ${currentNum}`);
        console.log(`isi ops : ${calcOperator}`);
    })
});

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener("click", ()=> {
    calculate();
    updateScreen(currentNum);
    console.log("------ Klik Hasil --------");
    console.log(`isi prev num : ${prevNum}`);
    console.log(`isi current num : ${currentNum}`);
    console.log(`isi ops : ${calcOperator}`);
});


const calculate = ()=>{
    let result = '';
    switch(calcOperator){
        case "+":
            result = parseFloat(prevNum) + parseFloat(currentNum);
            break;
        case "-":
            result = parseFloat(prevNum) - parseFloat(currentNum);
            break;
        case "*":
            result = parseFloat(prevNum) * parseFloat(currentNum);
            break;
        case "/":
            result = parseFloat(prevNum) / parseFloat(currentNum);
            break;
        case "%":
            result = parseFloat(prevNum)/100;
            break;
        default:
        return;
    }
    currentNum = result;
    calcOperator = '';
}

const clearAll = () =>{
    prevNum ='';
    calcOperator= '';
    currentNum='0';
};

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener("click", ()=>{
    clearAll();
    updateScreen(currentNum);
    console.log('------- Klik Hapus --------');
    console.log(`isi prev num : ${prevNum}`);
    console.log(`isi current num : ${currentNum}`);
    console.log(`isi ops : ${calcOperator}`);
});

const inputDecimal = (dot) =>{
    currentNum += dot;
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNum);
});


