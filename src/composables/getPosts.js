import { ref } from "vue";
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../firebase/config"
let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
       
        // let response = await fetch("http://localhost:3000/posts")
        // if (response.status===404) {
        //   throw new Error("not found url");
        // }
        // let datas = await (response.json());
        // posts.value = datas;
        const postsCollection = collection(db, 'posts');
        const querySnapshot = await getDocs(postsCollection);
       
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