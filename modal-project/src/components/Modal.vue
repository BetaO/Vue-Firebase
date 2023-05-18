<template>
    <!-- event modifier self only applies on backdrop -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ dark: theme === 'dark' }">
            <h1>{{ header }}</h1>
            <p>pass element from parent with props - {{ text }}</p>
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['header', 'text', 'theme'],
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: aqua;
        border: none;
        padding: 0;
    }
    .modal.dark{
        background: crimson;
        color: white;
    }
    .modal.dark.h1{
        color: white;
    }
</style>