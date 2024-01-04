const initHeader = () => {
    const content = document.querySelector('.content');
    const headerTag = document.querySelector('header');

    // Make the logo 
    const logoContainer = document.createElement('div');
    const logoTitle = document.createElement('h1');
    logoTitle.innerText = 'Jelly Sushi';
    const logoImage = document.createElement('img');
    logoImage.setAttribute('src', '../src/images/logo.png');
    logoContainer.classList.add('logo-container');
    logoContainer.append(logoImage, logoTitle);

    // Make navbar
    const navbar = document.createElement('nav');
    const unorderList = document.createElement('ul');
    unorderList.innerHTML = `
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
    `;
    navbar.append(unorderList);

    // Input the logo and nav into header
    headerTag.append(logoContainer, navbar);
    // Add the header into content page
    content.append(headerTag);
};

export default initHeader;  