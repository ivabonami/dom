<template>
  <button class="button filled">
    <slot />
  </button>
</template>

<script>

</script>

<style scoped lang="scss">
.filled {
  background-color: #00BA3F;
  border-radius: 1000px;
  border: 1.2px solid #00BA3F;
  color: #fff;
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.4px;
  transition: .3s ease;

  &:hover {
    background-color: #108d26;
  }
}
</style>