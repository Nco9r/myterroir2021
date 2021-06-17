<template>
  <section class="Newsletter">
    <div class="content_newsletter">
      <h3>Inscrivez vous à la Newsletter</h3>
      <p>Et recevez toutes nos actus et nos nouvelles offres.</p>
    </div>
    <form @submit="subscribe">
    <div class="cta_newsletter">
      <input
        type="text"
        placeholder="contact@my-terroir.fr"
        v-model="form.email"
      />
      <button>Soumettre</button>
    </div>
    </form>
    <div class="illus">
      <img src="~assets/img/png/illus.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: { email: '' }
    }
  },
  methods: {
    subscribe(e) {
      e.preventDefault()
      console.log({ ...this.form })
      this.$axios
        .post('https://apimyterroir.rouxnicolas.fr/subscribe', { ...this.form })
        .then((res) => (this.form = ''))
        .catch(e)
      this.error = true
    }
  }
}
</script>

<style>
.Newsletter {
  background-color: var(--orange);
  background-image: url('~assets/img/png/texture_mt.png');
  background-size: 70%;
  background-repeat: repeat;
  text-align: center;
}
.content_newsletter {
  padding: 50px 15px 20px 15px;
}

.content_newsletter h3 {
  color: var(--white);
  font-size: 28px;
  line-height: 40px;
}

.content_newsletter p {
  color: var(--white);
  font-size: 14px;
  line-height: 26px;
  padding: 0 20px;
}

.cta_newsletter input {
  border: none;
  background-color: var(--white);
  padding: 14px 18px;
  font-family: bodyBold, sans-serif;
  outline: none;
  border-radius: 0;
}

.cta_newsletter input::placeholder {
  font-family: bodyBold, sans-serif;
  opacity: 0.5;
}

.cta_newsletter button {
  border: none;
  background-color: var(--black);
  padding: 14px 18px;
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
  color: var(--white);
  outline: none;
  border-radius: 0;
  font-family: bodyBold, sans-serif;
}

.illus {
  margin-left: -100px;
  margin-top: 40px;
}

@media screen and (min-width: 1024px) {
  .Newsletter {
    background-color: var(--orange);
    background-image: url('~assets/img/png/texture_mt.png');
    background-size: 30%;
    background-repeat: repeat;
    text-align: center;
  }

  .cta_newsletter input {
    width: 300px;
  }

  .content_newsletter h3 {
    color: var(--white);
    font-size: 42px;
    line-height: 56px;
  }
}
</style>
