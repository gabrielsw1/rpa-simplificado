<script setup>
  import Navbar from './components/Navbar.vue'
  import HeroSection from './components/HeroSection.vue'
  import AboutSection from './components/AboutSection.vue'
  import ExpertiseSection from './components/ExpertiseSection.vue'
  import YouTubeSection from './components/YouTubeSection.vue'
  import ContactSection from './components/ContactSection.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="space-y-16 md:space-y-24 pt-16 md:pt-24">
      <HeroSection />
      <ExpertiseSection />
      <AboutSection />
      <YouTubeSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    @apply mx-auto px-4;
    max-width: 1200px;
  }

  @media (max-width: 640px) {
    .container {
      @apply px-4;
    }
  }

  /* Otimizações de performance */
  img {
    content-visibility: auto;
  }

  /* Animações suaves */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Melhorias de acessibilidade */
  :focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>
