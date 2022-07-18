<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
    name: 'GCard',
    // render函数两种写法
    // 方式一：
    // setup() {
    //     return () => [h('h1', 'text'), h('h1', 'test')]
    // },
    // 方式二：
    render() {
        console.log(this)
        return [h('h1', 'text'), h('h1', 'test')]
    },
})
</script>
