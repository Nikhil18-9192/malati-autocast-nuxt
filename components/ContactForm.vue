<template>
  <div id="contact-form">
    <input type="text" v-model="name" placeholder="Name" />
    <input type="text" v-model="company" placeholder="Company" />
    <input type="number" v-model="mobile" placeholder="Mobile" />
    <input type="email" v-model="email" placeholder="Email" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import { formValidation } from '@/utils/validation'
export default {
  name: 'contactForm',
  data() {
    return {
      name: '',
      company: '',
      mobile: '',
      email: '',
    }
  },
  methods: {
    submit() {
      const { name, company, mobile, email } = this
      const validation = formValidation({
        name,
        company,
        mobile,
        email,
      })
      if (validation.error) {
        this.$toast.error(validation.error.message)
        return
      }
      this.submitToServer()
        .then(() => {
          this.$toast.success(
            'Thank you for contacting us, we will respond to you shortly!'
          )
        })
        .catch(() => {
          this.$toast.error('Fields Cannot Be Empty')
        })
    },
    submitToServer() {
      const data = {
        payload: {
          client: 'Malati Autocast',
          name: this.name,
          company: this.company,
          mobile: this.mobile,
          email: this.email,
        },
      }
      return this.$axios.$post(
        `https://formec-mail-api.vercel.app/notify`,
        data
      )
    },
  },
}
</script>

<style lang="scss" scopped>
#contact-form {
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border-bottom: 0.5px solid #2f2f2f;
    background: $primary;
    padding: 10px;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 300;
    &::placeholder {
      color: #2f2f2f;
    }
  }
  button {
    position: relative;
    width: 152px;
    height: 50px;
    background: transparent;
    border: 1px solid #000;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    z-index: 10;
    transition: 0.2s ease all;
    outline: none;
    letter-spacing: 0.1em;
    overflow: hidden;
    @include for-phone-only {
      width: 100%;
    }

    &::after {
      content: '';
      width: 100%;
      position: absolute;
      height: 100%;
      background: rgb(65, 65, 65);
      left: -100%;
      top: 0;
      transition: 0.3s ease all;
      color: white;
      z-index: -1;
    }

    &:hover {
      border-color: transparent;
      color: rgba(255, 255, 255, 0.719);
      &::after {
        left: 0;
      }
    }
  }
}
</style>
