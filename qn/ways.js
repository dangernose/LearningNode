
// console.log(count_ways(100)); // Pass Here any number between 4 and 10,000. Replace 22


let m = 99;
// for(m = 9; m<=25;m++){
    console.log(`Ways for ${m} is ${count_ways(m)}`);
// }

function count_ways(num){
    let result =0;
    let i;
    let array = [];
    let sums = [];
    // var array[5];
    if(num<4){
        return null;
    }else if(num>10000){
        return null;
    }else{
        let c = 0;
        for(i = 2; i<num;i++){
            if(prime(i)){
                array[c] = i;
                c++;
            }
        }
        let csum = 0;
        for(i = 0; i<array.length;i++){
        //     let sums = [];
        //     let j = 1;
            for(j = i; j<array.length;j++){
                let check;
                sums[csum] = array[i] + array[j];
                // console.log[sums[csum]]
                if(sums[csum]==num){
                    result ++;
                    check = true;
                    console.log(`${array[i]} + ${array[j]} = ${sums[csum]} ${check}`);
                }else{
                    check = false;
                }
                csum++;
            }
        }
        return result;
    }
}

function prime(x){
    let i;
    c = 0;
    for(i=2; i<x; i++)
    {
        if(x%i==0)
        {
            c++;
            break;
        }
    }
    if(c==0)
    return true;
    else
    return false;
}