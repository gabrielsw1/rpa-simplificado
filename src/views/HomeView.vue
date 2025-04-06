<template>
  <main class="space-y-16 md:space-y-24 pt-16 md:pt-24">
    <HeroSection />
    <ExpertiseSection />
    <AboutSection />
    <div id="videos">
      <YouTubeSection />
    </div>
    <div id="contato">
      <ContactSection />
    </div>
  </main>
</template>

<script setup>
  import HeroSection from '@/components/HeroSection.vue'
  import AboutSection from '@/components/AboutSection.vue'
  import ExpertiseSection from '@/components/ExpertiseSection.vue'
  import YouTubeSection from '@/components/YouTubeSection.vue'
  import ContactSection from '@/components/ContactSection.vue'
</script>
