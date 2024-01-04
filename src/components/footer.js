const initFooter = () => {
    const content = document.querySelector('.content');
    const footerTag = document.querySelector('footer');

    footerTag.innerHTML = 'Made with &hearts; by&nbsp;<a href="https://github.com/KvJellyBean"> KvJellyBean</a>';

    content.append(footerTag);
};

export default initFooter;