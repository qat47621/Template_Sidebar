const sidebar = document.querySelector('.sidebar');
const openNav = document.querySelector('.open-icon');
const closeNav = document.querySelector('.close-icon');

const navbarOpen = () => {
    sidebar.style.display = 'block';
    sidebar.style.animation = 'sidebar-open var(--sidebar-slide-duration)';
    sidebar.style.transform = 'translate(-110%)';
    sidebar.style.animationFillMode = 'forwards';
}

const navbarClose = () => {
    
    sidebar.style.animation = 'sidebar-close var(--sidebar-slide-duration)';
    sidebar.style.transform = 'translate(0)';
    sidebar.style.animationFillMode = 'forwards';
    setTimeout(() => { sidebar.style.display = 'none' }, 300);
}

openNav.onclick = navbarOpen;
closeNav.onclick = navbarClose;