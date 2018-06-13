import {Complex} from './complex.class.js';

const c1 = new Complex(5, 6);
console.log(c1.real); // 5
console.log(c1.imaginary); // 6i
console.log(c1.toString()); // 5 + 6i

const c2 = new Complex(8);
console.log(c2.toString()); // 8

const c3 = new Complex(0, 3);
console.log(c3.toString()); // 3i

c1.soma(c2);
console.log(c1.toString()); // 13 + 6i

c1.subtrai(c3);
console.log(c1.toString()); // 13 + 3i

c1.subtrai(c3);
c1.subtrai(c3);
console.log(c1.toString()); // 13 - 3i
