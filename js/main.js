new fullpage('#fullpage', {
  anchors: ['Greeting', 'Project','Portfolio', 'Info'],
  menu: '#menu',
  scrollOverflow: true,
  onLeave: function(origin, destination, direction, trigger){
		let loadedSection = this;
    
    if(origin.index == 2 && direction == 'down'){
      let i = 0
      let titleList = document.getElementsByClassName("time-item");
      let certiList = document.getElementsByClassName("certi-item");
      let skillList = document.getElementsByClassName("skills-item");
      let greeting = document.getElementsByClassName("greeting-item");
      let title = document.getElementsByClassName('intro-title');
      skillList[0].classList.add("timeline-ani");
      greeting[0].classList.add("timeline-ani");

      let addOpa = setInterval(() => {
        if(i < certiList.length){
          certiList[i].classList.add("timeline-ani");
        }
        if(i < title.length){
          title[i].style.opacity = 1;
        }
        if(i < titleList.length){
          titleList[i].classList.add("timeline-ani");
          i++
        }else{
          clearInterval(addOpa)
        }
       
      },[250])

      new TypeIt(".typing1", {
        speed: 120,
      }).go();

      new TypeIt(".typing2", {
        speed: 120,
      }).go();

      new TypeIt(".typing3", {
        speed: 120,
      }).go();

      new TypeIt(".typing4", {
        speed: 120,
      }).go();
		}
      
	}
  });

  new TypeIt("#introTxt", {
    speed: 120,
  })
  .type("안녕하세요. :)",{delay: 400})
  .delete(2 ,{delay: 700})
  .delete(7)
  .type("프론트엔드 개발자 ")
  .type("양홍열입",{delay: 500})
  .delete(5,{delay: 300})
  .type("로 성장중인<br/>")
  .type("웹 퍼블리셔 양홍열입니다.")
  .go();
  
  const remote = document.getElementsByClassName('remote');
  setTimeout(() =>{
    remote[0].classList.add("on");
  },3000)

  const cursor = document.getElementById("cursor-custom"),
  radius = cursor.offsetHeight / 2;

  document.addEventListener("mousemove", (e) => {
    let top = e.clientY - radius,
      left = e.clientX - radius;

    cursor.style = `top: ${top}px; left: ${left}px`;
  });

  let swiper = new Swiper(".swiper-container.section2_swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop:true,
    observeParents:true,
    observe:true,
    pauseOnMouseEnter:true,
    centeredSlides:true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    speed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });