const { ref } = require("vue");
import { doc, getDoc } from 'firebase/firestore';
import {db} from "../firebase/config"
let getPost=(id)=>{
    let post=ref(null);
    let error=ref("");

    let load=async()=>{
        try {
            const postDocRef = doc(db, 'posts', id);
            const postDocSnapshot = await getDoc(postDocRef);
    
            if (postDocSnapshot.exists()) {
                post.value = { id:postDocSnapshot.id, ...postDocSnapshot.data() };
            } else {
              console.log('Document does not exist');
            }
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load};
}

export default getPost;