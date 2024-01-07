const initContact = () => {
    const main = document.querySelector('main');

    // Create contact page(info and form)
    const contactPage = document.createElement('div');
    contactPage.setAttribute('id', 'contact');

    // Create the title
    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('title');
    contactTitle.innerText = 'Contact';

    // Create the contact details
    const contactDetail = document.createElement('div');
    contactDetail.classList.add('contactDetail');
    contactDetail.innerHTML = `
        <div class="contactInfo">
            <h3>Contact & Information</h3>

            <div class="contactPerson">
                <h4>Contact our kitchen</h4>
                <p>+123456789</p>
                <p>jellysushi@gmail.com</p>
            </div>
            
            <div class="information">
                <h4>Open Hours</h4>
                <table>
                    <tr>
                        <td>Mon-Fri</td>
                        <td>10:00 AM - 08:00 PM</td>
                    </tr>
                    <tr>
                        <td>Sat</td>
                        <td>12:00 PM - 08:00 PM</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <form class="contactForm">
            <h3>Get in touch</h3>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Your Message:</label>
            <input type="text" id="message" name="message" required></input>

            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    `;

    // Input the contact page elements into main
    contactPage.append(contactTitle, contactDetail);
    main.append(contactPage);
};

export default initContact;  