/* alert = 彈出對話視窗 
    語法:alert("hello 外部的js");
*/
/* prompt = 彈出可輸入資料的視窗 
    語法:prompt("對話框的提示文字","對話框輸入欄位的預設值")
*/


/*
    練習一 : 在對話視窗輸入名字 ,然後在console.log會出現 Hi 名字~~
    
    語法:
    let name = prompt("input your name","your name");
    console.log(name);
    console.log("Hi" + name);
*/ 

/*
    練習二: 輸入兩個數字,然後相加,console.log呈現相加結果

    (語法1)paeseInt()函式:
    let num1 = prompt('input num1',0);
    let num2 = prompt('input num2',0);
    result = parseInt(num1) + parseInt(num2);
    console.log(result);

    (語法2)Number()函式:
    let num1 = prompt('input num1',0);
    let num2 = prompt('input num2',0);
    result = Number(num1) + Number(num2);
    console.log(result);
*/

/*
    練習三: 輸入兩個數字,判斷數字大小,誰大 或者 等於 您輸入錯誤
    提示:使用 if..else

    語法:
    let num1 = parseInt(prompt("input num1",0));
    let num2 = parseInt(prompt("input num2",0));

    console.log("num1 = " + num1);
    console.log("num2 = " + num2);

    if(num1>num2){
        console.log("num1>num2");
    }else if(num2>num1){
        console.log("num2>num1");
    }else if(num1==num2){
        console.log("num1=num2");
    }else{
        console.log("erroe");
    }
*/

/*
    練習四:
    1.輸入存錢數量 
        設變數為save
    2.買東西的錢多少 
        設變數為buy
    3.找零多少 
        設變數為money
    4.如果不夠,顯示'無法扣款'
    5.最後顯示餘額 
        設變數為result

    console.log版本:
    let save = parseInt(prompt('input save',0));
    console.log("本次存入 = " + save);
    let buy = parseInt(prompt('input buy',0));
        
    if(save>buy){
        result = save - buy ;
        save = result;
        console.log("購買商品金額=" + buy);
    }else{
        consoole.log("無法扣款");
    }
        

    視窗版本:
    let num1 = prompt("存錢數量", 0);
    let num2 = prompt("買東西的錢", 0);
        
    if (Number(num1) > Number(num2)) {
        result = Number(num1) - Number(num2);
        alert("剩"+result+"元");
    } else if(Number(num1) < Number(num2)){
        result = Number(num2) - Number(num1);
         alert("不夠"+result+"元");
    }else if(Number(num1) == Number(num2)){
        alert("剛剛好");
    }
*/   

/*
    練習五:
    1.輸入存款多少
    2.後續動作 = 領錢 跟 轉帳

    領錢時 = 輸入領錢金額 + 判斷是否足夠領取
    (可以領取時,顯示領多少,存款剩餘多少)
    (不可領取時,顯示存款剩餘多少)

    轉帳時 = 顯示轉帳帳號 + 輸入領錢金額 + 判斷是否足夠領取
    (可以轉帳時,顯示轉出多少,轉給誰,存款剩多少)
    (不可轉帳時,顯示餘額不足)

    方法:
    let save = parseInt(prompt('本次存入金額 ?',0));
    console.log('存款 =>' + save ); 
    let action = parseInt(prompt('後續動作 1.領錢 2.轉帳 ?',0));
    console.log('動作 =>' + action);
        
    switch(action){
        case 1:
            console.log("領錢中");
            let withdraw = parseInt(prompt('領多少錢 ?',0));
            console.log('領錢金額 =>' + withdraw);
            if(save>withdraw){
                console.log("領錢成功!");
                save = save - withdraw;
            }else{
                console.log("餘額不足,領錢失敗!");
            }
            console.log('最終存款 =>' + svae);
            break;
                
        case 2:
            console.log("轉帳中");
            let transferID = prompt('本次轉入帳號 ?',0);
            console.log('本次轉入帳號 =>' + transferID); 
            let transferMoney = parseInt(prompt('轉多少錢 ?',0));
            console.log('轉帳金額 =>' + transferMoney);
             if(save>transferMoney){
                onsole.log("轉帳成功!");
                save = save - transferMoney;
            }else{
                console.log("轉帳失敗!");
            }
            console.log("最終存款 =>" + save);
            break;
                    
            default:
            break;
            }

        
*/