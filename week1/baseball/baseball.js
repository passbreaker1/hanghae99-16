// 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
// 숫자의 값과 위치가 모두 일치하면 S
// 숫자의 값은 일치하지만 위치가 틀렸으면 B
// 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

//----------------------------------------------------------

// 랜덤한 숫자 3개(생성버튼 누르면)
let generateNumbers;
function randomNumbers(){
    let numbers = [];
    numbers[0]= Math.floor(Math.random()*10)
    do{
        numbers[1]= Math.floor(Math.random()*10)
    }while(numbers[0]===numbers[1])
    do{
        numbers[2] = Math.floor(Math.random()*10)
    }while(numbers[1]===numbers[2] || numbers[0]===numbers[2])     
    console.log(numbers)

    generateNumbers=numbers
}


// strike, ball체크(제출버튼 누르면)
let round = 0;
function compareNumbers(){

    round++
    console.log(round)
    if(!generateNumbers){
        alert('먼저 숫자를 생성하세요!')
        return
    }
    // console.log(generateNumbers)
    let userInput = document.querySelector('#input').value;
    let userDigits = [...userInput].map((a)=> parseInt(a))
    // console.log(userDigits)

    let strike = 0, ball = 0;
    
    for(let i=0; i<3; i++){
        // console.log(userDigits.includes(generateNumbers[i]))
        
        if(userDigits[i] === generateNumbers[i]){
            strike++
        }else if(userDigits.includes(generateNumbers[i])){
            ball++
        }
    }

    if(strike == 3){
        alert(`축하합니다!!! ${round}번만에 맞히셨습니다!!`)
    }
    console.log(`스트라이크 : ${strike}, 볼 : ${ball}`)
}


//----------------------------------------------------------------------
// 프로미스 사용...

// var 프로미스 = new Promise(function(resolve, reject){
//     const numbers = [];
//     numbers[0]= Math.floor(Math.random()*10)
//     do{
//         numbers[1]= Math.floor(Math.random()*10)
//     }while(numbers[0]===numbers[1])
//     do{
//         numbers[2] = Math.floor(Math.random()*10)
//     }while(numbers[1]===numbers[2] || numbers[0]===numbers[2])     
//     console.log(numbers)

//     resolve(numbers);    
// })
// 프로미스.then(function(numbers){
//     let randomNumbers = numbers
//     let userInput = document.querySelector('#input').value;
//     console.log(userInput)
//     let userDigits = [...userInput]
//     console.log(userDigits)

//     let strike = 0, ball = 0;
//     for(let i=0; i<3; i++){
//         console.log(randomNumbers[i])
//         if(userDigits[i] == randomNumbers[i]){
//             strike++
//             console.log('스트라이크')
//         }else if(userInput.includes(randomNumbers)){
//             ball++
//             console.log('볼~')
//         }
//     }
// }).catch(function(){

// })



