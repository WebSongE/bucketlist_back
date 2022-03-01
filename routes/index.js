var admin=require('firebase-admin');
var serviceAccount=require('../bucketlist-ef183-firebase-adminsdk-d8whw-334e8b23e8.json');

admin.initializeApp({
  credential:admin.credential.cert(serviceAccount)
});

module.exports=admin;