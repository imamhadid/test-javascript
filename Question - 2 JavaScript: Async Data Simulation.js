// Implement a function getData() that fetches data for a particular id from a list of data. The data is returned by the function getOriginalData() which is already implemented in the code header. The function getData() should reject if getOriginalData() returns undefined for the given id. Otherwise, it should resolve with the original data.
// Constraints
// 1≤n≤10
// 1≤|id|≤10
// Note: |x| denotes the length of string x

// The first line contains an integer n, denoting the number of ids. The following n lines contain a single string, id

const readline = require('readline');

function getOriginalData(id) {
    
    const data = {
        "k1": "2 3",
        "k2": "4 5",
    };
    return data[id];
}

function getData(ids) {
    const promises = ids.map(id => {
        return new Promise((resolve, reject) => {
            const originalData = getOriginalData(id);
            if (originalData !== undefined) {
                resolve(originalData);
            } else {
                reject("Error");
            }
        });
    });

    return Promise.allSettled(promises)
        .then(results => {
            const output = results.map(result => {
                if (result.status === "fulfilled") {
                    return result.value;
                } else {
                    return "Error";
                }
            });

            return output;
        });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Jumlah Total ID (Hanya Angka): ', (n) => {
    
    rl.question('Masukan ID (spasi sebagai pembatas *sample "k1 k4 k2"): ', (idStr) => {
        const ids = idStr.split(' ');
        
        rl.close();
        
        getData(ids)
            .then(result => {
                console.log(result.join("\n"));
            })
            .catch(error => console.error(error));
    });
});
