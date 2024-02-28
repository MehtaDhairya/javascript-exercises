const fibonacci = function(num) {
    
 let a =0;
 let b=1;
 if( typeof num !== 'number' ){
    parseInt(num);
 }
 if(num < 0){
    return "OOPS";
 }
 if(num == 0){
    b = 0;
 }   
for(let i=2;i<=num;i++){
    let current= a + b;     // 0,1,1,2,3
        a=b;
        b=current;

}
return b;
};

// Do not edit below this line
module.exports = fibonacci;
