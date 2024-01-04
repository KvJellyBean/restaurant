const initHome = () => {
    const main = document.querySelector('main');

    // Create home page (landing, about,feedback, gallery)
    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'home');

    // Create "Landing Page"
    const landingPage = document.createElement('div');
    landingPage.setAttribute('id', 'landingPage');
    const landingContent = document.createElement('div');
    landingContent.classList.add('landingContent');
    landingContent.innerHTML = `
        <div class="left-side">
            <h2>Jelly Sushi Delights</h2>
            <p>Experience a burst of flavor at Jelly Sushi, where innovation meets tradition. Our menu is a delightful journey through the art of sushi creation.</p>

            <p>Order Now for Jellylicious Sushi</p>
            <a href="#menu" class="order-btn">Order Now</a>

            <p>Treat yourself to the extraordinary - order now and relish the delightful world of Jelly Sushi!</p>
        </div>
            
        <div class="right-side">
            <img src="../src/images/landing-sushi.png">
        </div>
    `;
    landingPage.append(landingContent);

    // Create "About Us"
    const aboutPage = document.createElement('div');
    aboutPage.setAttribute('id', 'about');
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');
    aboutContent.innerHTML = `
        <div class="left-side">
            <img src="../src/images/about-sushi.png">
        </div>
        <div class="right-side">
            <h2>About Us</h2>
            <h3>Discover the Authenticity of Japanese Sushi</h3>
            <p>Step into the world of Jelly Sushi, a sanctuary for those seeking the genuine flavors of Japanese sushi. Rooted in the traditions of Japan, our culinary journey is inspired by the time-honored art of sushi making. Each dish on our menu is a testament to the meticulous craftsmanship and cultural richness of Japan, bringing an authentic taste to every bite.</p>
        </div>
    `;
    aboutPage.append(aboutContent);

    // Create "Feedback"
    const feedbackPage = document.createElement('div');
    feedbackPage.setAttribute('id', 'feedback');
    const feedbackTitle = document.createElement('h2');
    feedbackTitle.innerText = 'What Our Customers Say';
    const feedbackContent = document.createElement('div');
    feedbackContent.classList.add('feedbackContent');
    feedbackContent.innerHTML = `
        <div class="testimonial">
            <p>"Jelly Sushi delivers an exceptional sushi experience! The sushi is always fresh, and the ordering process is seamless. It's my go-to for a sushi fix at home!"</p>
            <p class="author">- Lisa T.</p>
        </div>

        <div class="testimonial">
            <p>"I love the convenience of ordering sushi from Jelly Sushi. The sushi quality is top-notch, and the delivery is quick. It's like having a sushi chef at my doorstep!"</p>
            <p class="author">- Michael R.</p>
        </div>

        <div class="testimonial">
            <p>"Jelly Sushi has mastered the art of sushi. The diverse menu options make it a standout choice for a sushi feast. Highly recommended!"</p>
            <p class="author">- Sarah H.</p>
        </div>
    `;
    feedbackPage.append(feedbackTitle, feedbackContent);

    // Create "Gallery"
    const galleryPage = document.createElement('div');
    galleryPage.setAttribute('id', 'gallery');
    const galleryTitle = document.createElement('h2');
    galleryTitle.innerText = 'Our Gallery';
    const galleryContent = document.createElement('div');
    galleryContent.classList.add('galleryContent');
    galleryContent.innerHTML = `
        <div class="gallery-item">
            <img src="../src/images/gallery-1.jpeg" alt="Gallery Image 1">
        </div>

        <div class="gallery-item">
            <img src="../src/images/gallery-2.jpeg" alt="Gallery Image 2">
        </div>

        <div class="gallery-item">
            <img src="../src/images/gallery-3.jpeg" alt="Gallery Image 3">
        </div>

        <div class="gallery-item">
            <img src="../src/images/gallery-4.jpeg" alt="Gallery Image 4">
        </div>

        <div class="gallery-item">
            <img src="../src/images/gallery-5.jpeg" alt="Gallery Image 5">
        </div>
    `;
    galleryPage.append(galleryTitle, galleryContent);

    // Input the home page elements into main
    homePage.append(landingPage, aboutPage, feedbackPage, galleryPage);
    main.append(homePage);
};

export default initHome;