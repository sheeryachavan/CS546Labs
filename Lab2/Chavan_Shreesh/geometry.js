var numCheck = function (l_intParam) {
    l_intParam = Number(l_intParam);
    return (isNaN(l_intParam)) ? false : (l_intParam < 1) ? false : true;
}
var printError = function () {
    console.log("Some parameters are incorrect, Please enter proper values.\n The following might help..\n ** Numbers should be greater than 0\n ** No strings other than number strings are allowed");
}
var volumeOfRectangularPrism = function (length, width, height) {
    let l_arrParams = [length, width, height];
    let l_intVolumeOfPrism = 1;
    for (var i = 0; i < l_arrParams.length; i++)
        if (numCheck(l_arrParams[i])) l_intVolumeOfPrism *= l_arrParams[i];
        else break;
    (i == l_arrParams.length) ? console.log("The Volume of Prism is " + l_intVolumeOfPrism) : printError();
}
var surfaceAreaOfRectangularPrism = function (length, width, height) {
    let l_arrParams = [length, width, height];
    for (var i = 0; i < l_arrParams.length; i++)
        if (!(numCheck(l_arrParams[i]))) break;
    (i == l_arrParams.length) ? console.log("The Surface Area of Prism is " + (2 * ((length * width) + (width * height) + (height * length)))) : printError();
}
var volumeOfSphere = function (radius) {
    (numCheck(radius)) ? console.log("The Volume of Sphere is " + ((4 / 3) * Math.PI * Math.pow(radius, 3))) : printError();
}
var surfaceAreaOfSphere = function (radius) {
    (numCheck(radius)) ? console.log("The Surface Area of Sphere is " + (4 * Math.PI * Math.pow(radius, 2))) : printError();
}

module.exports = {
    firstName: "SHREESH",
    lastName: "CHAVAN",
    studentId: "10440695",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};
