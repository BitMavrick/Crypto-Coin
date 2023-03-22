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

    components: {
        Navbar,
        Footer
    },
}

</script>