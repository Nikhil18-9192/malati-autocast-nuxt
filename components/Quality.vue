<template>
  <div id="quality">
    <div class="container">
      <h1>Quality</h1>
      <div class="card-container">
        <div v-for="(item, i) in tests" :key="i" class="card">
          <div class="text">
            <h3>{{ item.title }}</h3>
            <p v-for="(point, j) in item.features" :key="j">
              {{ point }}
            </p>
          </div>
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        {
          title: 'Spectromenter',
          features: [
            'Our plant is equipped with spectrometer from Spectro India',
            'Model is "SPECTRO LAB"',
            'Analysis of 30 elements along with Nitrogen and Oxygen is Possible',
            'It has higher accuracy with 750 mm wavelength',
          ],
          img: '/spectrometer.png',
        },
        {
          title: 'Metallurgical Microscope',
          features: [
            'Our plant is equipped with spectrometer from Spectro India',
            'Model is "SPECTRO LAB"',
            'Analysis of 30 elements along with Nitrogen and Oxygen is Possible',
            'It has higher accuracy with 750 mm wavelength',
          ],
          img: '/microscopy.png',
        },
        {
          title: 'Optical Pyrometer',
          features: [
            'Our plant is equipped with spectrometer from Spectro India',
            'Model is "SPECTRO LAB"',
            'Analysis of 30 elements along with Nitrogen and Oxygen is Possible',
            'It has higher accuracy with 750 mm wavelength',
          ],
          img: '/infrared_thermometers.png',
        },
        {
          title: 'Hardness Tester',
          features: [
            'Our plant is equipped with spectrometer from Spectro India',
            'Model is "SPECTRO LAB"',
            'Analysis of 30 elements along with Nitrogen and Oxygen is Possible',
            'It has higher accuracy with 750 mm wavelength',
          ],
          img: '/spectrometer.png',
        },
        {
          title: 'Others',
          features: [
            'Our plant is equipped with spectrometer from Spectro India',
            'Model is "SPECTRO LAB"',
            'Analysis of 30 elements along with Nitrogen and Oxygen is Possible',
            'It has higher accuracy with 750 mm wavelength',
          ],
          img: '/spectrometer.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#quality {
  position: relative;
  background: #f4f4f4;
  padding: 64px 136px;
  .container {
    position: relative;
    h1 {
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 98%;
      letter-spacing: 0.05em;

      color: #000000;
      margin-bottom: 64px;
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .card {
        position: relative;
        width: 345px;
        height: 564px;
        background: white;
        margin: 24px;
        .text {
          padding: 24px;
          h3 {
            font-family: 'Quicksand';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.16em;
            color: #d6a577;

            margin-bottom: 55px;
          }
          p {
            font-family: Quicksand;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;

            color: #090909;
            margin-bottom: 16px;

            &::before {
              content: ' ';
              display: inline-block;
              border-radius: 50%;
              background: #000;
              width: 5px;
              height: 5px;
              margin-right: 8px;
              margin-bottom: 2px;
            }
          }
        }
        img {
          position: absolute;
          width: 290px;
          height: 254px;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
}
</style>
