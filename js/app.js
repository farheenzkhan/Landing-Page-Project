/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navbar = document.querySelector('#navbar__list');
const allsections = document.querySelectorAll('section');
const activeclass = "your-active-class";
const allSections = document.querySelectorAll('section');
const unorderedList = document.getElementsByTagName("li");
const navBarList = document.querySelector('#navbar__list');
const navBarMenu = document.querySelector('.navbar__menu');
const landingContainer = document.querySelector('.landing__container');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
let inViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
const sections = document.querySelectorAll("section");
function createNavbar(){
  for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;

  };
};
createNavbar();


//Adding click event listener on Nav
var elmnt = document.getElementById("section1");

function scrollToTop() {
elmnt.scrollIntoView(true); // Top
}

function scrollToBottom() {
elmnt.scrollIntoView(false); // Bottom
}

//Nav list items



function populatenavbarlist() {
    const navBar = document.querySelector('.navbar')
    const sections = Array.from(document.querySelectorAll('.section'))
    sections.forEach(function() {
    const  navItem = document.createElement('li');
    const navContent = document.querySelector('h2')
    navItem.innerHTML = navContent
    navBar.appendChild(navItem);
     })
     var node = document.createElement("li");
     var textnode = document.createTextNode("Section 1");
       node.appendChild(textnode);
       document.getElementById("navbar").appendChild(node);

       // Scroll to section on link click
       function scroll() {
         const menuScroll = document.querySelectorAll('a');
         for (let i = 0; i <= sections.length; i++) {
           const top = sections[i].getBoundingClientRect().top + window.pageYOffset;
           menuScroll[i].addEventListener('click', function (e) {
             e.preventDefault();
             window.scrollTo({
               top,
               behavior: 'smooth'
             })
           });
         }
       }

       function isActive () {
         const menuLinks = document.querySelectorAll('.menu__link');
           for (let i = 0; i <= sections.length; i++) {
             window.addEventListener('scroll', function (e) {
               e.preventDefault();
               if (inViewport(sections[i])) {
                 sections[i].classList.add('active');
                 menuLinks[i].classList.add('menu__active');
               } else {
                 sections[i].classList.remove('active');
                 menuLinks[i].classList.remove('menu__active');
               }
             })
             {once: true}
         };
       }

// Add class 'active' to section when near top of viewport
function activateNavLinks(id) {

const navLinks = document.querySelectorAll(".navbar__link");

	navLinks.forEach((navLink) => {
		if (navLink.childNodes[0].id.substring(1) === id ) {
			console.log(true);
			navLink.childNodes[0].classList.add("demo-class");
		} else {
			console.log(false);
			navLink.childNodes[0].classList.remove("demo-class");
		}
	})
}

function activeClassAssign() {

	sections.forEach((section) =>
		window.addEventListener("scroll", function(){
			if (section.getBoundingClientRect().top + 200 < window.innerHeight &&
				section.getBoundingClientRect().bottom + 200 > window.innerHeight) {
				section.classList.add("your-active-class");
				activateNavLinks(section.id);
			} else {
				section.classList.remove("your-active-class");
			}
		})
	);
}



//Add scroll to top function for button, only show button when past the page fold.

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", function() {
    setActive();
    function scrollToTop() {
      elmnt.scrollIntoView(true);


    document.addEventListener("scroll", function() {
    watchMeScroll.addEventListener('scroll', setActive);
    });

    // Smooth scroll function
    function scroll(){
        for (let i = 1; i <= sections.length; i++){
            let section = document.getElementById(`section${i}`);
            const listId = document.getElementById(`secLi_${i}`);
            listId.addEventListener('click', function(){
                section.scrollIntoView({behavior: "smooth"})
                element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            });
        }
    };

    scroll();



    //scroll to top smoothly

    function topFunction() {
  	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
  }

  //Add Smooth scroll function to the anchor elements.

  function smoothScroll() {

  	const links = document.querySelectorAll('a');

  	links.forEach((link) =>
  		link.addEventListener('click', function(e) {
  			e.preventDefault();

  			document.querySelector(this.getAttribute("href")).scrollIntoView({
  				behavior: 'smooth'
  			})
  		})
  	);
  }



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
sectionList()
// Scroll to section on link click
smoothScroll();
// Set sections as active
function sectionActive(){

    const scrollHeight = window.pageYOffset;
    const innerHeight = window.innerHeight;


    for(let i = 1; i <= sections.length; i++){

        let section = document.getElementById(`section${i}`);
        const listId = document.getElementById(`secLi_${i}`);
        const secTop = section.getBoundingClientRect().top;
        const secBot = section.getBoundingClientRect().bottom;
        // console.log(secTop);
        // console.log(secBot);
        // console.log(section.offsetHeight);

        // if ( (section.offsetHeight * i) <= scrollHeight <= (section.offsetHeight * (i+1))
        // && (0 <= secTop <= section.offsetHeight)
        // && (secBot <= section.offsetHeight)
        // )
        if(secTop < innerHeight/3 && secBot > innerHeight/3)
        {
            listId.classList.add('active');
        }
        else{
            listId.classList.remove('active');
        }
    }

    console.log(innerHeight);

    //for the back to top button
    const sec = document.getElementById('section1');
    if (scrollHeight > sec.offsetHeight){
        topBtn.classList.add('show-link');
    }
    else{
        topBtn.classList.remove('show-link');
    }



};
setActive()
}
})
}
