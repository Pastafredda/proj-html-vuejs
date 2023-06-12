import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRight, faCartShopping, faMagnifyingGlass, faPlay, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faCartShopping, faMagnifyingGlass, faPlay, faYoutube, faArrowRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
