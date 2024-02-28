const findTheOldest = function(people){
   let oldest = people.reduce((a,b)=>{
    
     let aAge = CalcAge(a.yearOfDeath , a.yearOfBirth);
     let bAge = CalcAge(b.yearOfDeath , b.yearOfBirth);
     return aAge < bAge ? b:a;
   });
   return oldest;
};
const CalcAge = function(death, birth){
    if(!death){
        death = new Date().getFullYear();

    }
    return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
