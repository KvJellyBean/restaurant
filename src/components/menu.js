import { createSectionTitle as createPageTitle } from "./home";
import contactPage from './contact.js';
import { contact, clearContent } from '../index.js';

// Data
const menus = [
    {
        name: 'Salmon Nigiri',
        description: 'Fresh salmon atop a bed of seasoned rice.',
        price: '$9.99',
        imageUrl: '../dist/images/menu1.jpeg'
    },
    {
        name: 'Tuna Sashimi',
        description: 'Prime tuna served in delicate slices, perfect for savoring the pure taste of the fish.',
        price: '$30.00',
        imageUrl: '../dist/images/menu2.jpeg'
    },
    {
        name: 'Yellowtail Sashimi',
        description: 'Slices of yellowtail, perfect for savoring the pure taste of the fish.',
        price: '$25.00',
        imageUrl: '../dist/images/menu3.jpeg'
    },
    {
        name: 'Octopus Sashimi',
        description: 'Tender octopus slices, served raw for a unique seafood experience.',
        price: '$25.00',
        imageUrl: '../dist/images/menu4.jpeg'
    },
    {
        name: 'Spicy Tuna Roll',
        description: 'Seaweed-wrapped sushi filled with tuna, spicy mayo, avocado, and cucumber.',
        price: '$13.99',
        imageUrl: '../dist/images/menu5.jpeg'
    },
    {
        name: 'Vegetarian Temaki',
        description: 'A delightful hand roll featuring fresh vegetables and sushi rice.',
        price: '$8.99',
        imageUrl: '../dist/images/menu6.jpeg'
    },
    {
        name: 'California Roll',
        description: 'Avocado, crab, and cucumber rolled in seaweed and rice, topped with tobiko.',
        price: '$13.99',
        imageUrl: '../dist/images/menu7.jpeg'
    },
    {
        name: 'Dragon Roll',
        description: 'Eel, avocado, and cucumber wrapped in seaweed and rice, topped with avocado slices and eel sauce.',
        price: '$17.99',
        imageUrl: '../dist/images/menu8.jpeg'
    },
    {
        name: 'Shrimp Tempura Uramaki',
        description: 'Inside-out roll with shrimp tempura, avocado, and cucumber, topped with eel sauce.',
        price: '$15.00',
        imageUrl: '../dist/images/menu9.jpeg'
    },
    {
        name: 'Spider Roll',
        description: 'Soft-shell crab, avocado, and cucumber rolled in seaweed and rice, served with spicy mayo.',
        price: '$12.99',
        imageUrl: '../dist/images/menu10.jpeg'
    },
]

// Initialize menu
const initMenu = () => {
    const main = document.querySelector('main');

    // Create menu page (title and lists)
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'menu');

    // Create the title
    const menuTitle = createPageTitle('Our <span>Exquisite</span> Sushi Menu');

    // Create menu list
    const menuList = createMenuList(menus);

    // Input the menu page elements into main
    menuPage.append(menuTitle, menuList);
    main.append(menuPage);

    // Listener for button order
    const orderButtons = document.querySelectorAll('a.order-btn');
    orderButtons.forEach(orderBtn => {
        orderBtn.addEventListener('click', () => {
            clearContent();
            contactPage();
            contact.classList.add('active');
        });
    })
};

// Function to create menu list
const createMenuList = (menu) => {
    const menuListContainer = document.createElement('div');
    menuListContainer.classList.add('menuList');

    // Create the menu from the data
    menu.forEach((item) => {
        // Make menu wrapper & the menu
        const menuWrapper = document.createElement('div');
        menuWrapper.classList.add('menu-item');

        const menuImage = document.createElement('div');
        menuImage.classList.add('menu-image');
        const image = document.createElement('img');
        image.src = `${item.imageUrl}`;
        image.alt = `${item.name}`;
        menuImage.append(image);

        const menuDescription = document.createElement('div');
        menuDescription.classList.add('menu-desc');
        const menuName = document.createElement('h3');
        menuName.innerText = `${item.name}`;
        const description = document.createElement('p');
        description.innerText = `${item.description}`;
        const price = document.createElement('p');
        price.innerText = `${item.price}`;
        const orderButton = document.createElement('a');
        orderButton.href = '#contact';
        orderButton.classList.add('order-btn');
        orderButton.innerText = 'Order';
        menuDescription.append(menuName, description, price, orderButton);

        menuWrapper.append(menuImage, menuDescription);
        menuListContainer.append(menuWrapper);
    });
    return menuListContainer;
};

export default initMenu;