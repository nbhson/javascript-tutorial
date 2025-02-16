var employee = { key: 1, value: "Sơn" };
var banking = { key: 2, value: 8569846854713168 };
function processNumKeyPairs(key, value) {
    console.log("processNumKeyPairs: key = " + key + ", value = " + value);
}
var numKVProcessor = processNumKeyPairs;
numKVProcessor(1, 12345); //Output: processNumKeyPairs: key = 1, value = 12345
