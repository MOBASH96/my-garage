'use strict'
//////////////////////////Globule Variable///////////////////////
var myForm=document.getElementById('test-form');
var arrayOfCars=[];
var myTable=document.getElementById('test-table');
var carImg=['bmw.png','chevrolet.png','hyundai.png','kia.png','lexus.png','tesla.png','toyota.png']
var imgTable=document.getElementById('imgTable');

////////////////////////// The constructor///////////////////////
function MyGarage(carName,catModel,catYear,image){
    this.name=carName;
    this.Model=catModel;
    this.Year=catYear;
    this.path='img/'+ image;
    arrayOfCars.push(this);
}
MyGarage.prototype.tableRender=function(){
        var tableRow=document.createElement('tr');

        var tableDt=document.createElement('td')
        tableDt.textContent=this.path;
        tableRow.appendChild(tableDt)

        var tableDt=document.createElement('td')
        tableDt.textContent=`Car Name : ${this.name} `;
        tableDt.textContent=`Model Years : ${this.Year} `;
        tableRow.appendChild(tableDt)


        

        myTable.appendChild(tableRow);
    
}
function checkLs(){
    if(localStorage.getItem('myGarage')){
        arrayOfCars=localStorage.getItem(JSON.parse('myGarage'));
        tableRender();
    }
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
var newCar=new MyGarage(carItsName,carModel,carYear,carImg);
nameCop();
}

function checkSrc(){
    for(var i=0;i<arrayOfCars.length;i++){
        if(arrayOfCars[i].path===imgTable.getAttribute('src'))
        newCar.tableRender();

    }
}
function nameCop(){
    for(var i=0;i<arrayOfCars.length;i++){
        if(arrayOfCars[i].Model===carImg[i]){
            checkSrc();
        }
}
}
checkLs();//check if thers any data is localStorage