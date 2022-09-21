let billAmount = document.querySelector('#bill-amount');
let cashGiven = document.querySelector('#cash-given');
let submitBtn = document.querySelector('.submit');
let errorMsg = document.querySelector('.error');
let noOfnotes = document.querySelector('.notes-to-return');
let cashTable = document.querySelector('.cash-output');

let notesAvailable = [2000,500,100,20,10,5,1];
cashTable.style.display = 'none';


function validateAmount()
{
    errorMsg.style.display ='none';
    let billAmt = Number(billAmount.value);
    let cash = Number(cashGiven.value);
    
    if(billAmt > 0)
    {
        if(billAmt < cash)
        {
            let returnMoney  = cash - billAmt;
            calculateChangeAmount(returnMoney);
            cashTable.style.display = 'block';
        }
        else if( cash ===billAmt)
        {
            showOutput("You have Entered Both Values Same. Please Try Again");
            message.style.color = 'black';
            cashTable.style.display ='none';
        }
        else{
            showOutput("Please Enter Cash Given Values more than BIll Amount");
            message.style.color = 'red';
            cashTable.style.display ='none';
        }
    }
    else
    {
        showOutput("Please Enter Valid Input");
        message.style.color = 'black';
        cashtable.style.display = 'none';
    }

}


function  calculateChangeAmount(returnMoney)
{
    for(let i=0; i<notesAvailable.length; i++) 
    {
        let numOfnotes = Math.trunc(returnMoney/availableNotes[i]);
        returnMoney = returnMoney % availableNotes[i];
        noOfnotes[i].innerText = numOfnotes;
    }
}

function showOutput (msg){
    message.style.display ='block';
    message.innerText = msg;
}


submitBtn.addEventListener = ('click',validateAmount);