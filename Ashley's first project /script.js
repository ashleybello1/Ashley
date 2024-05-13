alert("Welcome!"); 
{
     let userage= 25;

     let userName = "Ashley";
}

let doubleAge = userAge * 2;

{
     if (userAge >=18) {
       console.log(userName + " is an adult ") ;
     } else {
          console.log(userName + " is a minor ") ;
     }
}

{
     let isAdult = userAge >= 18;

     let  hasName = userName !== " ";
}

{
     console.log(" Double of " + userName + " 's age is: " + doubleAge);
}

{
     let outputDiv =  document.getElementById("output");
}
let outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<p>" + userName + " is an adult: " + isAdult + "</p>";
outputDiv.innerHTML += "<p>" + userName + " has a name: " + hasName + "</p>";

// Additional output to console
console.log(userName + " is an adult: " + isAdult);
console.log(userName + " has a name: " + hasName);