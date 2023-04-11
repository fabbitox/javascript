document.addEventListener("DOMContentLoaded", () => {
    const bts = document.querySelectorAll("button");

    /* for (let i = 0; i < bts.length; i++) {
        console.log(bts[i].textContent);
    } */

    /* bts.forEach((item) => {
        console.log(item.textContent);
    }); */

    /* bts.forEach((item, idx) => {
        console.log(idx, item.textContent);
    }); */

    /* for (let idx in bts) {
        console.log(bts[idx].textContent);
    } */

    /* for (let item of bts) {
        console.log(item.textContent);
    } */

    /* for (let [k, v] of bts.entries()) {
        console.log(k, v.textContent);
    } */

    let htmlText = "<ul>";
    for (let item of bts) {
        htmlText += `<li>${item.textContent}</li>`;
    }
    htmlText += "</ul>";
    document.querySelector("#h2id").innerHTML = htmlText;
});