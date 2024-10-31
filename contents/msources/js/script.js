// 차시별 페이지 수
let totalPage = new Array();
totalPage[1] = "3";

// 숫자 두자리수로
function itostr(num) {
  if (num < 10) str = "0";
  else str = "";
  str = str + num;
  return str;
}

// 차시별제목
// -> 포트폴리오용으로 임시 지정

// 페이지
let currentPage = "01"; // 현재 페이지
let totalPaging = itostr(totalPage[Number(1)]); // 총 페이지
let fileName = ".mp4"; // 확장자

/**
 * 영상 경로 불러오기
 */
// 사이트 URl 가져오기
let siteUrl = "https://happy-hee.github.io/Portfolio__porting";

// 영상 경로
// -> 포트폴리오용으로 임시 지정
let movieUrl = `${siteUrl}/mp4/01_${currentPage}.mp4`;


/**
 * 플레이어 스크립트
 * jPlayer (https://jplayer.org/)
 */
$(function(){
  function jPlayerInit() {
    $('#myPlayerM').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          m4v: movieUrl,
        });
      },
      swfPath:'js',
      supplied:'m4v',
      size: {
        width:'100%',
        height:'auto'
      },
      autoPlay: false,
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true,
      remainingDuration: false,
      toggleDuration: false,
      volume: 0.5,
      defaultPlaybackRate: 1,
      loop: false,
    });
  }
  jPlayerInit();

  // 화면 클릭시 재생/정지
  function clickPlay(el) {
    $(el).on("click", function(){
      if($("#jp_container_1").is(".jp-state-playing")) {
        $(this).jPlayer("pause");
      } else {
        $(this).jPlayer("play");
      }
    });
  }
  // 화면 터치시 재생/정지
  function touchPlay(el) {
    $(el).on("click", function(){
      if($("#jp_container_1").is(".jp-state-playing")) {
        $(this).jPlayer("pause");
      } else {
        $(this).jPlayer("play");
      }
    });
  }
  clickPlay(".video_play_button");
  touchPlay(".video_play_button");
  clickPlay("#myPlayerM");
  touchPlay("#myPlayerM");

  // (접근성) 자동으로 추가되는 img 제거
  $("#jp_poster_0").remove();

  /**
   * 학습창 헤더
   */
  // -> 포트폴리오용으로 임시 지정
  function setStudyTitle(str) {
    $(".studyTitle").text(`${str} 페이지헤더 영역입니다.`);
  }
  setStudyTitle("01");


  /**
   * 페이징
   */
  // 페이지 표시
  $(".pageCurrent").text(currentPage);
  $(".pageTotal").text(totalPaging);

  // 페이지 이동시 비디오 교체
  function changeVideo(){
    let src = `${siteUrl}/mp4/01_${currentPage}.mp4`;
    $("#myPlayerM").jPlayer("pause");
    $("#jp_container_1").removeClass("jp-state-playing");
    $("#jp_video_0").attr("src", src);
  }

  // 페이지 이동
  $(".pagePrev").on("click", function(){
    if(currentPage === "01") {
      alert("첫 페이지 입니다.");
    } else {
      currentPage = itostr(Number(currentPage) - 1);
      changeVideo();
    }
    $(".pageCurrent").text(currentPage);
    setStudyTitle(currentPage);
  });

  $(".pageNext").on("click", function(){
    if(currentPage === totalPaging) {
      alert("마지막 페이지 입니다.");
    } else {
      currentPage = itostr(Number(currentPage) + 1);
      changeVideo();
    }
    $(".pageCurrent").text(currentPage);
    setStudyTitle(currentPage);
  });
});
