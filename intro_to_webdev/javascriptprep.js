console.log("helloworld!");
var today=new Date();    //show date of today
console.log(today);     //pritn statement
var age;//declaring the variable without initializing value to it
var age=33; //declaring and initializing variable

/* js doesnt need to define the type of varible .it defined it automatically when value is provided before that it give undefined */
console.log("Hello, World!");
var today=new Date();
console.log(today);//what
var letter="E";
if (letter!=""){
  if (letter=="A"){
    console.log("letter is A")
  }else if (letter=="E"){
    console.log("letter is E")
  }
  
}

switch (2) {
  case 0:
    console.log("output is 0")
    break;
  case 1:
    console.log("output is 1")
    break;
  
  case 2:
    console.log("output is 2")
    break;
  case 4:
    console.log("output is 4")
    break;
  
  default:
    console.log("output is outof range")
}

for(var i =0;i<10;i++){
  console.log(i)
}
var t=0;
while(t<10){
  console.log(t*t)
  t=t+1;
}



function Car(make,model,year){
  this.make=make;
  this.model=model;
  this.year=year;
  this.getName=function(){
    return this.make+" "+this.model+" "+this.year;
  }
}

var mycar= new Car("honda","civic",2022);// use new keyword to create an object

console.log(mycar.getName());
Car.prototype.getYear=function(){     //prototype can be used to add method to fuction and all object will inhert it
  return this.year

}

console.log(mycar.getYear());

/* changing the file in another branch then i will merge both branch and see what happen */


