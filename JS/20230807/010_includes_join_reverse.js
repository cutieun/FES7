// includes
const arr1 = ['hello', 'world', 'jieun']
arr1.includes('world')

const arr1 = ['hello', 'world', 'jieun']
arr1.includes('leejieun')

const arr1 = ['hello', 'world', 'jieun']
arr1.includes('eun')

// join(***)
let arr = ['hello', 'world', 'jieun']
arr.join('!') 

let arr = ['hello', 'world', 'jieun']
arr.join(' ')

let arr = ['010', '1234', '5678']
arr.join('-')

let arr = ['안녕하세요.', '제 이름은 이지은입니다.', '저는 인천에 살아요.']
arr.join('\n')
console.log(arr.join('\n'))

let arr = ['안녕하세요.', '제 이름은 이지은입니다.', '저는 인천에 살아요.']
arr.join('<br>')
console.log(arr.join('<br>')) // innerHTML로 하면 <br>이 개행됩니다.
document.write(arr.join('<br>'))

// reverse
[10, 20, 30].reverse() // [30, 20, 10]