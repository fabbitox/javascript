const palindrome = (inputx, resultx) => {
    const str = inputx.value;
    console.log("palindrome check: " + str);

    const strlen = str.length;
    for (let i = 0; i < strlen; i++) {
        if (str[i] != str[strlen - 1 - i]) {
            resultx.value = "회문이 아닙니다"
            return;
        }
    }
    resultx.value = "회문입니다"
};

const numbersum = (inputx, resultx) => {
    const str = inputx.value;
    console.log("sums the numbers: " + str);

    let sum = 0;
    /* for (let ch of str) {
        //console.log(ch, isNaN(ch));
        if (!isNaN(ch)) {
            const number = parseInt(ch);
            sum += number;
        }
    } */
    let currsum = 0;
    const strlen = str.length;
    console.log("length", strlen);
    for (let i = 0; i < strlen; i++) {
        console.log("i", i);
        if (!isNaN(str[i])) {// 숫자
            const number = parseInt(str[i]);
            console.log("number", number);
            currsum += number;
            console.log("currsum", currsum);
            if (i + 1 < strlen) {
                if (!isNaN(str[i + 1])) {
                    currsum *= 10;
                    console.log("currsum", currsum);
                } else {
                    sum += currsum;
                    console.log("sum", sum);
                    currsum = 0;
                }
            } else {
                sum += currsum;
                console.log("sum", sum);
            }
        }
    }
    resultx.value = sum;
};

document.addEventListener("DOMContentLoaded", () => {
    const inputx = document.getElementById("inputx");
    const resultx = document.getElementById("resultx");

    const btnevents = [palindrome, numbersum];
    const btns = document.querySelectorAll(".btn");
    for (let [i, btn] of btns.entries()) {
        btn.addEventListener("click", (event) => {// onclick 아님!!
            event.preventDefault();
            btnevents[i](inputx, resultx);
        })
    }
});