import pageLoader from './components/pageLoad.js';
import homePage from './components/home.js';
import menuPage from './components/menu.js';
import contactPage from './components/contact.js';

const content = document.querySelector('.content');
const headerTag = document.createElement('header');
const mainTag = document.createElement('main');
const footerTag = document.createElement('footer');

content.append(headerTag, mainTag, footerTag);

// Load main page (first enter)
pageLoader();

// Event listeners for tab switching 
const tabSwitchController = (() => {
    const home = document.querySelector('ul li:nth-child(1) button');
    const menu = document.querySelector('ul li:nth-child(2) button');
    const contact = document.querySelector('ul li:nth-child(3) button');

    home.addEventListener('click', () => {
        clearContent();
        if (!home.classList.contains('active')) {
            home.classList.add('active');
        }
        homePage();
    });

    menu.addEventListener('click', () => {
        clearContent();
        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
        }
        menuPage();
    });

    contact.addEventListener('click', () => {
        clearContent();
        if (!contact.classList.contains('active')) {
            contact.classList.add('active');
        }
        contactPage();
    });

    const clearContent = () => {
        mainTag.innerHTML = '';
        home.removeAttribute('class');
        menu.removeAttribute('class');
        contact.removeAttribute('class');
    }

    return {
        clearContent,
        home,
        menu,
        contact
    }
})();

// export
const homeNav = tabSwitchController.home;
const menuNav = tabSwitchController.menu;
const contactNav = tabSwitchController.contact;
const clearContent = tabSwitchController.clearContent;
export { homeNav as home, menuNav as menu, contactNav as contact, clearContent };