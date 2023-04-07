// Use this middleware for protected routes. Redirects to /login if the user is not
// logged in.
const withAuth = (req, res, next) => {
  {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  


  // // Proceed to next middelware/route handler if user is logged in
  // if (req.session.isLoggedIn) {
  //   return next();
  // }

  // if user is not logged in and path begins with "/api", send a 401 error
  // code. Uses a regex to check if route path starts with "/api".
  if (req.baseUrl.match(/^\/api/)) {
    return res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }

  // Redirect to the login page for all other requests
  return res.redirect('/login');
};

module.exports = withAuth;  
