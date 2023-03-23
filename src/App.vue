<template>
  <Master/>
</template>

<script>
import Master from './views/Master.vue';

export default {
  components: {
    Master,
  },

  mounted() {

    // load external JavaScript files here
    const script1 = document.createElement('script')
    script1.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
      script3.setAttribute('src', 'lib/wow/wow.min.js')
    document.head.appendChild(script3)

    const script4 = document.createElement('script')
      script4.setAttribute('src', 'lib/easing/easing.min.js')
    document.head.appendChild(script4)

    const script5 = document.createElement('script')
      script5.setAttribute('src', 'lib/waypoints/waypoints.min.js')
    document.head.appendChild(script5)

    const script6 = document.createElement('script')
      script6.setAttribute('src', 'lib/owlcarousel/owl.carousel.min.js')
    document.head.appendChild(script6)

    const script7 = document.createElement('script')
      script7.setAttribute('src', 'lib/counterup/counterup.min.js')
    document.head.appendChild(script7)

    const script8 = document.createElement('script')
      script8.setAttribute('src', 'js/main.js')
      document.head.appendChild(script8)
  },
};

</script>

