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

