function createChipsCopy() {
  const chipRows = document.querySelectorAll('.chips__row');
  for (let i = 0; i < chipRows.length; i++) {
    const copyChipRow = document.querySelector(`.chips__images_${i + 1}`).cloneNode(true);
    const copyChipRowHoriz = document.querySelector(`.chips__horizontal_${i + 1}`).cloneNode(true);
    if (i % 2 === 0) {
      chipRows[i].prepend(copyChipRow)
      chipRows[i].prepend(copyChipRowHoriz)
    } else {
      chipRows[i].append(copyChipRow)
      chipRows[i].append(copyChipRowHoriz)
    }
  }
}
createChipsCopy();
createChipsCopy();
createChipsCopy();
createChipsCopy();
createChipsCopy();
createChipsCopy();

const headerPopup = document.createElement('div');
headerPopup.classList.add('header__popup');
const burgerButton = document.querySelector('.nav__button');
const navMenu = document.querySelector('.popup');
const menu = document.querySelector('.navigation__list').cloneNode(1);
const buttonLogin = document.querySelector('.login').cloneNode(1);
const buttonSignUp = document.querySelector('.sign_up').cloneNode(1);
const links = Array.from(menu.children);
const owerLay = document.querySelector('.owerlay');
const langButton = document.querySelector('.language');
const langText = document.querySelector('.lang');

burgerButton.addEventListener('click', activePopup);

function activePopup() {
  burgerButton.classList.toggle('active');
  navMenu.classList.toggle('open__navigation');
  owerLay.classList.toggle('active')
  document.body.classList.toggle('fix__scroll')
  renderCont();
};

function renderCont() {
  navMenu.appendChild(headerPopup);
  navMenu.appendChild(menu);
  navMenu.appendChild(buttonLogin)
  navMenu.appendChild(buttonSignUp)
};

function closePopup() {
  navMenu.classList.remove('open__navigation');
  burgerButton.classList.remove('active');
  owerLay.classList.remove('active')
  document.body.classList.remove('fix__scroll')
};

links.forEach(function (link) {
  link.addEventListener('click', closePopup)
});

owerLay.addEventListener('click', closePopup)

langButton.addEventListener('click',changeLang)

function changeLang() {
  switch (langText.textContent) {
    case "EN":
      langText.textContent = "RU"
      break;
      case "RU":
        langText.textContent = "EN"
      break;
    default:
      break;
  }
}
