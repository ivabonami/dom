<template>
  <button class="button outline">
    <slot />
  </button>
</template>

<script>

</script>

<style scoped lang="scss">
.outline {
  border-radius: 1000px;
  border: 1.2px solid #00BA3F;
  color: #00BA3F;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.4px;
  transition: .3s ease;

  &:hover {
    background-color: #bde5c4;
  }
}
</style>