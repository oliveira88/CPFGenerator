const geradorDeCpf = () => {
    let randomCPF = Math.floor(Math.random() * 1e9);
    while(numbersEquals(randomCPF)){
        randomCPF = Math.floor(Math.random() * 1e9);
    }

    let arr = randomCPF.toString().split('');
    let sum = 0, decrement = 10;
    numbersEquals

    arr.map(x => (sum += x*decrement--));

    (sum % 11 >= 2) ? arr.push( 11 - (sum%11)) : arr.push(0);

    sum = 0;
    decrement = 11;

    arr.map(x => (sum += x*decrement--));
    (sum % 11 >= 2) ? arr.push( 11 - (sum%11)) : arr.push(0);

    const cpf =  arr.join('');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '\$1.\$2.\$3-\$4');
}

const numbersEquals = (cpf) => {
    let arr = cpf.toString().split('');
    arr.forEach((x,i)=>{
        if(cpf.toString() === Array(cpf.toString().length +1).join(String(i))){
            return true;
        }
    })
    return false;
}
