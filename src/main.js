import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAngleRight, faArrowRight, faCartShopping, faCopyright, faDumbbell, faMagnifyingGlass, faPlay, faRegistered, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faCartShopping, faMagnifyingGlass, faPlay, faYoutube, faArrowRight, faDumbbell, faAngleRight, faInstagram, faLinkedin, faFacebookF, faTwitter, faCopyright)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
