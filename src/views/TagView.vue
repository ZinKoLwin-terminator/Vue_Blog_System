<template>
  <div v-if="error">
    <p>{{ error }}</p>

  </div>
  <div v-if="posts.length">
   <PostList :posts="filterPosts"></PostList>
  </div>
  <div v-else>
loading...
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts'
export default {
  components: { PostList },
   
    props: ["tag"],
    setup(props) {
        let { posts, error, load } = getPosts();
        load();
        let filterPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag);
            })
        })
        return { posts, error,filterPosts };
    }
}
</script>

<style>

</style>