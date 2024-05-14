<template>
  <div class="hello">
    <p>from component {{value}}</p>
    <p>{{getTest}}</p>
    <p>{{msg}}</p>
    <button @click="() => (value.change = 'yep')">Change nested value</button>
    <button @click="() => (value = {change: 'yep'})">Change full value (crash)</button>
    <button @click="() => (msg = 'msg changed')">Change msg (crash)</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from 'vuex';

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
    value: Object
  },
  computed: {
    ...mapGetters('test', ['getTest']),
  }
});
</script>
