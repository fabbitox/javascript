document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const shake_btn = document.querySelector('#shake');

    // 초기화: 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    shake();// shuffle
    let enable = true;// true일 때 눌러짐.
    let cnt = 0;// 8개 눌릴 때까지 폭탄 안 나오면 마지막은 안 눌러도 폭탄. 하트 개수
    let order = [];// 누른 순서.

    // 폭탄 섞기 버튼
    shake_btn.addEventListener('click', () => {
        if (!enable) {
            shake();
            cnt = 0;
            enable = true;
            for (let cell of cells) {
                resetCell(cell);
            }
            document.querySelector('#comment').innerHTML = '';
        }        
    });

    // div 박스 제어
    for (let cell of cells) {// 클릭이벤트 달기
        // 박스 번호 넣기
        resetCell(cell);
        // 박스 클릭 이벤트 처리
        cell.addEventListener('click', () => {
            if (enable) {
                let n = parseInt(cell.textContent);
                console.log('n = ', n);
                if (isNaN(n)) {
                    return;
                }

                // 폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    // 하트
                    cell.innerHTML = '<img src="./images/heart.png">';
                    if (cnt == 7) {
                        enable = false;
                        document.querySelector('#comment').innerHTML = "축하합니다!";
                    }
                    cnt++;
                }
                else {
                    // 폭탄
                    cell.innerHTML = '<img src="./images/boom.png">';
                    enable = false;
                    document.querySelector('#comment').innerHTML = "폭탄을 터뜨렸습니다!";
                }
            }
        });
    }

    function shake() {
        console.log("shake");
        arr.sort(() => Math.random() - 0.5);
        console.log(arr);
    }

    function resetCell(cell) {
        cell.innerHTML = cell.getAttribute('id').replace('c', '');
    }
});