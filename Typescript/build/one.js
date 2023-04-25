console.log("in one.ts");
function add(x, y) {
    console.log("in one.ts add");
    return x + y;
}
export function multiply(x, y) {
    console.log("in one.ts multiply");
    return x * y;
}
//named export
export const version = "1.0";
//default export
export default add;
// export default {
//     add, version, multiply
// }
