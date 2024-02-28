const reverseString = function(string) {
        let arr = string.split(" ");
        
    
        let arr1 = arr[0];
        let arr2 = arr[1];
        let rarr1 = arr1.split("").reverse().join("");
         
        if(arr.length<2){
            return rarr1;
        }
        else
        {
            let raar2 = arr2.split("").reverse().join("");
             return raar2 + " " + rarr1;
        }
       

};

// Do not edit below this line
module.exports = reverseString;
