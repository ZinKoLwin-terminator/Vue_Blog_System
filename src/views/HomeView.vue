<template>
  <div class="home">
  
    <PostList :posts="posts"></PostList>
 
 
  </div>
  
</template>

<script>
import PostList from '../components/PostList'
import { ref } from 'vue'



export default {
  components: { PostList },
  setup() {
    
    let posts = ref([
      { title: "post title 1", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod perferendis sint numquam quaerat iusto eos debitis, a ratione officia? Beatae est quam, ab adipisci cupiditate, veritatis ratione, totam pariatur velit a quas molestias deserunt veniam accusamus explicabo? Aliquid quos excepturi ducimus, quaerat tempore officiis numquam! Soluta sequi placeat odio odit, ratione nemo vel quia sit culpa quod, esse tempora exercitationem incidunt cupiditate libero cumque amet impedit magnam saepe officiis ullam vitae suscipit sed! Eligendi, ducimus illum! Suscipit, blanditiis? Tempora exercitationem quod sint maxime minus corrupti quos sit ipsa labore laboriosam itaque debitis, ab dolor! Accusamus accusantium quo, sunt mollitia numquam sed optio culpa exercitationem perferendis, sit dolore quis explicabo. Consequuntur eaque facere quidem repellat voluptatum nam debitis animi ex rerum cumque ipsum assumenda provident praesentium magnam similique ipsa, voluptatem eius a rem nemo id! Cumque a accusantium quis quibusdam mollitia vel, fugiat minima, natus culpa eius odio? Impedit maiores tempore iusto laboriosam? Sequi nulla facere placeat ratione iusto ut officia magni impedit sed qui blanditiis repellendus reprehenderit, corrupti, sit nihil minima aliquid voluptas repellat assumenda tempora? Et neque omnis voluptas quibusdam nisi, fuga ad! Ducimus reiciendis placeat, incidunt repellat cumque beatae. Illum repellat soluta reprehenderit labore accusamus nemo recusandae.", id: 1 },
      {title:"post title 2",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod perferendis sint numquam quaerat iusto eos debitis, a ratione officia? Beatae est quam, ab adipisci cupiditate, veritatis ratione, totam pariatur velit a quas molestias deserunt veniam accusamus explicabo? Aliquid quos excepturi ducimus, quaerat tempore officiis numquam! Soluta sequi placeat odio odit, ratione nemo vel quia sit culpa quod, esse tempora exercitationem incidunt cupiditate libero cumque amet impedit magnam saepe officiis ullam vitae suscipit sed! Eligendi, ducimus illum! Suscipit, blanditiis? Tempora exercitationem quod sint maxime minus corrupti quos sit ipsa labore laboriosam itaque debitis, ab dolor! Accusamus accusantium quo, sunt mollitia numquam sed optio culpa exercitationem perferendis, sit dolore quis explicabo. Consequuntur eaque facere quidem repellat voluptatum nam debitis animi ex rerum cumque ipsum assumenda provident praesentium magnam similique ipsa, voluptatem eius a rem nemo id! Cumque a accusantium quis quibusdam mollitia vel, fugiat minima, natus culpa eius odio? Impedit maiores tempore iusto laboriosam? Sequi nulla facere placeat ratione iusto ut officia magni impedit sed qui blanditiis repellendus reprehenderit, corrupti, sit nihil minima aliquid voluptas repellat assumenda tempora? Et neque omnis voluptas quibusdam nisi, fuga ad! Ducimus reiciendis placeat, incidunt repellat cumque beatae. Illum repellat soluta reprehenderit labore accusamus nemo recusandae.",id:2},
    ])

    return { posts };
  }
 
}
</script>
