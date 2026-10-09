const fs = require("fs");
const path = require("path");

if (fs.existsSync("Logs")){
    const files = fs.readdirSync("Logs");
    for (let file of files){
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join("Logs", file));

    }
    fs.rmdirSync("Logs");
}else{
    console.log("Logs directory does not exist")
}