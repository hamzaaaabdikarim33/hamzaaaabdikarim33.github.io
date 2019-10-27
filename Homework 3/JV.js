console.log("loaded");

function myFunction(event) {
    event.preventDefault()
    var userInput = document.getElementById("password");
    var passwordLength = userInput.length;
    var validPasword = false;
    var userInputArray = [];
    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ">", "<", ".", "?", "/"];
    var validSpecial = false;
    var validlowercaseLetters = false;
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var allTogether = [passwordLength];

var length= prompt("please create set rules to pw, what is the length");
console.log("length"+ length);
var userchars= confirm("do you want special characters");
console.log("user's choice for special characters"+userchars);
if(userchars){
    specialCharacter+userInputArray
    //add special chars to useruserinputarray
    for(var i=0;i<specialCharacter.length;i++)
    {
    userInputArray.push(specialCharacter[i])
    }
}
var numbers=confirm("do you want numbers");
console.log( "user's choice for special numbers"+numbers);
if(userchars){
    specialCharacter+userInputArray
//prompt to slelect nums
var lower= confirm("do you want lowercase letters");
console.log( "user's choice for lowercase letters"+lower);
//propmp to slelect lower
var upper= confirm("do you want uppercase letters");
console.log( "user's choice for uppercase letters"+upper);
//propmp to selelct uppers

//once all the conditionals are done, once user answs all the q's = userInputArray
//hen you will create a pw by randomly gnenerating the pw by user's length and userInput Array
var pw="";
for(var x=0;x,parseInt(length);x++){
   // pw+=userInputArray[Math.ran]
   //max = userInputArray.length-1
   //min=0
}

//everything on console.log should work, then append them to html







    //for loop to add special chrs into the empty userinputarray
    for (var i = 0; i < specialCharacter.length; i++) {
        userInputArray.push(specialCharacter[i])
    }
    //checkthe pwlength is 8 or greater and less than 128
    if (passwordLength >= 8 && passwordLength <= 128) {
        //update validatepw to true
        validPassword = true

        console.log("passwordLength")
    }
    //run for loop to check each input from the specialchar array 
    for (var i = 0; i < specialCharacter.length; i++) {
        //you are trying to find if the userinputarray to find each special char a
        if (userInputArray.indexOf(specialCharacter[i]) > -1) {
            //if true set validspecial to true
            validSpecial = true;

            console.log ("specialCharacter")

        }

    }
    return allTogether


    
}
          
    var numarr= ['a','b','c'];
    //numarr.length() //3
    //i<3
//i++ same as i=i+1

    for(var i=0;i<numarr.length;i++){
        console.log(numarr[i]);
    }
console.log("done");
    //i =0=1=2=3
    //output
    //a
    //b
    //c
    //numarr[0]
    //numarr[1]
    //numarr[2]                                           