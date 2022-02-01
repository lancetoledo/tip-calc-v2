let bill = document.getElementById("bill-input");
let percent = document.querySelectorAll(".button");
let people = document.getElementById("number-of-people");
let custom = document.getElementById("custom");

console.log(percent)

let tipSplit = (billAmount, percentage, amtPeople) => {

    billAmount = parseInt(bill.value);
    amtPeople = parseFloat(people.value);

    if (custom.value) {
        percentage = parseFloat(custom.value / 100);
        console.log(percentage)
        console.log("HI")

        if(billAmount && amtPeople) {
            let tipPerPerson = (billAmount * percentage) / amtPeople;

            let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
        
            document.getElementById("tip-per-person").innerText = "$" + tipPerPerson.toFixed(2);
        
            document.getElementById("total-per-person").innerText = "$" + totalPerPerson;
        }
        
    }


    if(billAmount && percentage && amtPeople) {
        console.log(percentage)
console.log("YOO")



        let tipPerPerson = (billAmount * percentage) / amtPeople;

        let totalPerPerson = (billAmount / amtPeople) + tipPerPerson;
    
        document.getElementById("tip-per-person").innerText = "$" + tipPerPerson.toFixed(2);
    
        document.getElementById("total-per-person").innerText = "$" + totalPerPerson.toFixed(2);
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
    

    function reset() {
        document.getElementById("tip-per-person").innerText = "$0.00" 
        
        document.getElementById("total-per-person").innerText = "$0.00" 
        bill.value = ""
        people.value = ""
        custom.value = ""

    }