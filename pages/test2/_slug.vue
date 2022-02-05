<template>
  <div>
    <nuxt-content :document="page"/>
  </div>
</template>

<script>

export default {
  async asyncData({$content, params, error}) {
    try {
      const slug = params.slug || "index";
      const page = await $content('articles/' + slug).fetch();

      return {
        page
      }
    } catch (e) {
      error({statusCode: 404});
    }
  }
}

</script>
