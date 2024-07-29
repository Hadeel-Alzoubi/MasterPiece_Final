// document.addEventListener('DOMContentLoaded', (event) => {
//     // Check login status and update the navbar accordingly
//     updateNavbar();

//     // Event listener for logout
//     const logoutBtn = document.getElementById('logout');
//     if (logoutBtn) {
//         logoutBtn.addEventListener('click', () => {
//             localStorage.removeItem('loggedIn');
//             window.location.href = 'index.html';
//         });
//     }
// });

// function updateNavbar() {
//     const isLoggedIn = localStorage.getItem('loggedIn');
//     const inSection = document.getElementById('in');
//     const logoutBtn = document.getElementById('logout');

//     if (isLoggedIn) {
//         if (inSection) inSection.style.display = 'none';
//         if (logoutBtn) logoutBtn.style.display = 'inline';
//     } else {
//         if (inSection) inSection.style.display = 'inline';
//         if (logoutBtn) logoutBtn.style.display = 'none';
//     }
// }
// auth.js

function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    const userRole = localStorage.getItem('role');

    if (loggedIn) {
        if (userRole === 'admin') {
            document.getElementById('adminDashboardLink').style.display = 'inline';
            document.getElementById('in').style.display = 'none';
            document.getElementById('logout').style.display = 'inline';
        } else {
            document.getElementById('in').style.display = 'none';
            document.getElementById('logout').style.display = 'inline';
        }
    } else {
        document.getElementById('in').style.display = 'inline';
        document.getElementById('logout').style.display = 'none';
    }
}

function handleLogout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('role');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);
document.getElementById('logout').addEventListener('click', handleLogout);
