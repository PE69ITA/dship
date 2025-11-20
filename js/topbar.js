function createTopBar() {
    const topbar = document.createElement('div');
    topbar.className = 'topbar';

    // Left links
    const left = document.createElement('div');
    left.className = 'topbar-left';

    const contactLink = document.createElement('a');
    contactLink.href = '/dealershipsafe/contact.html';
    contactLink.textContent = 'Contact';

    const carsLink = document.createElement('a');
    carsLink.href = '/dealershipsafe/allcars.html';
    carsLink.textContent = 'All Cars';

    left.append(contactLink, carsLink);

    // Logo center
    const logoWrapper = document.createElement('div');
    logoWrapper.className = 'topbar-logo';

    const logoLink = document.createElement('a');
    logoLink.href = '/dealershipsafe/index.html';

    const logoImg = document.createElement('img');
    logoImg.src = './assets/logo.png';
    logoImg.alt = 'Logo';

    logoLink.appendChild(logoImg);
    logoWrapper.appendChild(logoLink);

    topbar.append(left, logoWrapper);

    // Insert at top
    document.body.prepend(topbar);
}
