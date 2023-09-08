function exKobis () {

  // 콜백함수(fetch)를 통해 가져온 json 객체데이터들은 해당 함수 안에서만 사용가능
  fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101')
  .then( (response) => response.json())
  .then( kobis => { // 앞서 받은 결과 데이터를 받아옴

    // 일별 박스오피스 출력 boxofficeType - 순위 rank, 영화제목 movieNm, 개봉일 openDt, 누적관객수 audiAcc, 누적매출액 salesAcc
    let showKobis = kobis.boxOfficeResult;
    let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList;

    const movieList = `
      <ul>
        <li>박스오피스 타입 - ${showKobis.boxofficeType}</li>
        <li>일자 - ${showKobis.showRange}</li>
      </ul>
      <table border=1>
        <tr>
          <td>순위</td>
          <td>제목</td>
          <td>개봉일</td>
          <td>누적관객수</td>
          <td>누적매출액</td>
        </tr>
      ${showKobisRankList.map(movie => 
        `<tr>
          <td>${movie.rank}등</td> 
          <td>${movie.movieNm}</td> 
          <td>${movie.openDt}</td> 
          <td>${movie.audiAcc}명</td> 
          <td>${movie.salesAcc}원</td>
        </tr>`
      ).join("\n")}
      </table>
    `
    document.querySelector('#kobisContent').innerHTML = movieList

  })

}

function click () {
  document.querySelector("#search").addEventListener('click', e => {
    exKobis()
  
    let searchInput = document.querySelector("#searchData").length
  
    if(searchInput === movie.openDt);
  })
}


// DOM 객체 생성 후 exKobis 함수
document.addEventListener("DOMContentLoaded", exKobis)

