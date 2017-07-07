const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/collectionNameHere', {
    useMongoClient: true
  });

  mongoose.connection
    .once('open', () => {
      console.log('********** Connected to test db ***********');
      done()
    })
    .on('error', err => {
      console.warn('Warning', error);
    });

});

beforeEach(done => {
  // drop test db here
});
