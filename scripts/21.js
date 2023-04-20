document.addEventListener('DOMContentLoaded', () => {
    // 어제 날짜
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230419';
    fetch(url).then((resp) =>
        resp.json()
    ).then((data) => {
        let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
        let boxtag = '';
        for (let box of boxlist) {
            boxtag += '<details id=\'d';
            boxtag += `${box.rank}'>`;
            boxtag += `<summary>${box.movieNm}</summary>`;
            boxtag += '<ul>'
            boxtag += `<li>매출액: &#8361; ${parseInt(box.salesAmt).toLocaleString()}</li><li>증감: ${box.rankInten}</li>`;
            boxtag += '</ul>'
            boxtag += '</details>';
            console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
        }
        document.querySelector('#boxdiv').innerHTML = boxtag;
    }).catch((err) => {
        console.log(err);
    });

    const boxdate = document.querySelector('#boxdate');
    boxdate.addEventListener('change', () => {
        url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url += boxdate.value.replaceAll('-', '');
        fetch(url).then((resp) =>
            resp.json()
        ).then((data) => {
            let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
            let boxtag = '';
            for (let box of boxlist) {
                boxtag += '<details id=\'d';
                boxtag += `${box.rank}'>`;
                boxtag += `<summary>${box.movieNm}</summary>`;
                boxtag += '<ul>'
                boxtag += `<li>순위: ${box.rank}</li><li>매출액: &#8361;${parseInt(box.salesAmt).toLocaleString()}</li><li>증감: ${box.rankInten}</li>`;
                boxtag += '</ul>'
                boxtag += '</details>';
                console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
            }
            document.querySelector('#boxdiv').innerHTML = boxtag;
        }).catch((err) => {
            console.log(err);
        });
    });
})
