const initHeader = () => {
    const headerTag = document.querySelector('header');

    // Create the logo 
    const logo = createLogo();
    // Create the navbar
    const navbar = createNavbar();

    // Input the logo and nav into header
    headerTag.append(logo, navbar);
};

// Function to make/generate the logo 
const createLogo = () => {
    const container = document.createElement('div');
    container.classList.add('logo-container');
    const logoTitle = document.createElement('h1');
    logoTitle.innerText = 'Jelly Sushi';
    const logoImage = document.createElement('img');
    logoImage.setAttribute('src', '../src/images/logo.png');
    logoImage.setAttribute('alt', 'Logo');
    container.append(logoImage, logoTitle);
    return container;
};

// Function to create the navbar
const createNavbar = () => {
    const navbar = document.createElement('nav');
    const unorderList = document.createElement('ul');
    unorderList.innerHTML = `
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
    `;
    navbar.append(unorderList);
    return navbar;
};

export default initHeader;
export { createLogo };