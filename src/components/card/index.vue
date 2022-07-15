<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'GCard',
    setup() {
        return () => [h('h1', 'text'), h('h1', 'test')]
    },
})
</script>
