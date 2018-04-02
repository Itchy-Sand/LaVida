var logo_img = document.querySelector("#logo");

var images = [
  "url('slider/anniversary-beautiful-birthday-433527.jpg')",
  "url('slider/birthday-birthday-cake-cake-140831.jpg')",
  "url('slider/birthday-cake-celebration-353347.jpg')",
  "url('slider/cake-chocolate-cream-635409.jpg')"
]

counter = 3;

function changeImage(){
  if (counter < images.length){
    logo_img.style.backgroundImage = images[counter];
    console.log(counter);
    counter++
  }else{
    counter = 0
  }
}


setInterval(changeImage, 3000);
