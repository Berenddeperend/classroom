const ghpages = require('gh-pages');
ghpages.publish('dist', {
  repo: `git@github.com:Berenddeperend/classroom.git`
}, function(err) {
  if(err) {
    console.log('err: ', err);
  } else {
    console.log('uploaded succesful.')
  }
});