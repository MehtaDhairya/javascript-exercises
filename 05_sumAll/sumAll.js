const sumAll = function(int1, int2) {
     let fSum = 0;
     let emp;
     if (int1>int2)
     {
        emp = int1;
        int1 = int2;
        int2 = emp;
     }
     else if(int1 < 0 || int2 < 0)
     {
        return "ERROR";
     }
     else if((!Number.isInteger(int1) )|| (!Number.isInteger(int2))){
        return "ERROR"
     }
     for(let i = int1; i <=int2; i++)
     {
       fSum += i ;
     }
     return fSum;
};

// Do not edit below this line
module.exports = sumAll;
