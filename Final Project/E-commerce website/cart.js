// This will add up the subtotal of items in the cart.
export function add(a , b){
    return a + b;
}
export function tax(a){
    return a * 1.06;
}

// To call this function, use: import {add, tax} from './cart.js';
// To use the function, do this: const subtotal = add(_, _);
// console.log('Subtotal: ${subtotal}');