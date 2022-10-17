$(function() {
  $(".rev_slider").slick({
    arrows: true,
    infinite: true,
    appendArrows:'.slider-arrows',
    prevArrow: '<button id = "prev" type="button"<i class="fa-solid fa-circle-chevron-left"></i></button>',
    nextArrow: '<button id= "next" type="button"><i class="fa-solid fa-circle-chevron-right"></i></i></button>',
    dots: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
  
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeught: true,
    },
  });
  $(".sus-slider").slick({
  infinite: true,
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 3,

    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeught: true,
    },
  });
})

const openPopUp = document.getElementsByClassName('sign-in')[0]
const closePopUp = document.getElementsByClassName('pop_up_close')[0]

const popUp = document.getElementsByClassName('pop_up')[0]

openPopUp.addEventListener('click', function(){
    popUp.classList.add('active')
})
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})

let sus_slide = document.getElementsByClassName("sus-slide");

function sus_scrolling(e){
  let targets = []
  cur_slide = e.currentTarget
  an_block = cur_slide.getElementsByClassName('sus-animated')[0]
  if(e.type==="mouseover"){
      an_block.classList.add("sus-animated-2");
  }
  else if(e.type==="mouseout") {
      an_block.classList.remove("sus-animated-2");
  }
}

sus_slide[0].addEventListener("mouseover", sus_scrolling);
sus_slide[1].addEventListener("mouseover", sus_scrolling);
sus_slide[2].addEventListener("mouseover", sus_scrolling);
sus_slide[3].addEventListener("mouseover", sus_scrolling);
sus_slide[4].addEventListener("mouseover", sus_scrolling);
sus_slide[5].addEventListener("mouseover", sus_scrolling);

sus_slide[0].addEventListener("mouseout", sus_scrolling);
sus_slide[1].addEventListener("mouseout", sus_scrolling);
sus_slide[2].addEventListener("mouseout", sus_scrolling);
sus_slide[3].addEventListener("mouseout", sus_scrolling);
sus_slide[4].addEventListener("mouseout", sus_scrolling);
sus_slide[5].addEventListener("mouseout", sus_scrolling);