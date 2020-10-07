// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-hOUmTiuJzXOxpmS2-twIRrfoa1MkT2g",
  authDomain: "vue-chatfcm.firebaseapp.com",
  databaseURL: "https://vue-chatfcm.firebaseio.com",
  projectId: "vue-chatfcm",
  storageBucket: "vue-chatfcm.appspot.com",
  messagingSenderId: "723731385078",
  appId: "1:723731385078:web:e02a10814fe7cd87807ad7",
  measurementId: "G-3ZLBTEPZTC",
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampInSnapshots: true});

export default firebaseApp.firestore();