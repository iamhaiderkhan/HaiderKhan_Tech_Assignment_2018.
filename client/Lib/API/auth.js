export const userLogin = (credentials) => {
  let email = localStorage.getItem('email');
  let password = localStorage.getItem('password');
  if ((credentials.email === email) && (credentials.password === password)) {
    localStorage.setItem('authentication', 'bayt');
    console.log('------------------------------------');
    console.log("loggedIn");
    console.log('------------------------------------');
    return true;
  } else {

    console.log('------------------------------------');
    console.log("notLoggedIn");
    console.log('------------------------------------');
    return false
  }
}


export const Logout = () => {
  localStorage.setItem('authentication', '');
}

export const isLoggedIn = () => {
  if (localStorage.getItem('authentication')) {
    return true
  } else {
    false
  }
}