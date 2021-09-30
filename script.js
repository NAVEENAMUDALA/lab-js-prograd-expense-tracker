let balence =0
let income=0
let expense =0

function storing(){
    let key =document.querySelector('#text').value;
    let money  =parseFloat(document.querySelector('#amount').value);
    localStorage.setItem(key,money);
   
    if(0>money){
        expense = expense-money;
        document.getElementById('money-minus').innerHTML= "$-" + expense
        document.getElementById('list').innerHTML+=`<li class="minus">${key} ${money}</li>`
    }
    else if(0<money){
        income =income+money;
        document.getElementById('money-plus').innerHTML= "$+" + income
        document.getElementById('list').innerHTML+=`<li class="plus">${key}  ${money}</li>`
    }
    
    balence=income-expense;
    document.getElementById('balance').innerHTML= "$" + balence
    console.log(balence);
    document.querySelector('#text').value=" "
    document.querySelector('#amount').value=" "
}