<!--<template>-->
<!--&lt;!&ndash;  <object src="/menu.pdf" width="100%" height="100%" type="application/pdf">&ndash;&gt;-->
<!--    <object data="/menu.pdf" type="application/pdf" width="100%" height="100%">-->
<!--&lt;!&ndash;      <embed src="/menu.pdf" type="application/pdf">&ndash;&gt;-->
<!--    </object>-->
<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <embed src="/menu.pdf" width="500" height="375">&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    <pdf&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        v-for="i in numPages"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        :key="i"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        :src="src"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        :page="i"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        style="display: inline-block; width: 25%"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;    ></pdf>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--import pdf from 'vue-pdf'-->
<!--var loadingTask = pdf.createLoadingTask('/menu.pdf');-->

<!--export default {-->
<!--  name: "PdfView",-->
<!--  components: {-->
<!--    // pdf-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      src: loadingTask,-->
<!--      numPages: undefined,-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->

<!--    this.src.promise.then(pdf => {-->

<!--      this.numPages = pdf.numPages;-->
<!--    });-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.carousel {-->
<!--  background-color: #606f7b;-->
<!--}-->
<!--</style>-->