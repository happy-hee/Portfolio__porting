/**
 * 학습창 열기
 */
function openStudy() {
  // 팝업 크기
  let popupW = "1280"
  let popupH = "724"
  // 화면 중앙 정렬
  let left = Math.ceil((window.screen.width - popupW)/2);
  let top = Math.ceil((window.screen.height - popupH)/2);
  // 팝업 띄우기
  let popup = window.open("./contents/01/001.html", "학습창", `width=${popupW}px, height=${popupH}px, left=${left}, top=${top}`);
}

// (접근성) 과정이미지 엔터시 학습창 열기
const infoLeft = document.querySelector(".info_left");
infoLeft.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    openStudy();
  }
});