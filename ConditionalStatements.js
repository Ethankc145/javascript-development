// A Simple If and Else Statement
//if(20>10){
//    console.log("Condition is true."); 
//}

const ifExample = (param) => {
    console.log('Before IF statement.');
      
    if (param === "John") {
      console.log(`The param value is ${param}`);        
    }
  
      console.log("After IF statement.");
  };
  //ifExample("Smith")
  //ifExample("John")
  //ifExample("john")
  
  const elseExample = (param) => {
      if (param == 'Javascript') {
        console.log('The condition is true.');
      } else {
        console.log('The condition is false.');
          
      }
      
      console.log("More codes here.");
  };
  //elseExample("John");
  //elseExample("Javascript");
  
  //ELSE/IF Statements
  const elseIfExample = (params) => {
      if (params == 5) {
          console.log('First check is true.');
        } else if(params > 5) {
          console.log("Second check is true.");
        } else if(params == 2) {
          console.log("Third check is true."); 
        } else {
          console.log("No check is True");
        }
  };
  //elseIfExample(3);
  //elseIfExample(5);
  //elseIfExample(2);
  
  //Logical operators with IF statements
  const logicalIfExample = (num1, num2) => {
    if (num1 == 10 && num2 > 10) {
      console.log("Both conditions are true");
    } else {
      console.log("One of or both conditions are true.");
    }
  
    if (num1 <= 9 || num2 > 20) {
      console.log("One of the condions is true.");
    } else {
      console.log("Both conditions are false.");
    }
  };
  //logicalIfExample(10, 12);
  //logicalIfExample(5, 25);
  
  // Ternary Operator
  //const ternaryExample = (num) => {
  //  const result = num > 10? `The value of num parameter/variable is greater than 10`:`The value of num parameter/variable is NOT greater than 10`
  //    return result;
  //};
  
  //console.log(ternaryExample(5));
  //console.log(ternaryExample(15));
  
  //Switch Statement
  //switch('Red'){
  //  case "Red":
  //    console.log("This is from Red case.");
  //    break;
  //  case "Blue":
  //    console.log("This is from Blue case.");
  //    break;
  //  case "Yellow":
  //    console.log("This is from Yellow case.");
  //    break;
  //  default:
  //    console.log('This if from the default case.');
  //    break;
  //};
  
  // Cascading Technique
  switch('Yes'){
      case "Yes":
      case "yes":
      case "yes":
        console.log("Agree!");
        break;
      case "No":
        console.log("This is from Yellow case.");
        break;
      case "no":
        console.log("This is from Yellow case.");
        break;
      default:
        console.log('This if from the default case.');
        break;
  };