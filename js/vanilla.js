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

const contentsWrap = document.getElementById("contentsWrap");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const videoLink = document.getElementById("videoLink");
const imgLink = document.getElementById("imgLink");

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
  cell.addEventListener("click", function (e) {
    modal.classList.add("open");
    const id = cell.dataset.id;
    const { videoUrl, imgUrl, alt, title } = videos[id];
    videoLink.setAttribute("href", videoUrl);
    imgLink.setAttribute("src", imgUrl);
    imgLink.setAttribute("alt", alt);
    imgLink.setAttribute("alt", title);
  });
});

// クローズボタンクリックでモーダルを閉じる
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open");
});
