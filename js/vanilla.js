"use strict"
const modal = document.getElementById("modal")
const contentCell = document.querySelector(".content-cell")

contentCell.addEventListener("click",function(){
  modal.classList.add("open")
})