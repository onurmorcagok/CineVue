<template>
  <div class="cast-card card mx-4 mb-4">
    <img
      :src="`${API.IMAGE_URL}${actor.profile_path}`"
      :alt="`${actor.title}`"
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">{{ actor.name }}</h5>
      <p class="card-text">Character: {{ actor.character }}</p>
    </div>
  </div>
</template>

<script>
import API from "../api/api";
export default {
  name: "Cast",
  data() {
    return {
      API,
    };
  },
  props: {
    actor: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cast-card {
  width: 10rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0);
}

@media (max-width: 575.98px) {
  .cast-card {
    width: 7rem;
  }
  .cast-card,
  .card-title {
    font-size: 0.6rem;
  }
}
</style>