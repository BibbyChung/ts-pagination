

export const convertTableToTypeArray = <T>(dataTable: object[]) => {
  const arr = [];

  for (const obj of dataTable) {
    const newObj = {};
    for (const p in obj) {
      const pArr = p.split(':');
      const newP = pArr[0];
      const v = obj[p].toString();

      if (pArr.length === 1) {
        newObj[newP] = v;
        continue;
      }

      const postfix = pArr[1];
      if (postfix === 'Number') {
        newObj[newP] = parseFloat(v);
      }
      if (postfix === 'Date') {
        newObj[newP] = new Date(v);
      }
      if (postfix === 'Boolean') {
        newObj[newP] = (v === 'true');
      }
    }
    arr.push(newObj);
  }
  return arr as T[];
}


// export { };

// declare global {

//   interface String {
//     toEvalGetObject(): Object;
//   }

//   interface Array<T> {
//     toConvertType(): T[];
//   }

// }

// Array.prototype.toConvertType = function <T>() {
//   const arr: T[] = [];

//   for (const obj of this) {
//     const newObj = {};
//     for (const p in obj) {
//       const pArr = p.split(':');
//       const newP = pArr[0];
//       const v = obj[p].toString();

//       if (pArr.length === 1) {
//         newObj[newP] = v;
//         continue;
//       }

//       const postfix = pArr[1];
//       if (postfix === 'Number') {
//         newObj[newP] = parseFloat(v);
//       }
//       if (postfix === 'Date') {
//         newObj[newP] = new Date(v);
//       }
//       if (postfix === 'Boolean') {
//         newObj[newP] = (v === 'true');
//       }
//     }
//     arr.push(newObj as T);
//   }
//   return arr;
// };

// String.prototype.toEvalGetObject = function () {
//   // tslint:disable-next-line:no-eval
//   return eval(`(${this})`);
// };
