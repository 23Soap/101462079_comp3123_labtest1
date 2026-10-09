
const mixedArray = ["PIZZA",10,true,25,false,"Wings"]
function lowerCaseWords(mixedArray){
    return new Promise((resolve,reject) => {
        const strings = mixedArray.filter(item => typeof item == "string");
        const lower = strings.map(item => item.toLowerCase());
    if (strings.length === 0){
        reject("No Strings");
    }else resolve(lower);

    })
}
lowerCaseWords(mixedArray).then(final => {
    console.log("Success:",final)
})
.catch(error => {
    console.log("Error",error)
})

const resolvedPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            let success = {message: "delayed Success!"}
            resolve(success)
        },500)
    })
}

const rejectedPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fail = {error: "delayed exception"}
            reject(fail)
        },500)
    })
}

resolvedPromise().then(success => {
    console.log(success)
})
    .catch(error => {
        console.log(error)
    })

rejectedPromise()
    .then(fail => {
        console.log(fail);
    })
    .catch(error => {
        console.log(error);
    });
