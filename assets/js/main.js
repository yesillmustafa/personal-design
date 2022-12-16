/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`)
sr.reveal(`.profile__profession`)
sr.reveal(`.profile__social`)
sr.reveal(`.profile__info`)
sr.reveal(`.profile__buttons`)
sr.reveal(`.interest__card:nth-child(1)`, {origin:'left'})
sr.reveal(`.interest__card:nth-child(2)`, {origin:'bottom'})
sr.reveal(`.interest__card:nth-child(3)`, {origin:'right'})
sr.reveal(`.about__data-title`, {origin:'left'})
sr.reveal(`.about__description`, {origin:'right'})
sr.reveal(`.projects__container`)
sr.reveal(`.skills__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.footer__container`)



/*=============== SWIPPER  PROJECTS===============*/
 let swiperProjects = new Swiper(".projects__container", {
        loop:true,
        spaceBetween: 24,
        MouseEvent: true,
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        
        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: -56,
          },
          
        },
      });


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactContent = document.getElementById('contact-content'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactContent.value === ''){
      //add and remove color
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      // show message
      contactMessage.textContent = 'Write all the input fields 📩'
    }else{
      
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'Message sent ✅'
     
    }
    setTimeout(() => {
        contactMessage.textContent = ''
      }, 3000);
      contactName.value = ''
      contactEmail.value = ''
      contactContent.value = ''
    
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil uil-moon' : 'uil uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/*=============== PAINT TOGGLE ===============*/ 
let paintToggle = document.getElementById('paint-toggle');
let paintMenu = document.getElementById('paint-menu');
paintToggle.onclick = function() {
  paintMenu.classList.toggle('active')
}

let paintButton = document.querySelectorAll(".paint__buttons")
  paintButton.forEach(color => {
    
    color.addEventListener('click', () => {
      let dataColor = color.getAttribute('style').split(';')[1].split(':')[1]
      document.querySelector(':root').style.setProperty('--hue', dataColor)
      paintMenu.classList.remove('active')
      
    })
     
    
  })
  

// DRAG AND DROP

 // getting HTML elements
  const paint_menu = document.querySelector(".paint__menu"),
        paint_toggle = paint_menu.querySelector(".paint__toggle");

    paint_toggle.addEventListener("click" , () =>{
      paint_menu.classList.toggle("open");
    });


  // js code to make draggable nav
  function onDrag({movementY}) { //movementY gets mouse vertical value
    const paintStyle = window.getComputedStyle(paint_menu), //getting all css style of nav
          paintTop = parseInt(paintStyle.top), // getting nav top value & convert it into string
          paintHeight = parseInt(paintStyle.height), // getting nav height value & convert it into string
          windHeight = window.innerHeight; // getting window height
          

    paint_menu.style.top = paintTop > 0 ? `${paintTop + movementY}px` : "1px";
    if(paintTop > windHeight - paintHeight){
        paint_menu.style.top = `${windHeight - paintHeight}px`;
    } 
  }
  

  //this function will call when user click mouse's button and  move mouse on nav
  paint_menu.addEventListener("mousedown", () =>{
    paint_menu.addEventListener("mousemove", onDrag);
  });

  //these function will call when user relase mouse button and leave mouse from nav
  paint_menu.addEventListener("mouseup", () =>{
    paint_menu.removeEventListener("mousemove", onDrag);
  });
  paint_menu.addEventListener("mouseleave", () =>{
    paint_menu.removeEventListener("mousemove", onDrag);
  });


