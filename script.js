let billAmount = document.querySelector('#bill-amount');
let cashGiven = document.querySelector('#cash-given');
let submitBtn = document.querySelector('.submit');
let errorMsg = document.querySelector('.error');
let noOfnotes = document.querySelector('.notes-to-return');
let cashTable = document.querySelector('.cash-output');

let notesAvailable = [200,500,100,20,10,5,1];




function  calcChangeAmount(returnMOney)
{
    for(let i=0; i<notesAvailable.length; i++) 
    {
        let noOfnotes = Math.trunc(returnMOney/availableNotes[i]);
        returnMOney = returnMOney%availableNotes[i];
        noOfnotes[i].innerText = noOfnotes;
    }
}