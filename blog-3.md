Type guards in typescript is necessary because its check the type of param that its string or boolean or number or nay other types . It's necessary to use in typescript .
Type guard is using many ways like type of, type in,instance of ,custom type guard . The type of type guard is particularly useful when you want to distinguish between primitive types in a union. Since TypeScript can infer the type based on type of checks, it is simple and effective for handling these primitives. When we want to check if an object has a specific property, especially in union types with overlapping property names than we are using typein .When working with classes and objects instantiated from classes than we are using instance of type guard .There are also many ways to use type guard 
.
Here is the example of type of code :


 function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log("Value is a string:", value.toUpperCase());
  } else {
    console.log("Value is a number:", value.toFixed(2));
  }
}

formatValue("hello"); 
formatValue(42.5);    

