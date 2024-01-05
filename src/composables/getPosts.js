import { ref } from "vue";
import { collection, getDocs,orderBy ,query  } from 'firebase/firestore';
import {db} from "../firebase/config"
let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
       
        const postsCollection = collection(db, 'posts');
        const orderedQuery = query(postsCollection, orderBy('created_at', 'desc'));
        const querySnapshot = await getDocs(
          orderedQuery
        );
       
        posts.value = querySnapshot.docs.map((doc) => {
          return {id:doc.id,...doc.data()}
        });
        // console.log(querySnapshot.docs.map(doc => doc.data()));
        // console.log(querySnapshot.docs.map(doc => doc.id));
        
      } catch (err) {
        error.value = err.message;
      }
    }  

    return { posts, error,load };
}

export default getPosts;