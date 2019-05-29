const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: "uaisureadzlkcfh" }, (err, tunnel) => {
  console.log('LT running');
});