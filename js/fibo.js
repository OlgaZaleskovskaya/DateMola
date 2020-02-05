function fiboContent() {
    const elem = document.getElementById('fiboContent');
    const content = elem.innerHTML;
    elem.innerHTML = '';
    document.getElementById('content').innerHTML = content;
    const fiboSubmitBtn = document.getElementById('fiboSubmit');
    fiboSubmitBtn.onclick = fiboCalc;
}

function fiboCalc() {
    const number = document.getElementById('fiboNumber').value * 1;
    const res = calculateFiboNumber(number)
    showFiboResult(res);
}

function calculateFiboNumber(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    let prev = 0;
    let next = 1;
    let res = 0;
    for (let i = 1; i < num; i++) {
        res = prev + next;
        prev = next;
        next = res;
    }
    return res;
};

function showFiboResult(n) {
    const el = document.getElementById("fiboResult");
    el.innerText = n;
}







