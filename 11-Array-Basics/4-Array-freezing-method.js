let Data = [
    123,
    'Teja',
    true,
    [156,897,365],
    {a : 1,b :2, c:3}
];


Object.freeze = Data;
console.log(Data);

console.log(Data.length);

//we can modified the data of array and object bacause it wasnt freezed..

Data[3] = 852;

console.log(Data);

