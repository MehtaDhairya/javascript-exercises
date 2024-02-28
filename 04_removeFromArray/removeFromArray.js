const removeFromArray = function(arr1 , ...extras) {
    let arr = [];
    return arr1.filter(val => !extras.includes(val))
      
      
};

// Do not edit below this line
module.exports = removeFromArray;
