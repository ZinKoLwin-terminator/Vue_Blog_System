<template>
 <div class="tag">
  <div v-if="error">
    <p>{{ error }}</p>

  </div>
  <div v-if="posts.length" class="layout">
  <div>
    <PostList :posts="filterPosts"></PostList>
  </div>
  <div>
    <TagCloud :posts="posts"></TagCloud>
  </div>
  </div>
  <div v-else>
loading...
  </div>
 </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '../components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts'
export default {
  components: {
    TagCloud, PostList },
   
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
.tag{
  max-width: 1200px;
  margin: 0 auto;
}
</style>