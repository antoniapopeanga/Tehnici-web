var galleryContainer = document.querySelector('.galerie');//selectare clasa
var images = galleryContainer.querySelectorAll('img');//selectare tag
var currentImageIndex =0;

function showImage(index) {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  images[index].style.display = 'block';
}

showImage(currentImageIndex);

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
  localStorage.setItem('currentImageIndex', currentImageIndex);//localStorage
  updateCurrentIndexText(); 
}

function previousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
  localStorage.setItem('currentImageIndex', currentImageIndex);
  updateCurrentIndexText();
}

var prevButton = document.getElementById('prevBtn');
prevButton.addEventListener('click', function(event) {
  previousImage();
  event.stopPropagation();//stopPropagation
});

var nextButton = document.getElementById('nextBtn');
nextButton.addEventListener('click', function(event) {//event handler click
  nextImage();
  event.stopPropagation();
});

document.addEventListener('keydown', function(event) {//eventhandler tastatura
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    previousImage();
  }
});

var computedStyle = getComputedStyle(images[currentImageIndex]);//getComputedStyle
var imageWidth = computedStyle.width;
var imageHeight = computedStyle.height;

for (var i = 0; i < images.length; i++) {
  images[i].style.width = imageWidth;
  images[i].style.height = imageHeight;
}

var currentIndexText = document.getElementById('currentIndex');
var totalImages = images.length;

updateCurrentIndexText(); 

function updateCurrentIndexText() {
  currentIndexText.textContent = (currentImageIndex + 1) + '/' + totalImages;
}