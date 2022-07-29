const calculator = document.querySelector('.calculator')
const buttons = calculator.querySelector('.buttons')
const display = calculator.querySelector('#input')

const clearSelected = () => {
    calculator.dataset.operator = ''
    let operatorKeys = buttons.querySelector('.operators').querySelectorAll('div')
    operatorKeys.forEach(el => { el.dataset.state = '' })
    console.log('Cleared!');

}

const ops = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
}

lastKeyType = 'numbers'
buttons.addEventListener('click', event => {

    let key = event.target
    key.dataset.keyType = key.parentNode.className

    let keyValue = key.innerText
    let keyType = key.dataset.keyType

    if(keyValue.length == 1){

        if(keyType === 'numbers'){

            if(keyValue === 'C'){
                display.textContent = ''
                clearSelected
            }else

            if(lastKeyType === 'operators'){
                display.textContent = keyValue
            }else

            if(lastKeyType === 'numbers'){
                display.textContent += keyValue
            }else

            if(lastKeyType === 'buttons'){
                display.textContent = keyValue
            }
        }else

        if(keyType === 'operators'){
            // clearSelected()
            key.dataset.state = 'selected'
            calculator.dataset.firstValue = display.textContent
            calculator.dataset.operator = key.textContent
        }else

        if(keyType === 'buttons'){ //! this is for the equals sign
            let operator = calculator.dataset.operator
            let firstValue = parseFloat(calculator.dataset.firstValue)
            let secondValue = parseFloat(display.textContent)

            let answer = ops[operator](firstValue, secondValue)
            display.textContent = answer
            clearSelected()

            console.log(firstValue + ' ' + operator + ' ' + secondValue);

        }

        lastKeyType = keyType
    }
})

// let fun1 = ()=>{
//     for(let i = 0; i<operatorsClass.innerText.length; i++)
//     console.log(operatorsClass.innerText[i]);
//         return operatorsClass.innerText[i]
// }
// let fundisplay = ()=>{
//     for(let a = 0; a < display.innerText.length; a++){
//         console.log(hold);
//         console.log(display.innerText[a]);
//         if(display.innerText[a]==fun1()){
//             let op = display.innerText[a]
//             let num1 = display.innerText.slice(0,a)
//             let num2 = display.innerText.slice(a-1)
//             console.log(ops[op](num1, num2))
//             return ops[op](num1, num2)
//         }
//     }
//     // return displayID.innerHTML
// }