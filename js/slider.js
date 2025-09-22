
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,            // Кількість слайдів у видимій області (можеш поставити 1 або авто)
    spaceBetween: 5,              // Відступ між слайдами (в пікселях)
    centeredSlides: true,          // Центрує активний слайд
    grabCursor: true,              // Показує "руку" при наведенні
    loop: false,  
      // Безкінечне прокручування

        
      breakpoints: {
          475: {
              slidesPerView: 3,
          },
         960: {
              slidesPerView: 3,
          }
      },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,             // Щоб по кліку на крапки переключало
    },
    
  });
  
 

  

