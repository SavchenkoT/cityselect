let currentPage = 1;
let slideLeftPage = 1;
let pageButtonSizePx = 40;
let totalPages = 10;
let pagesPerSlide = 3;
let maxLeftmostPage = totalPages - pagesPerSlide;

function moveSlideToPage(leftmostPageNumber) {
	let slideElement = document.querySelector('.slide');
  slideElement.style['margin-left'] = '-' + (leftmostPageNumber)*pageButtonSizePx + 'px';
}

document.querySelector('.prev').addEventListener('click', function () {
  if (slideLeftPage > 1) {
	slideLeftPage--;
  }
  moveSlideToPage(slideLeftPage);
});

document.querySelector('.next').addEventListener('click', function () {
  if (slideLeftPage < maxLeftmostPage) {
    slideLeftPage++;
  }
  moveSlideToPage(slideLeftPage);
});

document.querySelector('.slide').addEventListener('click', function (event) {
	let clickedPageLink = event.target;
  let clickedPageButton = clickedPageLink.parentNode;
	let pageButtons = document.querySelectorAll('.page-item');
  let clickedPageNumber = parseInt(clickedPageLink.text);

  pageButtons.forEach(function (pageButton) {
  	pageButton.classList.remove('active');
  });

  clickedPageButton.classList.add('active');
  moveSlideToPage(clickedPageNumber-2);
});
