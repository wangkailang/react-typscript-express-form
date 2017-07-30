const ghPages = require('gh-pages');
const path = require('path');

ghPages.publish(
  path.join(process.cwd(), 'build'), {
    dest: 'static/react-typscript-express-form/',
  }, {
    depth: 1,
    logger: function (msg) {
      console.log(msg);
    }
  }, function (err) {
    if (err) throw err;
    console.log('Site has been published.');
  }
);