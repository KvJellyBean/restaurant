const initHome = () => {
    const main = document.querySelector('main');
    const content = document.querySelector('.content');

    // Create "Landing Page"
    const landingPage = document.createElement('div');
    landingPage.setAttribute('id', 'landingPage');
    const landingContent = document.createElement('div');
    landingContent.classList.add('landingContainer');
    landingContent.innerHTML = `
        <div class="left-side">
            <h1>Jelly Sushi Delights</h1>
            <p>Experience a burst of flavor at Jelly Sushi, where innovation meets tradition. Our menu is a delightful journey through the art of sushi creation.</p>

            <p>Order Now for Jellylicious Sushi</p>
            <button class="order-btn"><a href="#menu">Order Now</a></button>

            <p>Treat yourself to the extraordinary - order now and relish the delightful world of Jelly Sushi!</p>
        </div>
            
        <div class="right-side">
            <img src="../src/images/">
        </div>
    `;
    landingPage.append(landingContent);

    // Create "About Us"


    // Create "Feedback"


    // Create "Gallery"

    main.append(landingPage);
    content.append(main);
};

export default initHome;