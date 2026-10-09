const fs = require("fs");
const path = require("path");

if (!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    const message = "Some log text";
    fs.writeFileSync(fileName,message);
    console.log(fileName)
}