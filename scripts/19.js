document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn");
    const delbtns = document.querySelectorAll(".delbtn");
    const chngbtns = document.querySelectorAll(".chngbtn");
    const inputx = document.querySelector("#inputx");
    const rstbtn = document.querySelector("#rstbtn");

    let emojiArray = [];
    rstbtn.addEventListener("click", () => {
        emojiArray = [];
    });

    for (let btn of btns) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(btn.textContent);
            emojiArray.push(getEmoji(btn.textContent));
            /* switch (btn.textContent) {
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
            } */
            console.log(emojiArray);
            inputx.value = emojiArray.join('');
        });
    }
    for (let delbtn of delbtns) {
        delbtn.addEventListener("click", (e) => {
            e.preventDefault();
            //const fruit = delbtn.textContent.replace(" 삭제", "");
            const btnText = delbtn.textContent;
            const fruit = btnText.substring(0, btnText.indexOf(' '));
            emojiArray = emojiArray.filter((item) => item != getEmoji(fruit));
            /* switch (fruit) {
                case "딸기":
                    arr = arr.filter((item) => item != '🍓');
                    break;
                case "오렌지":
                    arr = arr.filter((item) => item != '🍊');
                    break;
                case "사과":
                    arr = arr.filter((item) => item != '🍏');
                    break;
                case "바나나":
                    arr = arr.filter((item) => item != '🍌');
                    break;
            } */
            //arr = delItem(fruit, arr);
            inputx.value = emojiArray.join('');
        });
    }
    for (let chngbtn of chngbtns) {
        chngbtn.addEventListener("click", (e) => {
            e.preventDefault();
        });
    }
});

const delItem = (itemName, arr) => {
    let result = [];
    for (let item of arr) {
        if (item != getEmoji(itemName)) {
            result.push(item);
        }
    }
    return result;
}

const getEmoji = (itemName) => {
    switch (itemName) {
        case "딸기":
            return '🍓';
        case "오렌지":
            return '🍊';
        case "사과":
            return '🍏';
        case "바나나":
            return '🍌';
    }
}