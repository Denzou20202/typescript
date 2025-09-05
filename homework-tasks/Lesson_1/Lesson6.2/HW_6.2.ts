let s1:string = 'hello world';
let s2:string = 'lorem ipsum';
let s3:string = 'javascript is cool';

const words:string[] = [s1, s2, s3]

for (const wordsKey of words) {
  console.log(wordsKey.toUpperCase())
}