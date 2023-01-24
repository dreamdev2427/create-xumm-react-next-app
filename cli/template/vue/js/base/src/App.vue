<template>
    <div class="xapps-wrapper">
        <div class="container pt-2">
            <keep-alive>
                <component :is="currentComponent" />
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Start from './components/Start.vue'
import Wizard from './components/Wizard.vue'

const routes = {
    '/': Start,
    '/wizard': Wizard
}

export default {
    name: 'App',
    components: {
        Start,
        Wizard
    },
    data() {
        return {
            currentRoute: window.location.pathname,
        }
    },
    computed: {
        currentComponent() {
            return routes[this.currentRoute] || { template: '<p>Not Found 404</p>' }
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
