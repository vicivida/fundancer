// //step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// // let timeRunning = 3000;
// // let timeAutoNext = 7000;

// nextDom.onclick = function () {
// 	showSlider('next');
// }

// prevDom.onclick = function () {
// 	showSlider('prev');
// }
// // let runTimeOut;
// // let runNextAuto = setTimeout(() => {
// // 	next.click();
// // }, timeAutoNext)

// function showSlider(type) {
// 	let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
// 	let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

// 	if (type === 'next') {
// 		SliderDom.appendChild(SliderItemsDom[0]);
// 		thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// 		carouselDom.classList.add('next');
// 	} else {
// 		SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
// 		thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
// 		carouselDom.classList.add('prev');
// 	}
// 	// clearTimeout(runTimeOut);
// 	// runTimeOut = setTimeout(() => {
// 	//     carouselDom.classList.remove('next');
// 	//     carouselDom.classList.remove('prev');
// 	// }, timeRunning);

// 	// clearTimeout(runNextAuto);
// 	// runNextAuto = setTimeout(() => {
// 	//     next.click();
// 	// }, timeAutoNext)
// }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
