<template>
  <div>
    <SliderVerify ref="SliderVerifyRef"></SliderVerify>
  </div>
</template>
<script setup>
  import { ref } from "vue";

  const SliderVerifyRef = ref();
  defineOptions({
    name: "App",
  })
</script>

