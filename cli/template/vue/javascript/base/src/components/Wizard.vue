<template>
    <Header />
    <div class="vertical-wizard">
        <ul>
            <li v-for="(step, index) in steps" :class="getStepClass(index)" :key="index">
                <a>
                    {{ $t(`wizard.step_${index}.header`) }}
                    <fa v-if="index < activeIndex" class="ico ico-green" :icon="['fa', 'check']"></fa>
                    <fa v-if="index > activeIndex" class="ico ico-muted" :icon="['fa', 'lock']"></fa>
                    <span class="desc d-block">
                        {{ $t(`wizard.step_${index}.body`) }}
                        <a @click="next()" v-if="index === activeIndex" class="d-block shadow py-1 btn-block text-white btn btn-lg btn-primary mt-3">
                            {{ $t(`wizard.step_${index}.button`) }}
                            <fa :icon="['fas', 'arrow-right']"/>
                        </a>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: { Header },
    data() {
        return {
            activeIndex: 0,
            steps: ['', '', '']
        }
    },
    methods: {
        getStepClass(index) {
            const obj = {
                current: this.activeIndex === index,
                complete: this.activeIndex > index,
                'prev-step': this.activeIndex === (index - 1),
                locked: this.activeIndex < index
            }
            return obj
        },
        next() {
            switch(this.activeIndex) {
                case 0:
                    console.log('to the moon')
                    break
                case 1:
                    console.log('one')
                    break
                case 2:
                    console.log('twee')
                    break
            }
            this.activeIndex ++
        }
    }
}
</script>

<style scoped>

</style>