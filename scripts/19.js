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
            emojiArray.push(getEmoji(btn.textContent));
            inputx.value = emojiArray.join('');
        });
    }
    for (let delbtn of delbtns) {
        delbtn.addEventListener("click", (e) => {
            e.preventDefault();
            const btnText = delbtn.textContent;
            const fruit = btnText.split(' ')[0];
            emojiArray = emojiArray.filter((item) => item != getEmoji(fruit));
            inputx.value = emojiArray.join('');
        });
    }
    for (let chngbtn of chngbtns) {
        chngbtn.addEventListener("click", (e) => {
            e.preventDefault();
            const btnText = chngbtn.textContent;
            const fruit = btnText.split(' ')[0];
            emojiArray = emojiArray.map((item) => item == getEmoji(fruit) ? getChngEmoji(fruit) : item);
            inputx.value = emojiArray.join('');
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

const chngItem = (itemName, arr) => {
    let result = [];
    for (let item of arr) {
        if (item != getEmoji(itemName)) {
            result.push(item);
        } else {
            result.push(getChngEmoji(itemName));
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

const getChngEmoji = (itemName) => {
    switch (itemName) {
        case "딸기":
            return '🍈';
        case "오렌지":
            return '🥒';
        case "사과":
            return '🍎';
        case "바나나":
            return '🥑';
    }
}