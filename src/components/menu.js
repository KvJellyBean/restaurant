const initMenu = () => {
    const main = document.querySelector('main');

    // Create menu page (title and lists)
    const menuPage = document.createElement('div');
    menuPage.setAttribute('id', 'menu');

    // Create the title
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menuTitle');
    menuTitle.innerText = 'Our Exquisite Sushi Menu';

    // Create menu list
    const menuList = document.createElement('div');
    menuList.classList.add('menuList');
    menuList.innerHTML = `
        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu1.jpeg" alt="Salmon Nigiri">
            </div>
            <div class="menu-image">
                <h3>Salmon Nigiri</h3>
                <p class="description">Fresh salmon atop a bed of seasoned rice.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu2.jpeg" alt="Tuna Sashimi">
            </div>
            <div class="menu-description">
                <h3>Tuna Sashimi</h3>
                <p class="description">Prime tuna served in delicate slices, perfect for savoring the pure taste of the fish.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu3.jpeg" alt="Yellowtail Sashimi">
            </div>
            <div class="menu-description">
                <h3>Yellowtail Sashimi</h3>
                <p class="description">Slices of yellowtail, perfect for savoring the pure taste of the fish.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu4.jpeg" alt="Octopus Sashimi">
            </div>
            <div class="menu-description">
                <h3>Octopus Sashimi</h3>
                <p class="description">Tender octopus slices, served raw for a unique seafood experience.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu5.jpeg" alt="Spicy Tuna Roll">
            </div>
            <div class="menu-description">
                <h3>Spicy Tuna Roll</h3>
                <p class="description">A cone-shaped seaweed wrap filled with spicy tuna, avocado, and cucumber.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu6.jpeg" alt="Vegetarian Temaki">
            </div>
            <div class="menu-description">
                <h3>Vegetarian Temaki</h3>
                <p class="description">A delightful hand roll featuring fresh vegetables and sushi rice.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>
        
        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu7.jpeg" alt="California Roll">
            </div>
            <div class="menu-description">
                <h3>California Roll</h3>
                <p class="description">Avocado, crab, and cucumber rolled in seaweed and rice, topped with tobiko.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu8.jpeg" alt="Dragon Roll">
            </div>
            <div class="menu-description">
                <h3>Dragon Roll</h3>
                <p class="description">Eel, avocado, and cucumber wrapped in seaweed and rice, topped with avocado slices and eel sauce.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu9.jpeg" alt="Shrimp Tempura Uramaki">
            </div>
            <div class="menu-description">
                <h3>Shrimp Tempura Uramaki</h3>
                <p class="description">Inside-out roll with shrimp tempura, avocado, and cucumber, topped with eel sauce.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>

        <div class="menu-item">
            <div class="menu-image">
                <img src="../src/images/menu10.jpeg" alt="Spider Roll">
            </div>
            <div class="menu-description">
                <h3>Spider Roll</h3>
                <p class="description">Soft-shell crab, avocado, and cucumber rolled in seaweed and rice, served with spicy mayo.</p>
                <a href="#contact" class="order-btn">Order Now</a>
            </div>
        </div>
    `;

    // Input the menu page elements into main
    menuPage.append(menuTitle, menuList);
    main.append(menuPage);
};

export default initMenu;  