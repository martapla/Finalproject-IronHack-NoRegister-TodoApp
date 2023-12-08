<template>
  <nav>
      <section class="desktop">
          <ul class="nav-links">

              <li>
                <router-link to="/" class="link-router">Home</router-link>
              </li>
              <li>
                <router-link to="/" class="link-router">Tasks</router-link>
              </li>

              <li>
                <router-link to="/account" class="link-router">Account</router-link>
              </li>
          </ul>

          <div>
            <ul class="log-out-welcome">
                <li >
                  <p class="welcome">Your Task List:</p>
                </li>
                <li>
                  <button @click="signIn" class="button-login">Log In</button>
                </li>
            </ul>
          </div>
      </section>
      <section class="mobile">       
          <div class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
          <div class="burger-list">
              <ul class="mobile-links">
                <li>
                  <router-link to="/" class="link-router">Home</router-link>
                </li>
                <li>
                  <router-link to="/" class="link-router">Tasks </router-link>
                </li>

                <li>
                  <router-link to="/account" class="link-router">Account</router-link>
                </li>
                <li>
                  <button @click="signIn" class="button-login">Log In</button>
                </li>
                </ul>
          </div>
      </section> 
 
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { onMounted } from 'vue';

const router = useRouter();

const signIn = () => {
  
  router.push("/account");
};


onMounted(() => { 
  
  // Hamburguer
 const hamburger = document.querySelector(".hamburger");
 const burgerlist = document.querySelector(".mobile-links");



 console.log(hamburger);

 hamburger.addEventListener("click", () => {
 hamburger.classList.toggle("active");
 burgerlist.classList.toggle("show-active");
  
})

})

</script>

<style></style>