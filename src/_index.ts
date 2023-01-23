export * from './code/getSimplePagination';
export * from './code/core';

// const data = [
//   { id: "fb5ea67d-bc35-4be6-8993-88c2adb8b503", name: "bb0", age: 25 },
//   { id: "2fbdb2fb-1d97-4500-b765-ff93744e0d98", name: "bb1", age: 26 },
//   { id: "ba3024f3-2497-47e2-ae11-90556bc084dd", name: "bb2", age: 27 },
//   { id: "bdf07a1d-2d95-4475-9f71-299357c5250f", name: "bb3", age: 28 },
//   { id: "cff6e164-7f8d-4956-9686-fdcd219d03e5", name: "bb4", age: 29 },
//   { id: "849eaeca-ba38-44fc-98f3-d7d0f9081278", name: "bb5", age: 210 },
// ];

// const pp1 = getSimplePagination(
//   {
//     currentPage: 3,
//     size: 1,
//     total: data.length,
//   },
//   2,
//   {
// 		firstText: '...'
// 	}
// );
// console.log(pp1);



// let simpleP = new SimplePagination(3, 11, 64, 5);
// for (let p of simpleP.items) {
//     console.log(p);
// }
// console.log("total", simpleP.total);
// console.log("current", simpleP.current);

// import { MiddlePagination } from './code/middlePagination';

// let middle = new MiddlePagination(9, 10, 1000, 10);
// middle.build();
// for(let p of middle.items){
//     console.log(p);
// }
