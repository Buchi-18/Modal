"use strict";
const videos = [
  {
    dataId: 0,
    videoUrl: "./video/video_b_640*360.mp4",
    imgUrl: "./img/thumbnail-b.jpg",
    alt: "サムネイル00",
    title: "サムネイル00",
  },
  {
    dataId: 1,
    videoUrl: "./video/video_g_640*360.mp4",
    imgUrl: "./img/thumbnail-g.jpg",
    alt: "サムネイル01",
    title: "サムネイル01",
  },
];

const modalBg = document.querySelector(".modal-bg");
const contentsWrap = document.getElementById("contentsWrap");
const modal = document.getElementById("modal");
const videoLink = document.getElementById("videoLink");
const imgLink = document.getElementById("imgLink");
const closeBtn = document.getElementById("closeBtn");

// 配列videosのデータの数、サムネイル（li.content-cell）を追加
videos.forEach(function (video) {
  const { dataId, imgUrl, alt, title } = video;
  contentsWrap.innerHTML += `
  <li class="content-cell" data-id=${dataId}>
          <div>
            <img src=${imgUrl} alt=${alt} title=${title}/>
          </div>
        </li>
  `;
});

// クリックしたサムネイルのdataIdから、表示するデータを取得しモーダルを表示
document.querySelectorAll(".content-cell").forEach(function (cell) {
  cell.addEventListener("click", function () {
    const id = cell.dataset.id;
    modalIsOpen(id);
  });
});
// クローズボタンクリックでモーダルを閉じる
document.body.addEventListener("click", (e) => {
  const isClick = e.target.className;
  if (modal.className === isClick || closeBtn.className === isClick) {
    modalIsClose();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalIsClose();
  }
});

//モーダルオープンメソッド
function modalIsOpen(id) {
  modal.classList.add("open");
  modalBg.classList.add("open");
  modal.classList.remove("closed");
  modalBg.classList.remove("closed");
  const { videoUrl, imgUrl, alt, title } = videos[id];
  videoLink.setAttribute("href", videoUrl);
  imgLink.setAttribute("src", imgUrl);
  imgLink.setAttribute("alt", alt);
  imgLink.setAttribute("alt", title);
}
//モーダルクローズメソッド
function modalIsClose() {
  modal.classList.add("closed");
  modalBg.classList.add("closed");
  setTimeout(function () {
    modal.classList.remove("open");
    modalBg.classList.remove("open");
  }, 200);
}
