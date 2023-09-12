function getHTML() {
  // 1초 후에 HTML 문자를 리턴하는 프로미스 생성
  return new Promise(resolve => {

    setTimeout(() => {
      resolve('HTML')
    }, 500)

  })
}

function getCSS() {
  return new Promise(resolve => {

    setTimeout(() => {
      resolve('CSS')
    }, 500)

  })
}

function getJS() {
  return new Promise(resolve => {

    setTimeout(() => {
      resolve('JS')
    }, 500)

  })
}

async function getResult() { // 비동기일 때 async 를 선언하면 한번에 해결
  const html = await getHTML()
  const css = await getCSS()
  const js = await getJS()

  return [html, css, js];
}

getResult().then((result) => { console.log(result); })


/* 
getHTML()
  .then((html) => {
    getCSS()
      .then((css) => {
        getJS()
          .then((js) => { console.log([html, css, js]) })
      })
  }) 
*/

/* 
getHTML().then((html) => {console.log(html);})
getCSS().then((css) => {console.log(css);})
getJS().then((js) => {console.log(js);}) 
*/