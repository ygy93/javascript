function showDailyDate(kobis) {
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
        <td class="movieName" id="${movie.movieCd}">${movie.movieNm}</td> 
        <td>${movie.openDt}</td> 
        <td>${movie.audiAcc}명</td> 
        <td>${movie.salesAcc}원</td>
      </tr>`
    ).join("\n")}
    </table>
  `
  
  document.querySelector('#kobisContent').innerHTML = movieList // 동적생성을 한 이후 이벤트를 줘야함
  
  /* 영화제목 포함 td 를 클릭하면 영화코드 alert 출력 */
  // for 문 이용하여 요소 반환 후 이벤트 적용
  const mlist = document.querySelectorAll('.movieName')
  //alert(mlist.length)
  for(let i = 0; i < mlist.length; i ++){
    const item = mlist.item(i);
    item.addEventListener('click', e => {
      // alert(item.getAttribute('id'));
      // 상세정보 가지고 있는 API 를 호출
      exkobisContent(item.getAttribute('id'))
    })
  }
}


/* kobis API 를 연동하여 영화상세 정보 출력 */
function exkobisContent(movieCd) {
  fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`)
  .then((response) => response.json())
  .then(showMovieContent)
}

function showMovieContent(mContent) {
  //alert(JSON.stringify(mContent))
  console.log(mContent);
  alert(mContent.movieInfoResult.movieInfo.movieNm)
}


/* kobis API 연동하여 DHTML 생성 */
function exKobis(sdate) {

  // 콜백함수(fetch)를 통해 가져온 json 객체데이터들은 해당 함수 안에서만 사용가능
  fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${sdate}`)
    .then((response) => response.json())
    .then(kobis => { // 앞서 받은 결과 데이터를 받아옴
      showDailyDate(kobis);
    })
    .catch(() => {
      console.log('fetch 실패!!');
    })
    // catch
    // finally
}

// DOM 객체 생성 후 exKobis 함수
document.addEventListener("DOMContentLoaded", () => {

  exKobis('20230907')

  document.querySelector('#search').addEventListener('click', e => {

    let searchInput = document.querySelector("#searchData").value
  
    exKobis(searchInput)
  
  })

})

