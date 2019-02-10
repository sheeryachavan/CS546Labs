var l_functObjectCheck = function (p_objectParam) {
    return (typeof p_objectParam == 'object');
}

var deepEquality = function (obj1, obj2) {
    if (l_functObjectCheck(obj1) && l_functObjectCheck(obj2)) {
        var l_arrObject1Keys = Object.getOwnPropertyNames(obj1).sort();
        var l_arrObject2Keys = Object.getOwnPropertyNames(obj2).sort();
        if (l_arrObject1Keys.length == l_arrObject2Keys.length) {
            for (var i = 0; i < l_arrObject1Keys.length; i++) {
                if (l_functObjectCheck(obj1[l_arrObject1Keys[i]]) && l_functObjectCheck(obj2[l_arrObject2Keys[i]]))
                    return deepEquality(obj1[l_arrObject1Keys[i]], obj2[l_arrObject2Keys[i]])
                else if (obj1[l_arrObject1Keys[i]] != obj2[l_arrObject2Keys[i]]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    else console.log("You need to enter 2 parameters as proper objects");

}

var uniqueElements = function (arr) {
    if (arr != undefined && Array.isArray(arr)) {
        var l_arrUniqueElements = [];
        for (var i = 0; i < arr.length; i++) {
            if (l_arrUniqueElements.indexOf(arr[i]) == -1)
                l_arrUniqueElements.push(arr[i]);
        }
        return l_arrUniqueElements.length;
    }
    else console.log("You need to enter a proper array");
}
var countOfEachCharacterInString = function (str) {
    var l_objCharacterCount = {};
    if (typeof str == "string") {
        for (var i = 0; i < str.length; i++) {
            if (l_objCharacterCount[str[i]] == undefined) {
                l_objCharacterCount[str[i]] = 1;
            }
            else l_objCharacterCount[str[i]] = ++(l_objCharacterCount[str[i]]);
        }

        return JSON.stringify(l_objCharacterCount);
    }
    else console.log("You need to enter a proper string");

}
module.exports = {
    firstName: "SHREESH",
    lastName: "CHAVAN",
    studentId: "10440695",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}