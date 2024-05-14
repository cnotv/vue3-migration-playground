<template>
  <div class="home">
    <p>from view: {{value}}</p>
    <HelloWorld :value="value" :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { addLifecycleHook } from "@/main.ts";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  
  created() { console.log('created')},
  // beforeMount() { console.log('beforeMount')},
  mounted() { console.log('mounted')},
  beforeUpdate() { console.log('beforeUpdate')},
  updated() { console.log('updated')},
  beforeUnmount() { console.log('beforeUnmount')},
  unmounted() { console.log('unmounted')},
  errorCaptured() { console.log('errorCaptured')},

  beforeCreate() {
    async function beforeMount() {
      console.log('beforeMount')
      try {
        await this.$options.fetch.call(this);
      } catch (err) {
        // In most cases we don't handle errors at all in `fetch`es. Lets always log to help in production
        console.error('Error in fetch():', err); // eslint-disable-line no-console
      }
    }


    addLifecycleHook(this, 'beforeMount', beforeMount);
  },
  data() { return {msg: 'default message', value: {change: 'nope'}}},
  async fetch(asd: any) {
    console.log('Fetch: start')
    new Promise((resolve, reject) => {
      resolve(setTimeout(() => {
        this.msg = 'set from fetch'
        console.log('Fetch: resolve')
      }, 1000)
    )})
    console.log('Fetch: after async')
  },
});
</script>
