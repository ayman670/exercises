const fs = require('fs');


let keyword = 'y';
let arr = [];

fs.readFile("./gg.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log('Error!');
    }
    else {
        arr = data.split(' ');
        arr.forEach((element) => {
            if (element.includes(keyword)) {
                console.log(element);
            }
        })
    }
});
