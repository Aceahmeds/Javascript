let myset = new Set();

console.log(myset);

myset.add('this');
myset.add('ahmed');
myset.add('that');
myset.add('that2');
myset.add('ali');
myset.add(4);

console.log(myset.size);
console.log(myset.has(40));
// before delete
// myset.delete('before delete', myset.has,'that2');
console.log('before removal', myset.has('that2'));
myset.delete('that2');

let myset2 = new Set();
myset2.add('this');
myset2.add('faraz');
myset2.add('that'); 
myset2.add('that2');
myset2.add('nabeel');

console.log(myset2);
console.log(myset2.size);
// after delete
console.log("after removal", myset2.has('that2'));
myset2.delete('that2');

Array.from(myset2);

// 
myset2.forEach((data)=>{
console.log(data);
});