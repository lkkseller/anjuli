<template>
  <div>
    <div id="qrCode" ref="qrCodeDiv"></div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
  export default {
    name: "qrCode",
    data() {
      return {}
    },
    mounted: function () {
      this.$nextTick(function () {
        this.bindQRCode();
      })
    },
    methods: {
      bindQRCode: function () {
        new QRCode(this.$refs.qrCodeDiv, {
          text: 'https://www.baidu.com',
          width: 200,
          height: 200,
          colorDark: "#333333", //二维码颜色
          colorLight: "#ffffff", //二维码背景色
          correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
        })
      }
    }
  }
</script>

<style scoped>

</style>