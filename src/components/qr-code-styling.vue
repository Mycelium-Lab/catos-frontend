<template>
    <div class="qr-code" ref="qrCodeContainer"></div>
</template>
  
<script lang="ts" setup>
  import { ref, watch, onMounted, computed, defineProps } from 'vue';
  import QRCodeStyling from 'qr-code-styling';
  const props = defineProps<{
    data: string
  }>()
  const data = ref('')
  
  const options = {
    width: 240,
    height: 240,
    // image: imgSrc,
    type: 'svg',
    dotsOptions: {
      color: '#000000',
      type: 'rounded'
    },
    //imageOptions: {
    //  crossOrigin: 'anonymous',
    //  margin: 5
    //},
    cornersSquareOptions: {
      type: 'extra-rounded'
    }
  }
  
  const qrCode = ref<null | QRCodeStyling>(null)
  const qrCodeContainer = ref<undefined | HTMLDivElement>()
  onMounted(() => {
    qrCode.value = new QRCodeStyling(options as any);
    qrCode.value.update({
      data: props.data
    });
    qrCode.value.append(qrCodeContainer.value);
  })
  
  watch(
    () => props.data,
    () => {
        if (qrCode.value)
        qrCode.value.update({
            data: props.data
        })
    }
  )
  </script>
  
  <style scoped>
  .qr-code {
    width: 15em;
    height: 15em;
  }
  </style>