type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };
type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    return shape.shape === "circle"
        ? Math.PI * shape.radius ** 2
        : shape.width * shape.height;
}

// Sample usage
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea); 

const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
// console.log(rectangleArea); 
