export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('usersignin'));
    // get token from cookie
    const token = document.cookie.split(';').find(row => row.trim().startsWith('x-access-token')).split('=')[1];


    if (user && token) {
        return { 'x-access-token': token };
    } else {
        return {};
    }

    // if (user && user.accessToken) {
    //     // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    //     return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    // } else {
    //     return {};
    // }
}

