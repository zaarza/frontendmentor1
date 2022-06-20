let openMenu = document.getElementsByClassName('open-menu')[0];
let closeMenu = document.getElementsByClassName('close-menu')[0];
let navContainer = document.querySelector('.nav-container');
let overlayBlack = document.querySelector('.overlay-black');
let features = document.querySelector('.features');
let featuresDropdown = document.querySelector('.features-dropdown');
let company = document.querySelector('.company');
let companyDropdown = document.querySelector('.company-dropdown');
let featuresArrow = document.querySelector('.arrow.features-arrow');
let companyArrow = document.querySelector('.arrow.company-arrow');

// Menu toggle
openMenu.addEventListener('click',function() {
  navContainer.classList.add('nav-active');
  setTimeout(function() {
    overlayBlack.style.display='inherit';
  },300)

});

closeMenu.addEventListener('click',function() {
  navContainer.classList.remove('nav-active');
  setTimeout(function() {
    overlayBlack.style.display='none';
  },300)
});

// Dropdown toggle
features.addEventListener('click',function() {
  featuresDropdown.classList.toggle('dropdown-active');
  featuresArrow.classList.toggle('arrow-active');
});

company.addEventListener('click',function() {
  companyDropdown.classList.toggle('dropdown-active');
  companyArrow.classList.toggle('arrow-active');
})

overlayBlack.addEventListener('click', function() {
  navContainer.classList.remove('nav-active');
  setTimeout(function() {
    overlayBlack.style.display='none';
  },300);
});

