console.clear();

// Set
//const set = new Set([1, 2, 3, 1, 2, 3]);
//console.log(set);
//console.log(set.size);

//console.log(set.has(2));
// //console.log(set.forEach());
//console.log(set.add(8));
//console.log(set.delete(1));
//console.log(set);
//set.clear();
//console.log(set);

/*
const obj1 = { name: "사과" };
const obj2 = { name: "포도" };
const obj3 = { name: "포도" };
const obj = new Set([obj1, obj2, obj3]);
console.log(obj);

obj.add(obj3);
console.log(obj);

obj3.name = "토마토";
console.log(obj);
*/

// Map
const map = new Map([
    ["key1", "사과"],
    ["key2", "바나나"],
]);

/*
console.log(map);
console.log(map.size);
console.log(map.has("key1"));
console.log(map.has("key5"));
*/

/*
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries()); // ???

map.set("key3", "키위");
console.log(map);

map.delete("key3");
console.log(map);
map.clear();
console.log(map);
*/

const keys1 = { name: "우유", price: 10 };
const keys2 = { name: "우유", price: 10, desc: "맛있는 우유" };
const obj33 = { [keys1]: keys2 };
console.log(obj33);

const newMap = new Map([keys1, keys2]);
console.log(newMap);
