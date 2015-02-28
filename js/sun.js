function myLog(log){
  document.getElementById("log").innerHTML += log + "<br>";
}

myLog("Temperature Examples");


function temp(a,b){
  if(a==="F"){document.getElementById("log").innerHTML += b + " degrees F = "+ (b-32)*5/9 + " degrees C.  <br>";}
  if(a==="C"){document.getElementById("log").innerHTML += b + " degrees C = "+ (b*9/5+32) + " degrees F.  <br>";}
  
}

temp("F",50);
temp("C", 25);


sign("8/27/2000");
