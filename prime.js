let num= 11;
 let count=0;
 for(let i=1 ; i<=num ; i++){
 if((num%i)==0){
  count++;
  }
 }
 if( count>=1){
 console.log("Prime number");
 }
else {
 console.log("not Prime number");
 }