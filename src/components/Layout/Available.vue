<template>

  <section class="genuine">
    <div class="heading">
      <div class="icon">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_69_2776)">
            <path d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z" fill="#F0F0F0"/>
            <path d="M13.8701 14.4999H29.0005C29.0005 13.1912 28.8261 11.9234 28.501 10.7173H13.8701V14.4999Z" fill="#D80027"/>
            <path d="M13.8701 6.93479H26.8723C25.9847 5.48638 24.8498 4.20613 23.5265 3.15216H13.8701V6.93479Z" fill="#D80027"/>
            <path d="M14.5001 29C17.9127 29 21.0493 27.8205 23.5262 25.8478H5.47412C7.95102 27.8205 11.0876 29 14.5001 29Z" fill="#D80027"/>
            <path d="M2.1287 22.0652H26.8723C27.5849 20.9024 28.1375 19.6314 28.501 18.2826H0.5C0.863463 19.6314 1.41611 20.9024 2.1287 22.0652V22.0652Z" fill="#D80027"/>
            <path d="M6.71667 2.26438H8.03804L6.80894 3.15732L7.27843 4.60216L6.04939 3.70922L4.82034 4.60216L5.22589 3.35397C4.14371 4.25541 3.19521 5.31153 2.41357 6.4883H2.83696L2.05458 7.05669C1.93269 7.26003 1.81579 7.46659 1.70375 7.67622L2.07735 8.82608L1.38033 8.31966C1.20707 8.68675 1.04859 9.0621 0.906137 9.44528L1.31774 10.7122H2.83696L1.60786 11.6052L2.07735 13.05L0.848307 12.1571L0.112092 12.692C0.0384023 13.2843 0 13.8877 0 14.5H14.5C14.5 6.49192 14.5 5.54784 14.5 0C11.6356 0 8.96536 0.830918 6.71667 2.26438V2.26438ZM7.27843 13.05L6.04939 12.1571L4.82034 13.05L5.28984 11.6052L4.06074 10.7122H5.57995L6.04939 9.26737L6.51883 10.7122H8.03804L6.80894 11.6052L7.27843 13.05ZM6.80894 7.38124L7.27843 8.82608L6.04939 7.93314L4.82034 8.82608L5.28984 7.38124L4.06074 6.4883H5.57995L6.04939 5.04345L6.51883 6.4883H8.03804L6.80894 7.38124ZM12.4795 13.05L11.2505 12.1571L10.0214 13.05L10.4909 11.6052L9.26182 10.7122H10.781L11.2505 9.26737L11.7199 10.7122H13.2391L12.01 11.6052L12.4795 13.05ZM12.01 7.38124L12.4795 8.82608L11.2505 7.93314L10.0214 8.82608L10.4909 7.38124L9.26182 6.4883H10.781L11.2505 5.04345L11.7199 6.4883H13.2391L12.01 7.38124ZM12.01 3.15732L12.4795 4.60216L11.2505 3.70922L10.0214 4.60216L10.4909 3.15732L9.26182 2.26438H10.781L11.2505 0.819533L11.7199 2.26438H13.2391L12.01 3.15732Z" fill="#0052B4"/>
          </g>
          <defs>
            <clipPath id="clip0_69_2776">
              <rect width="29" height="29" fill="white"/>
            </clipPath>
          </defs>
        </svg>

      </div>
      <div class="header">
        Available Proprieties in USA
      </div>
      <div class="description">
        our features for you:
      </div>
    </div>

    <div class="cards">
      <div class="card" v-for="card of Homes">
        <div class="image">
          <img :src="card.image" alt="">
        </div>
        <div class="satus">
          {{ card.status }}
        </div>
        <div class="card-description">
          {{ card.description }}
        </div>
        <div class="card-price">
          {{ card.price }}
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import {Homes} from "@/Stores/Homes.js";
</script>

<style scoped lang="scss">

.heading {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .header {
    width: 100%;
    color: #00101E;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 44px */
    letter-spacing: 0.4px;
  }
  .description {
    color: rgba(0, 16, 30, 0.40);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
  }
  .icon {
    svg {
      border-radius: 12px;
      background: #00BA3F;
      padding: 10px;
    }
  }
}

.cards {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  .card {
    cursor: default;
    width: 28%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: start;
    justify-content: center;
    border-radius: 40px;
    background: #FFF;
    transition: .3s ease;

    &:hover {
      background-color: #00BA3F;
      .card-heading {
        color: #FFFFFF;
      }
      .card-description {
        color: #FFFFFF;
      }
      .icon {
        filter: brightness(0) invert(1);

      }
    }

    .image {
      img {
        width: 100%;
        border-radius: 20px;
      }
    }

    .card-heading {
      width: 100%;
      color: #00101E;
      text-align: center;
      font-feature-settings: 'liga' off, 'clig' off;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 115%; /* 23px */
      letter-spacing: 0.4px;
    }
    .card-description {
      color: #A6A6A6;
      font-feature-settings: 'liga' off, 'clig' off;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 116.667% */
    }

  }
}

</style>