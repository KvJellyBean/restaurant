const sections = [
    {
        id: 'landingPage',
        content: `
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
        `
    },
    {
        id: 'about',
        content: `
        <div class="left-side">
            <img src="../src/images/about-sushi.png">
        </div>
        <div class="right-side">
            <h2>About Us</h2>
            <h3>Discover the Authenticity of Japanese Sushi</h3>
            <p>Step into the world of Jelly Sushi, a sanctuary for those seeking the genuine flavors of Japanese sushi. Rooted in the traditions of Japan, our culinary journey is inspired by the time-honored art of sushi making. Each dish on our menu is a testament to the meticulous craftsmanship and cultural richness of Japan, bringing an authentic taste to every bite.</p>
        </div>
        `
    },
    {
        id: 'feedback',
        content: `
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
        `
    },
    {
        id: 'gallery',
        content: `
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
        `
    }
]

// Initialize home
const initHome = () => {
    const main = document.querySelector('main');

    // Create home page (landing, about,feedback, gallery)
    const homePage = createFullElement('div', 'home');

    // Create all the section elements()
    sections.forEach(section => {
        const container = createFullElement('div', `${section.id}`, '', '');
        const innerContainer = createFullElement('div', '', `${section.id}Content`, `${section.content}`);
        const title = section.id == 'feedback' ? createSectionTitle('What Our Customers Say') :
            section.id == 'gallery' ? createSectionTitle('Our Gallery') : '';
        container.append(title, innerContainer);
        homePage.append(container);
    })

    // Input the home page elements into main
    main.append(homePage);
};

// Function create element include id, class, and its content
const createFullElement = (tag, id = '', className = '', content = '') => {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (className) element.classList.add(className);
    if (content) element.innerHTML = content;
    return element;
};

// Function to create title
const createSectionTitle = (title) => {
    const titleContainer = createFullElement('h2', '', 'title', `${title}`);
    return titleContainer;
};

export default initHome;
export { createSectionTitle };