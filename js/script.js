/**
 * 학습창 열기
 */
function openStudy() {
  let popup = window.open("./contents/01/001.html", "학습창", "width=1300px,height=720px");
}

// (접근성) 과정이미지 엔터시 학습창 열기
const infoLeft = document.querySelector(".info_left");
infoLeft.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    openStudy();
  }
})
