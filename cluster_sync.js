const admin = require('firebase-admin');
if(!admin.apps.length){admin.initializeApp({credential:admin.credential.cert(JSON.parse(process.env.FIREBASE_KEY))});}
const db = admin.firestore();
async function sync(){ await db.collection('cluster_nodes').doc('swarm-node-971737').set({status:'ACTIVE', last_ping: new Date().toISOString()}, {merge:true}); }
sync();