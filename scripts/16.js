const show = () => {
    event.preventDefault();

    //랜덤 수 생성
    let n = Math.floor(Math.random() * 6) + 1;
    
    let user;
    const radios = document.querySelectorAll('input[type=radio]');
    for (let item of radios) {
        console.log(item);
        if (item.checked) {
            user = item.value;
            break;
        }
    }

    document.querySelector(".h2Class").innerHTML = `<img src="./images/${n}.png">`;

    if (n == user) {
        document.querySelector('article h1').textContent = "축하합니다";
    } else {
        document.querySelector('article h1').textContent = "";
    }
}