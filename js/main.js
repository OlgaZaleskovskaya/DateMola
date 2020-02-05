const modal = document.querySelector(".modal");
const fiboBtn = document.getElementById('fibo');
const uniqBtn = document.getElementById('uniq');
const permuteBtn = document.getElementById('permute');
const closeBtn = document.querySelector(".close");


fiboBtn.onclick = function () {
    openModal();
    fiboContent();
}

uniqBtn.onclick = function () {
    openModal();
    uniqContent();
}

permuteBtn.onclick = function () {
    openModal();
    permuteContent();
}

closeBtn.onclick = function () {
    modal.style.display = "none"
}

function openModal() {
    modal.style.display = "block"
}




