/* let x;

x = 5;

if (x > 10 && x < 20) {
  console.log(x);
} */

/* let a;

 for (a = 0 ; a < 10; a++) {
  if (a % 2 === 1) continue;
  console.log(a);
} */

/*  let b;  모르겠음(3번임)
for (b = 0; b < 10; b++) {
  if (b % 2 === 1) continue;
  b = b.toString();
  console.log(b);
}  */

/* let c;
for (c = 9; c > 0 && c < 10; c--) {
  if (c % 2 === 0) continue;
  console.log(c);
} */

/* let d;
d = 1;
while (d < 10) {
  d++;
  if (d % 2 === 1) continue;
  console.log(d);
} */

/* let e;
e = 10;

while (e > 0) {
  e--;
  if (e % 2 === 0) continue;
  console.log(e);
} */

/* let i;
let sum = 0;

for (i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum); */

let j;
let sum1 = 0;

/* for (j = 1; j < 20; j++) {
  if (j % 2 === 0) continue;
  {
    if (j % 3 === 0) continue;
  }
  sum1 += j;
}
console.log(sum1); */

let k;
let sum2 = 0;

for (k = 1; k < 20; k++) {
  if (k % 2 === 0 || k % 3 === 0) {
    sum2 += k;
  }
}
console.log(sum2);
