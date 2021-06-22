<template>
  <section class="Newsletter">
    <div class="content_newsletter">
      <h3>Inscrivez vous à la Newsletter</h3>
      <p>Et recevez toutes nos actus et nos nouvelles offres.</p>
    </div>
    <form @submit="subscribe">
      <div class="cta_newsletter">
        <input
        required
          type="text"
          placeholder="contact@my-terroir.fr"
          v-model="form.email"
        />
        <button v-if="state">Soumettre</button>
        <button class="loading" v-if="loading">En cours</button>
      </div>
      <p class="goodNews" v-if="goodNews">
        Vous avez été enregistré à notre newsletter !
      </p>
      <p class="error" v-if="error">
        Oups, veuillez ressayer ultérieurement ou contacter le support !
      </p>
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
      form: { email: '' },
      loading: false,
      state: true,
      goodNews: false,
      error: false
    }
  },
  methods: {
    subscribe(e) {
      e.preventDefault()
      console.log({ ...this.form })
      ;(this.loading = true), (this.state = false)
      this.$axios
        .post('https://apimyterroir.rouxnicolas.fr/subscribe', { ...this.form })
        .then(
          (res) => (
            (this.form = ''),
            (this.loading = false),
            (this.state = true),
            (this.goodNews = true)
          )
        )
        .catch((error) => {
          ;(this.error = true),
            (this.form = ''),
            (this.loading = false),
            (this.state = true)
        })
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

.loading {
  pointer-events: none;
  opacity: 0.5;
}
.content_newsletter h3 {
  color: var(--white);
  font-size: 28px;
  line-height: 40px;
}

.goodNews {
  background-color: rgb(206, 255, 206);
  color: green;
  width: 300px;
  padding: 10px 15px;
  margin: 20px auto;
}

.error {
  background-color: rgb(255, 206, 206);
  color: rgb(128, 0, 0);
  width: 300px;
  padding: 10px 15px;
  margin: 20px auto;
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
  cursor: pointer;
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
