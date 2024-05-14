import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  describe("namespace module in component", () => {
    it("should say hi", () => {
      const text = "hi";
      const wrapper = shallowMount(HelloWorld, {
        computed: {
          getTest: jest.fn().mockReturnValue(text)
        }
        // mocks: {
        //   $store: {
        //     getters: {
        //       "test/getTest": () => text
        //     }
        //   }
        // }
      });
      expect(wrapper.text()).toMatch(text);
    });
  });
});
