import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import footer from './footer.js';
import '../style.css';

const initPage = () => {
    // Header
    header();

    // Main
    home();
    menu();
    contact();

    // Footer
    footer();
}

export default initPage;