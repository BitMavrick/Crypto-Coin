<template>
    <Navbar />
    <RouterView />
    <Footer />
    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Master',

    mounted() {

    // load external JavaScript files here
    const script1 = document.createElement('script')
        script1.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
    script1.setAttribute('async', true)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
        script2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')
    script2.setAttribute('async', true)
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
        script3.setAttribute('src', 'lib/wow/wow.min.js')
      script3.setAttribute('async', true)
    document.head.appendChild(script3)

    const script4 = document.createElement('script')
        script4.setAttribute('src', 'lib/easing/easing.min.js')
      script4.setAttribute('async', true)
    document.head.appendChild(script4)

    const script5 = document.createElement('script')
        script5.setAttribute('src', 'lib/waypoints/waypoints.min.js')
      script5.setAttribute('async', true)
    document.head.appendChild(script5)

    const script6 = document.createElement('script')
        script6.setAttribute('src', 'lib/owlcarousel/owl.carousel.min.js')
      script6.setAttribute('async', true)
    document.head.appendChild(script6)

    const script7 = document.createElement('script')
        script7.setAttribute('src', 'lib/counterup/counterup.min.js')
      script7.setAttribute('async', true)
    document.head.appendChild(script7)

    const script8 = document.createElement('script')
        script8.setAttribute('src', 'js/main.js')
      script8.setAttribute('async', true)
      document.head.appendChild(script8)
  },

    components: {
        Navbar,
        Footer
    },
}

</script>