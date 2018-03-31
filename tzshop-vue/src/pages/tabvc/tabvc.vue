<template>
  <div>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from '@/components/footer/footer';

  export default {
    components: {
      'v-footer': footer
    }
  };
</script>
