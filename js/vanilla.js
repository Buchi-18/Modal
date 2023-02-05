"use strict";
const videos = [
  {
    dataId: 0,
    date: "2023.02.05",
    videoUrl: "./video/video_bronze_640×320.mp4",
    imgUrl: "./img/thumbnail-b.jpg",
    alt: "テスト動画-001",
    title: "テスト動画-001",
  },
  {
    dataId: 1,
    date: "2023.01.24",
    videoUrl: "./video/video_green_640×320.mp4",
    imgUrl: "./img/thumbnail-g.jpg",
    alt: "テスト動画-002",
    title: "テスト動画-002",
  },
];

const modalBg = document.querySelector(".modal-bg");
const contentsWrap = document.getElementById("contentsWrap");
const modal = document.getElementById("modalWindow");
const videoLink = document.getElementById("videoLink");
const imgLink = document.getElementById("imgLink");
const closeBtn = document.getElementById("closeBtn");

// 配列videosのデータの数、サムネイル（li.content-cell）を追加
videos.forEach(function (video) {
  const { dataId, imgUrl, alt, title } = video;
  contentsWrap.innerHTML += `
  <li class="content-cell" data-id=${dataId}>
  <p class="thumbnail-title">${title}</p>
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
  const { date, videoUrl, imgUrl, alt, title } = videos[id];
  document.getElementById("videoWrap").innerHTML =
  ` <a id="videoLink" href="${videoUrl}" target="_blank" rel="noopener">
  <p class="play-wrap">
    <i class="fa-solid fa-circle-play"></i>
    <img id="imgLink" src="${imgUrl}" alt="${alt}" title="${title}" />
  </p>
</a>
<div class="content-description">
  <p class="content-date">${date}</p>
  <p class="content-title">${title}</p>`
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