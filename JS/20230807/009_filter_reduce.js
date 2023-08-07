// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return true
})
result

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return false
})
result

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return v > 5
})
result

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return v % 2 !== 0
})
result

// reduce
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0) // 암기코드
[10, 20, 30, 40, 50].reduce((a, c) => a + c) // X
[].reduce((a, c) => a + c) // X
[10, 20, 30, 40, 50].reduce((a, c) => {
    console.log(a, c)
    return a + c
})

// 파라미터 이름은 자유롭게 지정할 수 있습니다.
// forEach, map, filter, reduce 등의 메서드 모두 마찬가지 입니다.
[10, 20, 30, 40, 50].reduce((ho, jun) => {
    console.log(ho, jun)
    return ho + jun
})