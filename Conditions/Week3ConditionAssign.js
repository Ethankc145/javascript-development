//First Task Condition
const taskOne = (ParamOne, ParamTwo) => {
    if (ParamOne == ParamTwo) {
       console.log("The two parameters are the same!");   
    } else {
        console.log("The two paramets are NOT the same!");
    }
};
//taskOne(1,1);
//taskOne(1, "1")
taskOne("a", "1")

// Second task Condition

const evaluateGrade=(grade) => {
  switch (grade) {
    case 'E':
    case 'e':
        console.log('Excellent');
        break;
    case 'V':
    case 'v':
        console.log('Very Good');
        break;
    case 'G':
    case 'g':
        console.log('Good');
        break;  
    case 'A':
    case 'a':
        console.log('Average');
        break;
    case 'F':
    case 'f':
        console.log('Failed');
        break;
    default:
        console.log('Not a vaild Grade');
  }
};

evaluateGrade('E');
evaluateGrade('V');
evaluateGrade('G');
evaluateGrade('A');
evaluateGrade('F');
evaluateGrade('Z');

//Third task Condition
const EvenOrOdd = (Number) => {
    if (Number %2===0) {
        console.log('Number is Even');
    } else {
        console.log('Number is Odd');
    }
};
EvenOrOdd(8);
EvenOrOdd(17);
//Fourth Task Condition
const ValidNumber = (input) => {
    if (typeof input === 'number' && !isNaN(input)) {
        console.log('The Input is a Number');
    } else {
        console.log('The Input is NOT a Number');
    }
}
ValidNumber(42);
ValidNumber("a");

//Fifth Task Condition
const LargeNum = (BigNum1, BigNum2) => {
    if (BigNum1 > BigNum2) {
        console.log(BigNum1 + ' is the largest Number');
    } else if (BigNum2 > BigNum1){
        console.log(BigNum2 + ' is the largest Number');
    } else {
        console.log('Both Numbers are Equal');
    }
};
LargeNum(50, 20);
LargeNum(10, 58);
LargeNum(40, 40);

// Sixth Task Condition
const LargestNum = (Num1, Num2, Num3) => {
    if (Num1 > Num2 && Num1 > Num3) {
      console.log(Num1 + ' is the Largest Number');
    } else if (Num2 > Num1 && Num2 > Num3) {
      console.log(Num2 + ' is the largest Number');
    } else {
      console.log(Num3 + ' is the largest NUmber');
        
    }
}
LargestNum(20, 17, 14);
LargestNum(35, 45, 25);
LargestNum(40, 50, 60);

//Seventh Task Condition
const TriangleSides = (Side1, Side2, Side3) => {
    if (Side1 === Side2 && Side2 === Side3){
    console.log('The Triagnle is Equilateral ');
}   else if (Side1 === Side2 || Side2 === Side3 || Side1 === Side3){
    console.log('The Triangle is Isosceles');
}   else
    console.log('The Triangle is Sclene');
}
TriangleSides(10, 10, 10)
TriangleSides(15, 20, 15)
TriangleSides(3, 7, 9)
 

//Eighth Task Condition
const RangeNum = (Start, End, Num) => {
    if (Num >= Start && Num <= End) {
        return true;
    } else {
        return false;
    }
}

let Start = 10
let End = 20
let Num = 15
console.log(RangeNum(Start, End, Num));

Num = 50
console.log(RangeNum(Start, End, Num));

//Ninth Task Condition
const operation = (Num1, Num2, Operator) => {
    let result

    switch (Operator) {
        case 'Add':
            result = Num1 + Num2;
            break;
        case 'Multiply':
            result = Num1 * Num2;
            break;
        default:
            return "Error: Invalid"
    }
    return result
}
console.log(operation(2, 2,'Add'));
console.log(operation(5, 10,'Multiply'))
console.log(operation(5, 5, 'modulus'))

//Tenth Task Condition

const LeapYear = (year) => {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(`Year ${year} is a leap year.`);
    } else {
        console.log(`Year ${year} is NOT a leap year.`);
    }
};

LeapYear(2012)

// Eleventh Task Condition

const DaysInMonths = (Month, Year) => {
   const LeapYear = (year) => {return (year % 4 == 0 && year % 100 != 0)}

   if (Month < 1 || Month > 12) {
   console.log("The month is Invalid");
   return;

  }

  if (Month == 2) {
    if (LeapYear(Year)) {
        console.log(`The month has 29 days with the year ${Year}`);        
    } else {
        console.log(`The month has 28 days.`);
    }
  } else if (Month == 4 || Month == 6 || Month == 9 || Month == 11) {
    console.log("The month has 30 Days");
  } else {
    console.log("The month has 31 Days");
    }
};
//DaysInMonths(2,2012)
//DaysInMonths(6,2013)
//DaysInMonths(10, 2013)
//DaysInMonths(100, 2013)
