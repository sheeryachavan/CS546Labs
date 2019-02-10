let l_objUtilities = require('./utilities.js');
let l_objGeometry = require('./geometry.js');

// =============================Geometry==============================
try {
    l_objGeometry.volumeOfRectangularPrism(i,should);// 1200
} catch (l_objError) {
    console.log(l_objError)
}
try {
    // l_objGeometry.surfaceAreaOfRectangularPrism(i,should,throw);//680
} catch (l_objError) {
    console.log(l_objError)
}
try {
    l_objGeometry.volumeOfSphere(this_is_an_error); //4188.790204786391
} catch (l_objError) {
    console.log(l_objError)
}
try {
    l_objGeometry.surfaceAreaOfSphere(this_is_an_error);//1256.6370614359173
} catch (l_objError) {
    console.log(l_objError)
}
l_objGeometry.volumeOfRectangularPrism(42, 411, 3); //// 51786; received undefined
l_objGeometry.volumeOfRectangularPrism(); //// exception to be thrown;
// l_objGeometry.volumeOfRectangularPrism(i,should,throw); //// exception to be thrown;
l_objGeometry.volumeOfRectangularPrism(3, 5, -200); //// exception to be thrown;
l_objGeometry.surfaceAreaOfRectangularPrism(5, 10, 15); //// 550; received undefined
l_objGeometry.surfaceAreaOfRectangularPrism(); //// exception to be thrown;
// l_objGeometry.surfaceAreaOfRectangularPrism(i,should,throw); //// exception to be thrown;
l_objGeometry.surfaceAreaOfRectangularPrism(3, 5, -200); //// exception to be thrown;
l_objGeometry.volumeOfSphere(23); //// 50965.01042163601; received undefined
l_objGeometry.volumeOfSphere(); //// exception to be thrown;
l_objGeometry.volumeOfSphere(-200); //// exception to be thrown;
l_objGeometry.surfaceAreaOfSphere(64); //// 51471.85403641517; received undefined
l_objGeometry.surfaceAreaOfSphere(); // exception to be thrown;
l_objGeometry.surfaceAreaOfSphere(-200); // exception to be thrown;
l_objUtilities.deepEquality(); // exception to be thrown;
l_objUtilities.deepEquality(1, 2); // exception to be thrown;
// l_objUtilities.deepEquality(,); // exception to be thrown;
l_objUtilities.uniqueElements(); // exception to be thrown;
l_objUtilities.uniqueElements(12341234); // exception to be thrown;
l_objUtilities.uniqueElements(); // exception to be thrown;
l_objUtilities.countOfEachCharacterInString(); // exception to be thrown;
l_objUtilities.countOfEachCharacterInString(12341234); // exception to be thrown;
l_objUtilities.countOfEachCharacterInString(); // exception to be thrown;




// ==============================Utilities============================
// const first = { a: 2, b: 3 }; //for deepEquality
// const second = { a: 2, b: 4 };//for deepEquality
// const third = { a: 2, b: 3 };//for deepEquality
// const testArr = ["a", "a", "b", "a", "b", "c"];//for uniqueElements
// const test = "Hello, the pie is in the oven";//for countOfEachCharacterInString
try {
    // console.log(l_objUtilities.deepEquality(,));//     console.log(l_objUtilities.deepEquality(first, second)); // false
    //     console.log(l_objUtilities.deepEquality(first, third)); // true
    //     console.log(l_objUtilities.deepEquality({
    //         "name": "John",
    //         "age": 30,
    //         "cars": {
    //             "car1": "Ford",
    //             "car2": "BMW",
    //             "car3": "Fiat"
    //         }
    //     }, {
    //             "name": "John",
    //             "age": 30,
    //             "cars": { "car1": "Chrysler" }
    //         }));
    //     console.log(l_objUtilities.deepEquality({
    //         "name": "John",
    //         "age": 30,
    //         "cars": {
    //             "car1": "Ford",
    //             "car2": "BMW",
    //             "car3": "Fiat"
    //         }
    //     }, {
    //             "name": "John",
    //             "age": 30,
    //             "cars": {
    //                 "car1": "Ford",
    //                 "car2": "BMW",
    //                 "car3": "Fiat"
    //             }
    //         }));
    //     console.log(l_objUtilities.deepEquality({}, {}));
} catch (l_objError) {
    console.log(l_objError)
}
// try {
//     console.log(l_objUtilities.uniqueElements(testArr)); // outputs 3
//     console.log(l_objUtilities.uniqueElements()); 
// } catch (l_objError) {
//     console.log(l_objError)
// }
// try {
//     const charMap = l_objUtilities.countOfEachCharacterInString(test);
//     console.log(charMap);
// } catch (l_objError) {
//     console.log(l_objError)
// }







