var obj = {
    key: "value1",
    key2: "value2",
    key3: "value3",
}
var jsn = JSON.stringify(obj)
console.log(jsn)
var objjjj = JSON.parse(jsn)
console.log(objjjj)