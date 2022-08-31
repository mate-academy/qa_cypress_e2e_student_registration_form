let x = {
"k1":36.9,
"k2": 37.7,
"k3": null,
"k4": 37.3}

console.log(Object.keys(x).find(key => x[key] === null));

for (let key in x) {
    if (x[key] === null) {
        console.log(key);
    }
}

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

console.log(myObj);
let text = "";
for (const x in myObj) {
  text += x + ", ";
}

