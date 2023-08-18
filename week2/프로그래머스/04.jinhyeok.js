const n= 36;
function solution(n) {
    var answer = 0;
    let measure_arr = [];
    const sqrt = Math.sqrt(n);
    for (i=0; i <= sqrt; i++) {
        let share;
        if (n % i ===0) {
            share = n / i;
            measure_arr.push(share)
            measure_arr.push(i)
        }
    }
    measure_arr.forEach((a) =>{
                        answer+= a
                        })
    return answer;
}