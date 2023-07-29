<template>
  <div class="button" :style="buttonStyle">
    <div class="buttonContainer">
      <img :src="buttonImg"/>
      <span class="buttonText">{{ buttonText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeButton',
  data: () => {
    return {
      bg1: 'background: linear-gradient(180deg, #EBBFF2 0%, #BFAD7F 100%)',
      bg2: 'background: linear-gradient(180deg, #BFAD7F 0%, #FCA6B6 100%)',
      bg3: 'background: linear-gradient(180deg, #CECCF1 0%, #1ACAFF 100%)',
      bg4: 'background: linear-gradient(180deg, #CECCF8 0%, #99CAFF 55.73%)',
      bg5: 'background: #7BC0CE',
      bg6: 'background: linear-gradient(180deg, #EBBFF2 0%, #BFAD7F 100%)',
      bg7: 'background: linear-gradient(180deg, #CECCF8 36%, #72B6FF 80%)',
      bg8: 'background: #E48E0C',

    }
  },
  props: {
    buttonImg: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: '1',
      required: true,
    },
  },
  computed: {
    buttonStyle() {
      switch (this.variant) {
        case '1':
          return this.bg1
        case '2':
          return this.bg2
        case '3':
          return this.bg3
        case '4':
          return this.bg4
        case '5':
          return this.bg5
        case '6':
          return this.bg6
        case '7':
          return this.bg7
        case '8':
          return this.bg8
      }
    },
  },
}
</script>
<style >
.button {
  position: relative;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  transition: all 0.5s ease;
}

.button img {
  object-fit: cover;
  width: 60px;
  height: 70px;
}

.button:hover {
  cursor: pointer;
  backdrop-filter: brightness(105%);
  scale: 1.05;
}

.buttonText {
  font-weight: bold;
  text-shadow: 0px 0px 6px 0px #000;
}
.buttonContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
