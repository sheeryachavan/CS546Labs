const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs'));
async function getFileAsString(path) {
    path = String(path);
    if (path.length < 3 || (path.indexOf('.') == -1)) throw "Provide a correct Path";
    else {
        let l_objFileContent = await fs.readFileAsync(path, "utf-8");
        if (l_objFileContent != undefined) return l_objFileContent;
        else throw "Provide a correct Path";
    }
}
async function getFileAsJSON(path) {
    path = String(path);
    if (!path) throw "Provide a correct Path";
    else if (!(path.match('.json'))) throw "Provide a path of '.json' file."
    else {

        let l_objFileContent = await fs.readFileAsync(path, "utf-8");
        if (typeof l_objFileContent == "string") {
            return JSON.parse(l_objFileContent);
        }
        else return l_objFileContent;
    }
}
async function saveStringToFile(path, text) {
    if (path) {
        path = String(path);
        await fs.writeFileSync(path, String(text));
        return true;
    }
    else throw "Provide a correct Path";
}
async function saveJSONToFile(path, obj) {
    if (typeof obj === "object" && path) {
        if (path.match('.json')) {
            await fs.writeFileSync(path, JSON.stringify(obj));
            return true;
        }
        else {
            throw "Provide a path of '.json' file."
        }
    }
    else throw "Either path or object is incorrect";
}
module.exports = {
    firstName: "SHREESH",
    lastName: "CHAVAN",
    studentId: "10440695",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};
