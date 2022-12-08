let str= "racecar";
  let bag="";
  for (let i=str.length-1;i>=0;i--){
    bag+=str[i];
   }
   if(str==bag){
   console.log("palindrome");
   }
   else{
   console.log("Not palindrome");
   }
