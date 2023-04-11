/* function show() {
    //alert("안녕하세요");
    event.preventDefault();
    document.getElementById("h2id").innerHTML = "안녕하세요";
} */

const show = () => {
    event.preventDefault();
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n);
    //document.getElementById("h2id").innerHTML = '<img src="./images/' + n + '.png">';
    document.getElementById("h2id").innerHTML = `<img src="./images/${n}.png">`;
};

/* document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("h2id").innerHTML = "안녕하세요";
}); */

document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("h2id").innerHTML = "시작입니다";
    //document.querySelector("#h2id").innerHTML = "아이디 선택자";
    //document.querySelector(".h2class").innerHTML = "클래스 선택자";
    // create
    /* const button = document.createElement('button');
    button.textContent = "확인";
    document.getElementById("hdiv").append(button); */
});
