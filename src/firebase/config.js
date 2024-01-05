import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';


    const firebaseConfig = {
        apiKey: "AIzaSyDKfkEtOo9kItqi6CAHFG7X52HJA_7NPfg",
        authDomain: "vue-blog-system-6189e.firebaseapp.com",
        projectId: "vue-blog-system-6189e",
        storageBucket: "vue-blog-system-6189e.appspot.com",
        messagingSenderId: "353502369248",
        appId: "1:353502369248:web:29eae248d7ea9037c0c785"
      };


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
let timestamp = serverTimestamp();

export { db,timestamp };