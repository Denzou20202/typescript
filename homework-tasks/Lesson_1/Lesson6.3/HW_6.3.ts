let s1:string = 'HELLO WORLD';
let s2:string = 'LOREM IPSUM';
let s3:string = 'JAVASCRIPT IS COOL';

const words:string[] = [s1, s2, s3]

for (const wordsKey of words) {
  console.log(wordsKey.toLowerCase())
}