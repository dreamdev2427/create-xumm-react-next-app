<template>
    <!-- <h1 class="h3 font-weight-bold">{{ $t("start.title") }}</h1>
    <h6>
        <b class="text-primary">{{ $t("start.subtitle") }}</b>
    </h6>
    <hr> -->
    <Header />
    <div>
        <p>{{ $t("start.description") }}</p>
    </div>
    <div class="my-3 text-center h4">
        2 - 1 = 1 illustration
    </div>
    <div class="shadow-sm mt-3 alert alert-primary px-3 py-2">
        {{ $t("start.list_header") }}
        <ol class="mb-0 pb-0 mt-1 ml-0 pl-4">
            <li>{{ $t("start.list_item_1") }}</li>
            <li>{{ $t("start.list_item_2") }}</li>
        </ol>
    </div>
    <div class="mt-4 text-center">
        <a href="/wizard" class="shadow btn btn-lg btn-primary btn-block">
            {{ $t("start.button") }}
            <fa :icon="['fas', 'arrow-right']"/>
        </a>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: { Header }
}
</script>
