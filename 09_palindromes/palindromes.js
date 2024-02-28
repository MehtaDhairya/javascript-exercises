const palindromes = function (string) {

   let stringrev = string.toLowerCase().replace(/[^a-z0-9]/g,"");
   if(stringrev.split("").reverse().join("") == stringrev){
    return true;
   }
   else{
    return false;
   }
};


// Do not edit below this line
module.exports = palindromes;
