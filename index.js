document.querySelector(".bill-input").addEventListener("keyup",function(){
  const billAmount = parseFloat(this.value);
  console.log(billAmount);

const percentArr = document.querySelectorAll(".percent");
let percent = 0;
for(var i = 0; i < percentArr.length;i++){


  if(percentArr[i].checked){

    percent = percentArr[i].value;
    break;
  }
}
let newParcent = parseFloat(percent);

if(newParcent == 0){
newParcent = parseFloat(document.querySelector(".custom").value);

}

console.log(newParcent);

let people = parseFloat(document.querySelector(".people-input").value);
console.log(people);

if(people === 0){

  document.querySelector(".people-paragraph").style.display = "inline";

}else if(!people){

  document.querySelector(".people-paragraph").style.display = "inline";
}
else{


  let  tipAmountnodiv = (newParcent / 100) * billAmount;

  let totalAmountnodiv = tipAmountnodiv + billAmount;
  let tipAmountdiv = (tipAmountnodiv / people);
  let totalAmountdiv = (totalAmountnodiv / people)
  var twoPlacedFloat =tipAmountdiv.toFixed(2);
  var twoPlacedFloat1 = totalAmountdiv.toFixed(2);
  console.log(twoPlacedFloat);
  document.getElementById("tip-amount").innerHTML = twoPlacedFloat;
  document.getElementById("total-amount").innerHTML = twoPlacedFloat1;



}




});
function calculate(x){
let parcent1 = parseFloat(x);
let billamount1  = parseFloat(document.querySelector(".bill-input").value);
let people1 =  parseFloat(document.querySelector(".people-input").value);
if(people1 === 0){

  document.querySelector(".people-paragraph").style.display = "inline";

}else if(!people1){

  document.querySelector(".people-paragraph").style.display = "inline";
}

  let  tipAmountnodiv = (parcent1 / 100) * billamount1;

  let totalAmountnodiv = tipAmountnodiv + billamount1;
  let tipAmountdiv = (tipAmountnodiv / people1);
  let totalAmountdiv = (totalAmountnodiv / people1)
  var twoPlacedFloat =tipAmountdiv.toFixed(2);
  var twoPlacedFloat1 = totalAmountdiv.toFixed(2);
  console.log(twoPlacedFloat);
  document.getElementById("tip-amount").innerHTML = twoPlacedFloat;
  document.getElementById("total-amount").innerHTML = twoPlacedFloat1;
}



document.querySelector(".custom").addEventListener("keyup",function(){



const percentArr1 = document.querySelectorAll(".percent");

for(var i = 0; i < percentArr1.length;i++){


  if(percentArr1[i].checked){
console.log("entering");

percentArr1.checked = false;
  }
}
let newParcent = parseFloat(document.querySelector(".custom").value);
let billAmount =parseFloat( document.querySelector(".bill-input").value);
let people = parseFloat(document.querySelector(".people-input").value);


if(people === 0){

  document.querySelector(".people-paragraph").style.display = "inline";

}else if(!people){

  document.querySelector(".people-paragraph").style.display = "inline";
}
else{


  let  tipAmountnodiv = (newParcent / 100) * billAmount;

  let totalAmountnodiv = tipAmountnodiv + billAmount;
  let tipAmountdiv = (tipAmountnodiv / people);
  let totalAmountdiv = (totalAmountnodiv / people)
  var twoPlacedFloat =tipAmountdiv.toFixed(2);
  var twoPlacedFloat1 = totalAmountdiv.toFixed(2);
  console.log(twoPlacedFloat);
  document.getElementById("tip-amount").innerHTML = twoPlacedFloat;
  document.getElementById("total-amount").innerHTML = twoPlacedFloat1;



}

});


document.querySelector(".people-input").addEventListener("keyup",function(){


let people1 = parseFloat(this.value);
let billAmount = parseFloat(document.querySelector(".bill-input").value);
console.log(billAmount);

const percentArr = document.querySelectorAll(".percent");
let percent = 0;
for(var i = 0; i < percentArr.length;i++){


  if(percentArr[i].checked){

    percent = percentArr[i].value;
    break;
  }
}
let newParcent = parseFloat(percent);

if(newParcent === 0){
newParcent = parseFloat(document.querySelector(".custom").value);

}

let people = people1;
if(people!=0){
  document.querySelector(".people-paragraph").style.display = "none"

}
if(people === 0){

  document.querySelector(".people-paragraph").style.display = "inline";

}else if(!people){

  document.querySelector(".people-paragraph").style.display = "inline";
}
else{


  let  tipAmountnodiv = (newParcent / 100) * billAmount;

  let totalAmountnodiv = tipAmountnodiv + billAmount;
  let tipAmountdiv = (tipAmountnodiv / people);
  let totalAmountdiv = (totalAmountnodiv / people)
  var twoPlacedFloat =tipAmountdiv.toFixed(2);
  var twoPlacedFloat1 = totalAmountdiv.toFixed(2);
  console.log(twoPlacedFloat);
  document.getElementById("tip-amount").innerHTML = twoPlacedFloat;
  document.getElementById("total-amount").innerHTML = twoPlacedFloat1;



}



});
