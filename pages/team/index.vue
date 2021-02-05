<template>
  <div id="team">
    <div class="title">
      <h1 data-aos="fade-left">Career & Team</h1>
    </div>
    <div class="hero" data-aos="fade-up">
      <img src="/team.jpg" alt="" />
      <p>
        Our team of passionate individuals coming together to create quality
        casting products for a wide range of industries."
      </p>
    </div>
    <div class="container">
      <div class="leadership">
        <h4 data-aos="fade-right">LEADERSHIP</h4>
        <div class="profile" data-aos="fade-up">
          <div class="left">
            <img src="leader.jpg" alt="" />
          </div>
          <div class="right">
            <h5>Shruti Patil</h5>
            <p class="designation">Chief Executive Officer</p>
            <hr />
            <p class="desc">
              Engineer turned entrepreneur who is determined to create a culture
              of comradery, responsibility and professionalism.
            </p>
            <button>
              <img src="linkedin1.svg" alt="" />
              <p>View Profile</p>
            </button>
          </div>
        </div>
      </div>
      <div class="advisory">
        <h4 data-aos="fade-right">Advisory Council</h4>
        <ul class="advisor-cards">
          <li
            v-for="(item, i) in advisors"
            :key="i"
            class="card"
            data-aos="fade-up"
            :data-aos-delay="i * 200"
          >
            <img class="image" :src="item.src" alt="" />
            <h5>{{ item.name }}</h5>
            <p class="designation">{{ item.designation }}</p>
            <hr />
            <p class="desc">{{ item.desc }}</p>
            <button><img src="linkedin1.svg" alt="" /> View Profile</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="employee-services">
      <h4 data-aos="fade-right">Employees Service</h4>
    </div>
  </div>
</template>

<script>
import { advisorTeam } from '@/utils'
export default {
  name: 'TeamPage',
  computed: {
    advisors() {
      return advisorTeam
    },
  },
}
</script>

<style lang="scss" scoped>
#team {
  position: relative;
  width: 100%;
  height: 100%;
  .title {
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 15px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
    h1 {
      font-family: 'Lora';
      font-weight: normal;
      font-size: 144px;
      color: #e0e0e0;
      text-align: right;
      margin: 90px 0 0 0;
      padding-bottom: 130px;
      @include for-phone-only {
        font-size: 46px;
        padding-bottom: 15px;
      }
      @include for-tablet-only {
        font-size: 80px;
        padding-bottom: 70px;
      }
    }
  }
  .hero {
    z-index: 100;
    position: absolute;
    top: 250px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 15px;
      top: 110px;
    }
    @include for-tablet-only {
      padding: 0 60px;
      top: 135px;
    }
    img {
      width: 100%;
      max-width: 900px;
      object-fit: contain;
    }
    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      max-width: 780px;
      margin: 0 auto;
      padding-top: 40px;
      @include for-phone-only {
        padding-top: 15px;
      }
    }
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    .leadership {
      padding: 500px 135px 0 135px;
      margin-top: 75px;
      @include for-phone-only {
        padding: 310px 15px 0 15px;
      }
      @include for-tablet-only {
        padding: 365px 60px 0 60px;
      }
      h4 {
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 98%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-bottom: 40px;
        @include for-phone-only {
          font-size: 28px;
        }
      }
      .profile {
        display: flex;
        padding-bottom: 100px;
        @include for-phone-only {
          flex-direction: column;
          padding-bottom: 70px;
        }
        .left {
          width: 30%;
          margin-right: 45px;
          @include for-phone-only {
            width: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .right {
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          @include for-phone-only {
            width: 100%;
          }
          h5 {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.05em;
            color: #090909;
          }
          .designation {
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: #828282;
            letter-spacing: 0.05em;
            margin-top: 10px;
          }
          hr {
            background: $primary;
            width: 48px;
            height: 5px;
            float: left;
            border: none;
            margin: 24px auto 24px 0;
            @include for-tablet-only {
              margin: 10px auto 10px 0;
            }
          }
          .desc {
            max-width: 390px;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;
            color: #090909;
          }
          button {
            width: 197px;
            height: 45px;
            background: #0077b7;
            border-radius: 2px;
            border: none;
            color: #fff;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-top: 43px;
            margin-bottom: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            @include for-tablet-only {
              margin-top: 30px;
            }
            cursor: pointer;
            img {
              margin-right: 7px;
              object-fit: contain;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
    .advisory {
      padding: 0 135px 80px 135px;
      @include for-phone-only {
        padding: 0 15px 30px 15px;
      }
      @include for-tablet-only {
        padding: 0 60px 60px 60px;
      }
      h4 {
        font-family: Lora;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 98%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-bottom: 40px;
        @include for-phone-only {
          font-size: 28px;
        }
      }
      .advisor-cards {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 30px;
        @include for-phone-only {
          grid-template-columns: auto;
        }
        .card {
          .image {
            width: 100%;
            border: 25px solid rgb(221, 221, 221);
            @include for-phone-only {
              width: 70%;
            }
          }
          h5 {
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.05em;
            color: #090909;
            padding-top: 20px;
          }
          .designation {
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: #828282;
            letter-spacing: 0.05em;
            margin-top: 10px;
          }
          hr {
            background: $primary;
            width: 48px;
            height: 5px;
            border: none;
            margin: 24px 0 24px 0;
            @include for-tablet-only {
              margin: 10px auto 10px 0;
            }
          }
          .desc {
            max-width: 390px;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;
            color: #090909;
          }
          button {
            width: 197px;
            height: 45px;
            background: #0077b7;
            border-radius: 2px;
            border: none;
            color: #fff;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            margin-top: 43px;
            margin-bottom: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            @include for-tablet-only {
              margin-top: 30px;
            }
            cursor: pointer;
            img {
              margin-right: 7px;

              object-fit: contain;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
  }
  .employee-services {
    position: relative;
    width: 100%;
    height: 500px;
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 15px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
    h4 {
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 98%;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 40px;
      padding-top: 60px;
      @include for-phone-only {
        font-size: 28px;
        padding-top: 30px;
      }
    }
  }
}
</style>
