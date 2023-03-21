//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
 Area=(base * height) / 2;
 return Area
}
// Example usage
console.log(triArea(10, 10)); // Output: 50

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return "something " + a;
  }
  
  // Example usage
  console.log(giveMeSomething("is better than nothing")); // Output: "something is better than nothing"

  //You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
  function Point(a,b){
 
  var Points=(a*2+b*3);
  return Points;
  }
  console.log(Point(6,7));


  //Given two numbers, return true if the sum of both numbers is less than 100.Otherwise return false.
function condition(a,b){
    if ((a+b)<100){
        return true;
    }
        else{
            return false
        }
    }
console.log(condition(10+89));

//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function Number(a){
if (a>=1000){
    sum=0;
for (i=1; i<=a;i++){
    sum=sum+i;
}
return sum;
}
else{
    return "invalid number";
}
}

console.log(Number(200));

/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".*/
function evod(a){
    sum=0;
    while (a>0){
      d=a%10;
      a=Math.trunc(a/10);
      sum=sum+d;
      }
      if(sum%2==0){
        return "Evenish";
    }
    else{
        return "Oddish";
    }
}
console.log(evod(212));

//Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise
function prime(a){
    response=true;
    for (i=2;i<a;i++){
        if (a%i==0){
            response=false;
            break;
        }
    }
     return response;
}
function main(x,y){
    if (y>x && x>=0 && y>=0){
        count=0;
        while (x<=y){
            if (prime(x)==true && x!=1){
                count=count+1;
            }
            x=x+1;
        }
    }
    if (count>0){
        return true;

    }
    else{
        return false;
    }
}
console.log(main(11,13));

//Left Shift by Powers of Two
//The left shift operation is similar to multiplication by powers of two.
//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
/*Notes
●	There will be no negative values for the second parameter y.
●	This challenge is more like recreating the left shift operation, thus, the use of the operator directly is prohibited.
●	Alternatively, you can solve this challenge via recursion.*/

function shbpo(x,y){
    if (y=0){
        return (x*(2**y));
    }
    else{
        return"Negative number detected"
    }
}
console.log(shbpo(12,4));

/*Convert a Number to Base-2
Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2. The values of an 8 bit binary number are (256, 128, 64, 32, 16, 8, 4, 2, 1).
*/
function bas(a){
    x=""
    if (a>0 && a<1024){
        while (a>0){
            y=a%2;
            x=y+x;
            a=Math.trunc(a/2);
        }
    }
    else if (a==0){
x=x+0;
    }else{
        x="Number more than 1024 is not accepted"
    }
    return x;
}
console.log(bas(5));
