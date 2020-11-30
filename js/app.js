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

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const navbarMenu = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
function createNavbar(){
  for (let item of sections){
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbarMenu.appendChild(section);

  };
};
createNavbar();




//Adding click event listener on Nav
        toplistitem.addEventListener('click', function() {
            item.scrollIntoView({behavior: "smooth" })
            toplistitem.id = "nav-"+item.id;
        })
       navbar.appendChild(Section 1);
        //Add id
        toplistitem.id = navbar;
        toplistitem.classname = "navbar_menu"
        //Add href
        toplistitem.appendchild(toplistitem)
        navbar.appendChild(navbar__menu);

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



// Add class 'active' to section when near top of viewport
function setActive() {
    window.addEventListener('scroll',function(event) {
        for (let i = 1; i <= sections.length; i++) {
            let section = document.getElementById(`section${i}`);
            const itemId= document.getElementById(`nav-section${i}`);


            if (
              section.section1().top >= 0 &&
              section.section1().left >= 0 &&
              section.section1().bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              section.section1().right <=
                (window.innerWidth || document.documentElement.clientWidth)
            )
            {
            itemId.classList.add(activeclass);
            section.classList.add(activeclass);

             } else{
            itemId.classList.remove(activeclass);
            section.classList.remove(activeclass);
        }
        }

    });
};*

// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", function() {
    setActive();
    function scrollToTop() {
      elmnt.scrollIntoView(true);

    document.addEventListener("scroll", function() {
    watchMeScroll.addEventListener('scroll', setActive);
    });

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
sectionList()
// Scroll to section on link click

// Set sections as active
setActive()
}
})
}
