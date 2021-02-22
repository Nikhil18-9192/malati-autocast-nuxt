<template>
  <div id="team">
    <Legend class="legend" :title="title" />
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
            <img src="ceo_profile.jpg" alt="" />
          </div>
          <div class="right">
            <h5>Shruti Patil</h5>
            <p class="designation">Chief Executive Officer</p>
            <hr />
            <p class="desc">
              Engineer turned entrepreneur who is determined to create a culture
              of comradery, responsibility and professionalism.
            </p>
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
          </li>
        </ul>
      </div>
    </div>
    <div class="employee-services">
      <h4 data-aos="fade-right">Employees Service</h4>
      <EmployeeServices data-aos="fade-up" />
      <ul class="pdf-section">
        <li v-for="item in btnTitle" :key="item.text" data-aos="fade-up">
          <PdfButton class="pdf-btn" :text="item.text" :pdfUrl="item.url" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { advisorTeam } from '@/utils'
export default {
  name: 'TeamPage',
  data() {
    return {
      title: {
        img: '/infra1.jpg',
        name: 'Team & Career',
      },
      btnTitle: [
        {
          text: 'Malati Autocast - Sustainability 2020-2021',
          url:
            'https://firebasestorage.googleapis.com/v0/b/formec-tests.appspot.com/o/Malati%20Autocast%20-%20Sustainability%202020-2021.pdf?alt=media&token=a4a9f0ec-e906-405b-b040-ae6253fdc92f',
        },
        {
          text: 'Policy on Safety from Communicable Disease',
          url:
            'https://firebasestorage.googleapis.com/v0/b/formec-tests.appspot.com/o/Policy%20on%20Safety%20from%20Communicable%20Disease.pdf?alt=media&token=2fe53c5c-18da-45c9-8199-317559a5773c',
        },
        {
          text: 'Policy on Environment Health & Safety',
          url:
            'https://firebasestorage.googleapis.com/v0/b/formec-tests.appspot.com/o/Policy%20on%20Environment%20Health%20%26%20Safety.pdf?alt=media&token=7e2bd277-6cdb-4d93-a856-454b6d7012f1',
        },
        {
          text: 'Policy on Child Protection and Prevention of Child Labour',
          url:
            'https://firebasestorage.googleapis.com/v0/b/formec-tests.appspot.com/o/Policy%20on%20Child%20Protection%20and%20Prevention%20of%20Child%20Labour.pdf?alt=media&token=19937ae9-d105-49c0-b6df-e3d33c81ecfa',
        },
      ],
    }
  },
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
  .legend {
    margin-bottom: 190px;
    @include for-phone-only {
      margin-bottom: 95px;
    }
    @include for-tablet-only {
      margin-bottom: 130px;
    }
  }

  .hero {
    z-index: 100;
    position: absolute;
    top: 505px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 15px;
      top: 305px;
    }
    @include for-tablet-only {
      padding: 0 60px;
      top: 445px;
    }
    img {
      width: 100%;
      max-width: 900px;
      object-fit: contain;
      border-radius: 4px;
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
            border-radius: 4px;
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
            @include for-phone-only {
              margin: 8px 0;
            }
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
        @include for-tablet-only {
          grid-template-columns: auto auto;
        }
        .card {
          @include for-phone-only {
            margin-bottom: 24px;
          }
          .image {
            width: 100%;
            border: 25px solid rgb(221, 221, 221);
            border-radius: 4px;
            height: 417px;
            @include for-phone-only {
              width: 70%;
              height: 70%;
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
            @include for-phone-only {
              margin: 8px 0;
            }
            @include for-tablet-only {
              margin: 10px 0;
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
        }
      }
    }
  }
  .employee-services {
    position: relative;
    width: 100%;

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
    .pdf-section {
      margin: 30px 0 50px 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;
      border-radius: 4px;
      @include for-phone-only {
        grid-template-columns: auto;
      }
      .pdf-btn {
        background: #f4f4f4;
      }
    }
  }
}
</style>
