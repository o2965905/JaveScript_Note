/*
    let 宣告變數 = 可以變化
    const 宣告變數 = 不可以變化

    步驟1.抓元件 (抓要修改的元件)
    這邊拿  <p id="result">hello</p> 作範例
    語法:const resultP = document.getElementById("result");

    步驟2.修改元件內容  
    語法:resultP.innerText = "hello first change test";

*/

/* 
    練習1:抓form表單,num1,num2,option,result
    練習2:num1,num2 塞入value數字
    練習3:當Form表單內的submit送出時,抓到num1,num2的value,並相加
    練習4:num1,num2相加後,在網頁呈現出結果
    練習5:做出計算機功能( + - * / )
*/

//練習1
const myForm = document.getElementById("myForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const optionInput = document.getElementById("option");
const resultP = document.getElementById("result");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(optionInput);
console.log(resultP);

/*
    練習2
    num1Input.value = "55688";
    num2Input.value = "55677";
*/

/*
    練習3 + 練習4
    myForm.addEventListener('submit',function(e){
        e.preventDefault();//submit不送出表單
        console.log(e);
        console.log(num1Input.value);
        console.log(num2Input.value);
        let num1 = parseInt(num1Input.value);
        let num2 = parseInt(num2Input.value);
        let sum = num1 + num2;

        // 案 F12 點 console 會呈現相加結果
        console.log(`${num1} + ${num2} = ${sum}`);

        //練習4的部分
        console.log(myString);
        myString = `${num1} + ${num2} = ${sum}`;
        resultP.innerText = myString;
        }) 
*/

/*
    補充:
    練習4使用方法 = 字串相加

    語法(1):
    myString = `${num1} + ${num2} = ${sum}`;
    語法(2):
    myString = num1 + "+" + num2 + "=" + sum;

*/

//練習5 (用判斷式)
myForm.addEventListener('submit',function(e){
    e.preventDefault();//submit不送出表單
    console.log(e);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    let option = optionInput.value;

let resultNum = 0;
switch(option){
    case"+":
    resultNum = num1 + num2;
    break;
    case"-":
    resultNum = num1 - num2;
    break;
    case"*":
    resultNum = num1 * num2;
    break;
    case"/":
    resultNum = num1 / num2;
    break;

    default:
    break;
}
console.log(resultNum);
myString = `${num1} ${option} ${num2} = ${resultNum}`;
resultP.innerText = myString;
})   
