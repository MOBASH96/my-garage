'use strict'
//////////////////////////Globule Variable///////////////////////
var myForm=document.getElementById('test-form');
var arrayOfCars=[];
var myTable=document.getElementById('test-table')

////////////////////////// The constructor///////////////////////
function MyGarage(carName,catModel,catYear,image){
    this.name=carName;
    this.Model=catModel;
    this.Year=catYear;
    this.path='img/'+image;
    arrayOfCars.push(this);
}
MyGarage.prototype.tableRender=function(){
        var tableRow=document.createElement('tr');

        var tableDt=document.createElement('td')
        tableDt.

        

        myTable.appendChild(tableRow);
    
}





//////////////////////////Calling Functions & event listener ///////////////////////

myForm.addEventListener('submit',handelSubmit);


function handelSubmit(event){
event.preventDefault();
alert('its working');

var carItsName=event.target.carName.value;
var carModel=event.target.catModel.value;
var carYear=event.target.catYear.value;

// console.log(carName)
localStorage.setItem('myGarage',JSON.stringify(arrayOfCars));
var newCar=new MyGarage(carItsName,carModel,carYear);
newCar.tableRender();

}
