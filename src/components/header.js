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
    logoTitle.innerHTML = '<span>Jelly</span> Sushi';
    const logoImage = document.createElement('img');
    logoImage.setAttribute('alt', 'Logo');
    logoImage.setAttribute('src', './images/logo.png');
    container.append(logoImage, logoTitle);
    return container;
};

// Function to create the nav bar 
const createNavbar = () => {
    const navbar = document.createElement('nav');
    const unorderList = document.createElement('ul');
    unorderList.innerHTML = `
        <li><button class="active" onClick="location.href='#home'">Home</button></li>
        <li><button onClick="location.href='#menu'">Menu</button></li>
        <li><button  onClick="location.href='#contact'">Contact</button></li>
    `;
    navbar.append(unorderList);
    return navbar;
};

export default initHeader;
export { createLogo };