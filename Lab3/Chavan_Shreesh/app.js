let l_objTextMetrics = require('./textMetrics.js');
let l_objFileData = require('./fileData.js');
let bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require('fs'));
async function main(p_strFileName) {
    if (p_strFileName.match('.txt')) {
        p_strFileName = p_strFileName.replace(".txt", "");
        // Technique refered from gregjs.com
        var l_objStatistics = await fs.statAsync(p_strFileName + ".result.json");
        l_objJSONResult = await l_objFileData.getFileAsJSON(p_strFileName + ".result.json").catch(l_objException => { console.log(l_objException); });
        console.log(l_objJSONResult);
    }
    else console.log("Please Enter a '.txt' file as input");
}

async function functCreateResult(p_objException, p_strFileName) {
    try {
        var l_strContent = String(await l_objFileData.getFileAsString(p_strFileName + '.txt').catch(l_objException => {
            console.log(l_objException);
        }));
        if (l_strContent != "undefined" && l_strContent != "") {
            var l_objFileMetrics = l_objTextMetrics.createMetrics(l_strContent);
            var l_boolJSONResult = await l_objFileData.saveJSONToFile((p_strFileName + ".result.json"), l_objFileMetrics).catch(l_objException => { console.log(l_objException); });
            if (l_boolJSONResult) {
                l_objJSONResult = await l_objFileData.getFileAsJSON(p_strFileName + ".result.json").catch(l_objException => { console.log(l_objException); });
                console.log(l_objJSONResult);
            }
            var l_boolStringBackup = await l_objFileData.saveStringToFile((p_strFileName + ".bak.txt"), l_strContent).catch(l_objException => { console.log(l_objException); });
            // console.log(l_boolStringBackup);
        }
    } catch (l_objException) {
        console.log(l_objException);
    }

};

main("chapter3.txt").catch(l_objException => {
    // Technique refered from gregjs.com
    if (l_objException.code == 'ENOENT')
        functCreateResult(l_objException, l_objException.path.substr(0, l_objException.path.indexOf(".result.json")));
    else console.log(l_objException);
});








