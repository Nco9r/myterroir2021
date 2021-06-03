<template>
  <section class="clients">
    <div class="title_section">
      <h2>Ils nous ont fait confiance</h2>
      <p>et nous les remercions</p>
      <hr />
    </div>
    <div class="grid_logo">
        <img src="@/assets/img/png/so.png" alt="">
            <img src="@/assets/img/png/decat.png" alt="">
             <img src="@/assets/img/png/bastide.png" alt="">
            <img src="@/assets/img/png/ricard.png" class="ricard" alt="">  
            <img src="@/assets/img/png/coq.png" alt="">
            <img src="@/assets/img/png/club.png" alt="">  
            <img src="@/assets/img/png/trip.png" alt="">
            <img src="@/assets/img/png/follow.png" class="follow" alt="">
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.clients {
  padding: 30px 15px;
}

.title_section h2 {
  color: var(--black);
  text-align: center; 
  font-size: 28px;
  line-height: 40px;
}

.title_section p {
  color: var(--black);
  text-align: center; 
  font-size: 14px;
}

hr {
  border: none;
  width: 30px;
  display: flex; 
  margin: 20px auto; 
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.grid_logo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
   grid-gap: 60px 30px;
   padding: 0 50px;
   margin-top: 40px;
   align-items: center;
   justify-items: center;
   padding-bottom: 40px;
}
.grid_logo img {
    width: 80px;
    filter: grayscale(1)
}


.follow {

}

@media screen and (min-width: 1024px) {

    .clients {
        padding: 100px 100px;
    }

    .title_section h2 {
      font-size: 32px; 
      line-height: 52px;

    }
    
    .grid_logo {
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
    }

    .grid_logo img {
        width: 120px;
    }

    .title_section {
        text-align: center; 
    }

    hr {
        display: flex; 
        margin: 20px auto;
    }

    .follow {
        width: 70px!important;
    }
}


</style>
