                                // slider
{
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 130,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
}


                    // adapt menu

// {
    
//     var btnadapt  = document.getElementById('btnadapt'); 
//     var close = document.getElementById('close');
//     var adaptmenu = document.getElementById('adaptmenu');

//     btnadapt.addEventListener('click', function () {
//         adaptmenu.classList.add('visibladaptmenu');
//     });

//     close.addEventListener('click', function () {
//         adaptmenu.classList.remove('visibladaptmenu');
//     });
// }
