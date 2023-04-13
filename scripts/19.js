document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn");
    const delbtns = document.querySelectorAll(".delbtn");
    const chngbtns = document.querySelectorAll(".chngbtn");
    const inputx = document.querySelector("#inputx");
    const rstbtn = document.querySelector("#rstbtn");

    let arr = [];
    rstbtn.addEventListener("click", () => {
        arr = [];
    });

    for (let btn of btns) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(btn.textContent);
            switch (btn.textContent) {
                case "딸기":
                    arr.push('🍓');
                    break;
                case "오렌지":
                    arr.push('🍊');
                    break;
                case "사과":
                    arr.push('🍏');
                    break;
                case "바나나":
                    arr.push('🍌');
                    break;
            }
            console.log(arr);
            inputx.value = arr.join('');
        });
    }
    for (let delbtn of delbtns) {
        delbtn.addEventListener("click", () => {
            e.preventDefault();
            switch (btn.textContent) {
                case "딸기":
                    break;
                case "오렌지":
                    break;
                case "사과":
                    break;
                case "바나나":
                    break;
            }
        });
    }
    for (let chngbtn of chngbtns) {
        chngbtn.addEventListener("click", () => {
            e.preventDefault();
        });
    }
});