const show = () => {
    event.preventDefault();

    //랜덤 수 생성
    let n = Math.floor(Math.random() * 6) + 1;
    
    const radios = document.querySelectorAll('input[type=radio]');
    // let user;
    // for (let item of radios) {
    //     console.log(item);
    //     if (item.checked) {
    //         user = item.value;
    //         break;
    //     }
    // }

    // if (n == user) {
    //     document.querySelector('article h1').textContent = "축하합니다";
    // } else {
    //     document.querySelector('article h1').textContent = "";
    // }

    let i;
    for (i = 0; i < n; i++) {
        console.log(radios[i]);
        if (radios[i].checked) {
            break;
        }
    }
    if (i + 1 == n) {
        document.querySelector('article h1').textContent = "축하합니다";
    } else {
        document.querySelector('article h1').textContent = "";
    }

    document.querySelector(".h2Class").innerHTML = `<img src="./images/${n}.png">`;
}