<template>
    <div>
        <button>{{ textoBoton }}</button>
    </div>
</template>

<script>

export default {
    props: {
        textoBoton: {
            type: String,
            required: true
        },
    },

}

</script>

<style scoped>
button {
    margin: 5px 10px;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    border: solid 1px black;
    background-color: black;
    color: white;
}

button:hover {
    background: rgb(82, 82, 82);
    color: rgb(255, 255, 255);
    cursor: pointer;
}
</style>