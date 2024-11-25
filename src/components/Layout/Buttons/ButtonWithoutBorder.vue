<template>
  <button class="button without-border">
    <slot />
  </button>
</template>

<script>

</script>

<style scoped lang="scss">
.without-border {
  color: #00BA3F;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.4px;
  transition: .3s ease;

  &:hover {
    color: green;
  }
}
</style>