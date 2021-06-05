// Head First javasript 
var age =14;
var name = 'Owen';
if(age>14){
   // console.log('you are not fit ');
}else{
   // console.log('sorry'+name+"for anything");
}
var price=20;
var discount=6;
var total = price- (price* (discount/100));
var dogName = "rover";
var dogWeight = 23;
if(dogWeight>20){
   // console.log(dogName+'says wOOF wOOF');
}else{
   // console.log(dogName+"says woof woof");
}
dogName='spot';
dogWeight=13;

if(dogWeight>20){
   // console.log(dogName+"says WOOF");
}
function bark(name,weight){
   if(weight>20){
      console.log(name+'says woof woof');
   }else{
      console.log(name+'says WOOF WOOF');
   }
   return name 
}
// console.log(bark('rover',23));
// what can you pass to a funtion 

saveMyProfile('krissy',1991,3.81,false);

function saveMyProfile(name,birthday,GPA,newUser){
   if(birthday>=2004){
      console.log('happy birthday');
   }else{
      // console.log('sorry ');
   }
}
// weird functions 

// what happens when we don't pass enough arguments 
function makeTea(cups,tea){
   // console.log('brewing'+cups+"cups of"+tea);
   return cups
}
console.log(makeTea(3));
// what happens when we happens pass too many arguments \
function makeCoff(cups,tea){
   // console.log('Bewing'+cups+'cups of'+tea);
}
console.log(makeCoff());

function bake(degrees){
   var message;
   if(degrees>500){
      message="i'm not nuclear reactor"
   }else if(degrees<100){
      message="im not a refrigerator"
   }else{
      message="That's a very comfortable temperatue for me"
      setMode('bake');
      setTemp(degrees)
   }
   return message
}
function addScore(level,score){
   var bonus = level* score *1;
   return score+bonus
}
console.log(addScore(2,4));
// don't forget to declare your locals 
var points=200;
function playTune(player,location){
   points=0;
   if(location ==1){
      points = points+100
   }
   return points
}
var total = playTune('uban',1);
console.log(points);
