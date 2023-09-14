"use strict";

const toggle = document.getElementById("toggle");
const nav = document.querySelector(".nav");
const option = document.querySelector(".options");

const dropdown = document.querySelector("#dropdown");
const blog = document.querySelector("#blog");
const product3 = document.querySelector("#product3");

const dropdownList = document.querySelector("#dropdown-list");
const blogList = document.querySelector("#blog-list");
const product3List = document.querySelector("#product3-list");

toggle.onclick = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    option.style.display = "none";
  } else {
    nav.classList.add("active");
    option.style.display = "block";
  }
};

window.addEventListener("resize", () => {
  option.style.display = "block";
});

dropdown.onclick = () => {
  if (dropdownList.style.display == "block") {
    dropdownList.style.display = "none";
  } else {
    dropdownList.style.display = "block";
  }
};
blog.onclick = () => {
  if (blogList.style.display == "block") {
    blogList.style.display = "none";
  } else {
    blogList.style.display = "block";
  }
};
product3.onclick = () => {
  if (product3List.style.display == "block") {
    product3List.style.display = "none";
  } else {
    product3List.style.display = "block";
  }
};
