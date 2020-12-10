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

document.getElementById("sec1").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("sec1").innerHTML = scrollIntoView("section1");
}


document.body.onload = build_navbar()
// build the navbar when the page loads

function build_navbar(){
    //loops over the sections to create the navbar with the title from every section
    sections.forEach(build_navbar_entry)
};
//builds navbar by creating <li> elements for the empty navbar ul(unordered list) and adds the link according to sections.
function build_navbar_entry(section) {

    const title= section.dataset.nav; // access the dataset in sections
    const listItem = document.createElement("li");//creates a list element
    //const anchor =  document.createElement("a"); // creates an anchor element to be populated with a link
    //const linkName = anchor.setAttribute('href','#'+ section.id); // sets the link according to the section so that we can scroll to section on link click
    const linkDiv = document.createElement("div"); // creates a div that will serve as a link
    const linkFunction = linkDiv.addEventListener('click', () =>{
        scrollSection(section)
    });
    linkDiv.classList.add("navbar-link"+ "-" + section.id); // creates a class for each link (to be used in makeActive function to highlight the active item)
    linkDiv.appendChild(document.createTextNode(title)); //append a text node with the title to the anchor
    listItem.appendChild(linkDiv); //append anchor to the list item
    navbar.appendChild(listItem); //append list item to navbar



}

//highlights the active section by adding the class called "your-active-class" for sections and the class "active" in the navbar
function makeActive(){
    for(const section of sections){
     //add active class and highlight ("getBoundingClientRect()" function returns the size of an element and its position relative to the viewport)
    const box= section.getBoundingClientRect();// where is the section in the viewport, and how big is it?
    if(box.top <=110 && box.bottom >= 110){// if the section is between these numbers in the viewport then it means its active
        section.classList.add("your-active-class");
        document.querySelector(`.navbar-link-${section.id}`).classList.add("active");
    } else {
        //remove active class when not viewing the section, so that it removes the highlighting
        section.classList.remove("your-active-class");
        document.querySelector(`.navbar-link-${section.id}`).classList.remove("active");
        }
    }
}


/**
 * End Main Functions
 * Begin Events
 *
*/
//get the button
const button=document.querySelector(".btn");

 //function that goes to the top of the document when the user presses the button
  function goToTop(){
      button.addEventListener('click',() => {
      document.documentElement.scrollTop=0;
      document.body.scrollTop=0;
  }); }

//when the user scrolls down from the top of the document, then show the button
  function showBtn(){

    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        button.classList.remove('hide');
    } else {
        button.classList.add('hide');
          }
    }



// Set sections as active
// Listen to scroll to make sections active and show button
document.addEventListener("scroll", () => {
    makeActive();
    showBtn();
  }); 





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
