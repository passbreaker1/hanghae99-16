function solution(n) {
    const array = Array.from(String(n))
    const des = array.sort((a,b)=>(b-a));
    return parseInt(des.join(''));
}