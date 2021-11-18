let bill = document.getElementById("bill-input");
let percent = document.querySelectorAll(".button");
let people = document.getElementById("number-of-people");
let custom = document.getElementById("custom");

console.log(percent)

let tipSplit = (billAmount, percentage, amtPeople) => {

    billAmount = parseInt(bill.value);
    amtPeople = parseFloat(people.value);


    if(billAmount && percentage && amtPeople || custom.value) {
        console.log(percentage)


        if (custom.value) {
            percentage = parseFloat(custom.value / 100);
            console.log("HI")
            
        }

        let tipPerPerson = (billAmount * percentage) / amtPeople;

        let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
    
        document.getElementById("tip-per-person").innerText = "$" + tipPerPerson.toFixed(2);
    
        document.getElementById("total-per-person").innerText = "$" + totalPerPerson;
    }




    // console.log(percentage)




    


    
}
    
    bill.addEventListener("change", tipSplit);
    custom.addEventListener("change", tipSplit);
    people.addEventListener("change", tipSplit);
    percent.forEach((btn) => {
        btn.addEventListener("click", () => {
             let btns = parseFloat(btn.innerText) / 100;
             tipSplit(bill, btns, people);
        })
    })
    