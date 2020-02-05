function permuteContent() {
    let elem = document.getElementById('permuteContent');
    const content = elem.innerHTML;
    elem.innerHTML = '';
    document.getElementById('content').innerHTML = content;
    const onStringSubmitBtn = document.getElementById('onStringSubmit');
    onStringSubmitBtn.onclick = submitString;

};

function submitString() {
    const elem = document.getElementById('initialString');
    const result = permute(elem.value);
    showPermuteResult(result);
}

function permute(str) {
    if (str.length == 1) {
        return [...str];
    }
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let rest = createRest(str, i);
        let result = concat(str[i], permute(rest));
        arr = arr.concat(result);
    }
    return arr;
}

function createRest(str, i) {
    return str.slice(0, i) + str.slice(i + 1, str.length + 1);
}

function concat(letter, arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = letter + arr[i];
    }
    return arr;
}

function showPermuteResult(arr){
    let res = document.getElementById('permuteResult');
    res.innerText = arr.join(', ');
}