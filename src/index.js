import pageLoader from './components/pageLoad.js';


const content = document.querySelector('.content');
const headerTag = document.createElement('header');
const mainTag = document.createElement('main');
const footerTag = document.createElement('footer');

content.append(headerTag, mainTag, footerTag);

pageLoader();