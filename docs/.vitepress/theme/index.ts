import DefaultTheme from 'vitepress/theme'
import Highlight from "./components/Highlight.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component("Highlight", Highlight);
    },
};
