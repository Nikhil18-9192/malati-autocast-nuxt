<template>
  <div id="our-journey">
    <div class="title">
      <h1>Our Journey</h1>
    </div>
    <div class="journey-list">
      <div class="list">
        <ul>
          <li
            id="list"
            v-for="(item, i) in journey"
            :key="i"
            @mouseover="getItem(i)"
            :class="hover && itemIndex !== i ? 'hover' : ''"
            @mouseleave="hover = false"
          >
            <img src="/location.svg" alt="" />
            <h4>{{ item.year }}</h4>
            <div class="text">
              <h5>
                {{ item.name }}
              </h5>
              <p
                :class="hover && itemIndex == i ? 'dispnone' : 'dispblock'"
                class="list-title"
              >
                {{ item.title }}
              </p>
              <p
                :class="hover && itemIndex == i ? 'dispblock' : 'dispnone'"
                class="desc"
              >
                {{ item.desc }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="image">
        <img
          :class="hover ? 'dispblock' : 'dispnone'"
          src="/ourjourney.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      journey: [
        {
          year: '1970',
          name: 'Patil Engineering Works, Kolhapur.',
          title: 'Manufacturer of betel nut cutting machines.',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
        },
        {
          year: '1988',
          name: 'S.K.P. Industries, MIDC Shiroli.',
          title: 'Dedicated machining shop',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
        },
        {
          year: '1995',
          name: 'Malati Founders Pvt. Ltd. , Hatkanangle.',
          title: 'Manufacturer of C.I. graded castings',
          desc: `Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day`,
        },
        {
          year: '2000',
          name: 'Malati Enterprises, Hatkanangle. ',
          title: 'Dedicated machining shop',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
        },
        {
          year: '2002',
          name: 'Malati Enterprises, Hatkanangle. ',
          title: 'Dedicated machining shop',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
        },
      ],
      itemIndex: null,
    }
  },
  mounted() {},
  methods: {
    getItem(index) {
      this.hover = true
      this.itemIndex = index
    },
  },
}
</script>

<style lang="scss" scopped>
#our-journey {
  position: relative;
  width: 100%;
  padding: 0 $horizontalPadding;
  .title {
    h1 {
      font-family: 'Lora';
      font-weight: normal;
      font-size: 144px;
      color: #e0e0e0;
      text-align: right;
      margin: 90px 0;
    }
  }
  .journey-list {
    display: flex;
    .list {
      width: 60%;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: flex;
          min-height: 120px;
          cursor: default;
          margin-bottom: 60px;
          img {
            width: 30px;
            height: 42px;
          }
          h4 {
            font-weight: 500;
            font-size: 36px;
            margin: 0 30px 0 20px;
            min-width: 100px;
            letter-spacing: 0.095em;
          }
          .text {
            letter-spacing: 0.05em;
            h5 {
              font-weight: 500;
              font-size: 24px;
            }
            .list-title {
              font-weight: 500;
              font-size: 16px;
              color: #c6c6c6;
            }
            .desc {
              font-weight: 500;
              font-size: 16px;
              color: #000;
              line-height: 30px;
              max-width: 313px;
            }
          }
        }
      }
    }
  
    .image {
      width: 40%;
      img {
        width: 100%;
      }
    }
  }
  .hover {
    color: #c6c6c6;
  }
  .dispblock {
    display: block;
  }
  .dispnone {
    display: none;
  }
}
</style>
