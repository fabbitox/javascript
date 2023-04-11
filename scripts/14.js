const show = () => {
    event.preventDefault();
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n);
    document.querySelector(".h2class>img").setAttribute("src", `./images/${n}.png`);
    //document.getElementById("h2id").innerHTML = `<img src="./images/${n}.png">`;
};