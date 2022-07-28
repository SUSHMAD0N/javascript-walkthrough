const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const result = cats.map(converToUpper);

console.log(result);

function converToUpper(cat) {
return cat.toUpperCase();
}

const result1 = cats.filter(iCat);
console.log("result1", result1)

function iCat (cat){
return cat.startsWith("L");
}
