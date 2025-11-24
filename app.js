let obh={
    name: "dibya",
    dettails: {
        age: 20,
        rollNo: 120,
    }
}

let obj2 = obh;

obj2.name="sita";
console.log(obh.name);
console.log(obj2.name);

let copyObj = structuredClone(obh);

copyObj.name = "new student";
console.log(copyObj.name);
console.log(obh.name);