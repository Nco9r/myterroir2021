<template>
  <div>
    <transition name="overlay" appear>
      <div class="overlay" v-if="active_devis"></div>
    </transition>
    <div class="devis_mobile">
      <div class="intro" @click="active_devis = !active_devis">
        <p>Obtenir un devis en deux clics</p>
        <p class="fleche_bottom" :class="{ fleche_top: active_devis }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.242"
            height="16.215"
            viewBox="0 0 23.242 16.215"
          >
            <path
              id="Tracé_1781"
              data-name="Tracé 1781"
              d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z"
              transform="translate(31.823 -16.655)"
              fill="#fff"
            />
          </svg>
        </p>
      </div>
      <div class="formulaire" v-if="active_devis">
        <form @submit="submitP">
          <p class="intro_form">
            Vous souhaitez obtenir un <strong>devis</strong> pour l'organisation
            d'un événement ? Veuillez
            <strong>remplir le formulaire</strong> ci-dessous en détaillant de
            manière précise vos envies. Nous reviendrons vers vous dans les
            <strong>24h jours ouvrés.</strong>
          </p>
          <div class="label">
            <p>Nom et prénom</p>
            <input type="text" v-model="form.mail" />
          </div>
          <div class="label">
            <p>E-mail</p>
            <input type="mail" v-model="form.email" />
          </div>
          <div class="label">
            <p>Téléphone</p>
            <input type="phone" v-model="form.phone" />
          </div>
          <div class="label">
            <p>Société (facultatif)</p>
            <input type="text" />
          </div>
          <div class="label">
            <p>Type de prestations</p>
            <select v-model="form.prestation">
              <option selected value="">Choisir dans la liste</option>
              <option value="Repas">Repas</option>
              <option value="Grillades">Grillades</option>
            </select>
          </div>
          <div class="label">
            <p>Nombre de convives</p>
            <input type="number" v-model="form.convives" />
          </div>
          <div class="label">
            <p>Lieu</p>
            <input
              type="text"
              v-model="form.lieu"
              placeholder="482, rue du Courdonney, 33140, Cadaujac"
            />
          </div>
          <div class="label">
            <p>Date</p>
            <input type="date" v-model="form.date" placeholder="" />
          </div>
          <div class="label">
            <p>heure</p>
            <input type="text" v-model="form.heure" placeholder="12h00" />
          </div>
          <div class="label">
            <p>Vos préférences</p>
            <textarea
              type="text"
              v-model="form.details"
              rows="10"
              placeholder="Si vous avez des préférences, veuillez nous les communiquer..."
            ></textarea>
          </div>
          <div class="check">
            <input type="checkbox" required />
            <p>
              En cochant cette case vous accepter que les informations fournies
              soient utilisées pour vous contacter suite à votre demande de
              devis.
            </p>
          </div>
          <div class="btn_form">
            <button>
              Soumettre votre demande
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_devis: false,
      form: {
        name: '',
        phone: '',
        email: '',
        prestation: '',
        lieu: '',
        date: '',
        heure: '',
        convives: ''
      }
    }
  },
  methods: {
    submitP(e) {
      e.preventDefault()
      console.log({ ...this.form })
      this.$axios
        .post('https://apimyterroir.rouxnicolas.fr/send', { ...this.form })
        .then((res) => (this.form = ''))
        .catch(e)
      this.error = true
    }
  }
}
</script>

<style scoped>
/* TRANSITION */

.overlay-enter-active {
  animation: openOverlay 0.3s ease-in-out;
}

@keyframes openOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.overlay-leave-active {
  animation: closeOverlay 0.3s ease-in-out;
}

@keyframes closeOverlay {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.devis-enter-active {
  animation: openDevis 0.3s ease-in-out;
}

.intro-enter-active {
  animation: openDevis 0.3s ease-in-out;
}

@keyframes openDevis {
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}

.intro p {
  font-size: 14px;
  font-family: bodyBold, sans-serif;
  color: var(--white);
}

.overlay {
  position: absolute;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.603);
  left: 0;
  right: 0;
  position: fixed;
  z-index: 10;
}

form {
  overflow: scroll;
  padding: 15px 20px;
  height: 72vh;
  background-color: var(--gray);
  z-index: 20;
}

.label {
  margin-bottom: 10px;
}

.label p {
  padding: 10px 0 5px 5px;
  font-size: 12px;
  color: var(--black);
  font-family: bodyBold, sans-serif;
}

.label input {
  width: 100%;
  border: none;
  background-color: white;
  padding: 10px 8px;
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.intro_form {
  font-size: 13px;
  line-height: 26px;
  color: var(--black);
  margin-bottom: 20px;
}

.label textarea {
  width: 100%;
  border: none;
  background-color: white;
  padding: 10px 8px;
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.label input::placeholder {
  font-family: body, sans-serif;
  color: var(--black);
  font-size: 11px;
  opacity: 0.4;
}

.label textarea::placeholder {
  font-family: body, sans-serif;
  color: var(--black);
  font-size: 11px;
  opacity: 0.4;
}

.title_form_two h4 {
  color: var(--orange);
  font-weight: lighter;
  font-size: 28px;
  margin-top: 50px;
  text-transform: uppercase;
  line-height: 28px;
  margin-bottom: 10px;
}

select {
  width: 100%;
  border: none;
  border-radius: 0px;
  background-color: var(--black);
  margin-top: -1px;
  -webkit-appearance: none;
  outline: none;
  font-size: 16px;
  padding: 10px 16px;
  color: white;
  font-weight: bold;
}

.check {
  display: flex;
  margin-top: 20px;
}

.check input {
  margin-right: 10px;
}

.check p {
  margin-top: -2px;
  font-size: 12px;
  color: var(--black);
}

input[type='checkbox' i] {
  background-color: var(--black) !important;
  width: 30px;
  height: 20px;
  border-radius: 0px;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked {
  background-color: var(--orange) !important;
  width: 30px;
  height: 20px;
  -webkit-appearance: none;
  display: flex;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked::after {
  content: 'x';
  font-size: 16px;
  color: white;
  font-weight: bold;
  display: flex;
  margin: auto;
}

.btn_form button {
  margin: 20px auto;
  padding: 12px 16px;
  width: 100%;
  font-family: bodyBold, sans-serif;
  background-color: var(--orange);
  border: none;
  box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
  text-decoration: none;
  color: var(--white);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.btn_form button:hover {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.274);
  background-color: var(--black);
}

.btn_form button svg {
  margin-right: 10px;
}

@media screen and (min-width: 1440px) {
  .devis_mobile {
    position: absolute;
    bottom: 0;
    margin: auto;
    width: 50%;
    position: fixed;
    z-index: 20;
    overflow: scroll;
  }

  .intro {
    padding: 15px 50px;
  }
}
</style>
