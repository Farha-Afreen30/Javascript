const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        const name="Farha";
        if (name) {
            resolve(name);
        } else {
            reject(new Error ("No data"));
        }
    }, 2000);
});

function getDetails(name) {
    const details = new Promise((resolve,reject)=>{
        setTimeout(() => {
            let details = [{name: "Farha", age: 20}];
            const user = details.find(user=>user.name===name);
            if (details){
                resolve(details)
            } else{
                reject("Error")
            }
        }, 1000);
    });
return details;
}

data
    .then((name) => {
        return getDetails(name);
    })
    .then((details) => {
        console.log(details)
    })
    .catch((error) =>{
        console.log(error.message);
    })
    .finally(() => {
        console.log("Finally");
    });
