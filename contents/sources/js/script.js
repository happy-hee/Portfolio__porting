
let topTitle = "1차시 학습"
document.title = topTitle;

let fileLength = "3";
let dirLength = "2";
let fileName = ".html"; // 확장자
let prePageStr = "0";

// .html 을 기준으로 URL 가져오기
let contentUrl = document.URL.split(fileName)[0];
// url을 통해 차시 가져오기
let chapter = contentUrl.slice(-6, -4);
// url을 통해 페이지 가져오기
let page = contentUrl.slice(-2);

console.log(`${chapter}차시 / ${page}페이지`);

function itostr(num) {
  if (num < 10) str = "0";
  else str = "";
  str = str + num;
  return str;
}
  

// 차시별 페이지 수
let totalPage = new Array();
totalPage[1] = "3";
totalPage[2] = "3";
totalPage[3] = "3";


/**
 * 영상 경로 불러오기
 */

// 사이트 URl 가져오기
// let siteUrl = "https://unearthly-cackle-xpvr6xj9rrv2vppv-5500.app.github.dev" // 테스트
let siteUrl = "https://happy-hee.github.io/Portfolio__porting";

// 영상 경로
let movieUrl = `${siteUrl}/mp4/${chapter}_${page}.mp4`; 


/**
 * 플레이어 스크립트
 * jPlayer (https://jplayer.org/)
 */
$(function(){
  $('#myPlayer').jPlayer({
    ready: function () {
      $(this).jPlayer('setMedia', {
        m4v: movieUrl,
      });

      // * 첫페이지 자동재생
      if(!navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
        $(this).jPlayer('play');
      }
      $(this).jPlayer('play');	
    },
    swfPath:'js',
    supplied:'m4v',
    size: {
      width:'100%',
      height:'auto'
    },
    autoPlay: true,
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: false,
    toggleDuration: false,
    volume: 0.5,
    defaultPlaybackRate: 1,
    minPlaybackRate: 0.5,
    maxPlaybackRate: 2,
    loop: false,
    keyBindings: {
      play: { // (접근성) 스페이스바 입력시 재생/정지
        key: 32,
        fn: function(f) {
          if(f.status.paused) {
            f.play();
          } else {
            f.pause();
          }
        }
      },
    },
    ended : function(){
      endClick();
    }
  });

  // 재생 속도 변경
  $(".speed").each(function(){
    $(this).on("click", function(){ 
      if(!$(this).hasClass("on")) {
        $(".speed").removeClass("on");
        $(this).addClass("on");
        let dataSpeedNum = $(this).attr("data-speed");
        $("#myPlayer").jPlayer('option', 'playbackRate', dataSpeedNum);
      }
    })
  });

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
  clickPlay("#myPlayer");
  touchPlay("#myPlayer");

  // (접근성) 자동으로 추가되는 img 제거
  $("#jp_poster_0").remove();


  /**
   * 페이징
   */
  // 페이지 표시
  let currentPage = page; // 현재 페이지
  let totalPaging = itostr(totalPage[Number(chapter)]); // 총 페이지
  $(".pageCurrent").text(currentPage);
  $(".pageTotal").text(totalPaging);

  // 페이지 이동
  $(".pagePrev").on("click", function(){
    if(page === "01") {
      alert("첫 페이지 입니다.");
    } else {
      location.href = `${prePageStr + itostr(Number(page)-1)}${fileName}`;
    }
  });

  $(".pageNext").on("click", function(){
    if(page === totalPaging) {
      alert("마지막 페이지 입니다.");
    } else {
      location.href = `${prePageStr + itostr(Number(page)+1)}${fileName}`;
    }
  });

  // 마지막 페이지 이미지 삽입
  function endClick() {
    if(page !== totalPaging) {
      // 다음 페이지 표시
      $(".nextClick").fadeIn();
      $(".next_button").text("NEXT PAGE");
      // 다음 페이지 이동
      $(".nextClick").on("click", function(){
        location.href = `${prePageStr + itostr(Number(page)+1)}${fileName}`;
      });
    } else {
      // 마지막 페이지 표시
      $(".nextClick").fadeIn();
      $(".next_button").text("LAST PAGE");
      $(".nextClick").on("click", function(){
        alert("마지막 페이지 입니다.");
      });
    }
  }
  $(".repeat_btn").on("click", function() {
    console.log("클릭");
    $("#myPlayer").jPlayer("play", 0);
    return false;
   });
});
