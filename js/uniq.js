let initialArray = [];

function uniqContent() {
    const elem = document.getElementById('uniqContent');
    const content = elem.innerHTML;
    elem.innerHTML = '';
    document.getElementById('content').innerHTML = content;
    const onNumberSubmitBtn = document.getElementById('onNumberSubmit');
    onNumberSubmitBtn.onclick = addNumber;
    const onGetUniqNumbersBtn = document.getElementById('onGetUniqNumbers');
    onGetUniqNumbersBtn.onclick = getUniqNumbers;
};

function addNumber() {
    const element = document.getElementById("numberSubmit")
    let input = element.value * 1;
    initialArray.push(input);
    showInitialArray(initialArray);
    element.value = null;
};

function showInitialArray(array) {
    let arr = document.getElementById('initialArray');
    arr.innerText = array.join(', ');
}

function getUniqNumbers() {
    const set = new Set(initialArray); // complexity O(N)
    showUniqResult(set);
}
function showUniqResult(set) {
    let resultArray = [...set];
    const res = document.getElementById('uniqResult');
    res.innerText = resultArray.join(', ');
    return resultArray;
}