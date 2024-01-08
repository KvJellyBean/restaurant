import header from './header.js';
import home from './home.js';
import footer from './footer.js';
import '../../dist/style.css';

const initPage = () => {
    // Header
    header();

    // Main
    home();

    // Footer
    footer();
}

export default initPage;