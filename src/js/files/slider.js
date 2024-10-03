

let sliders = document.querySelectorAll("._swiper");
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-bild")) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add("swiper-slide");
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add("swiper-wrapper");
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add("swiper-bild");
    }
  }
  sliders_bild_callback();
}
function sliders_bild_callback(params) { }



if (document.querySelector('.about-intro__wrap')) {
  new Swiper(".about-intro__wrap", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".about-intro__nav",
      clickable: true,
    },

  });
}

if (document.querySelector('.video-about__slider')) {
  new Swiper(".video-about__slider", {
    slidesPerView: "auto",
    spaceBetween: 40,
    freeMode: true,
    direction: 'horizontal',
    breakpoints: {
      320: {
        direction: 'vertical', spaceBetween: 20,
      },
      991: {
        direction: 'horizontal', spaceBetween: 40,
      }
    }
  });
}
if (document.querySelectorAll('.slider-about__slider')) {
  const blocks = document.querySelectorAll('.slider-about__slider')
  for (const item of blocks) {
    new Swiper(item, {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        991: {
          spaceBetween: 20,
        }
      }
    });
  }

}
