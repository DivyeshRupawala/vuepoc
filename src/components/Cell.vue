<template>
<div class="cell-wrapper" v-on:dblclick="toggle()">
    <span v-show="columnName == 'Image'"><img :src="value"></span>
    <span v-show="columnName != 'Image' && !editMode">{{value}}</span> 
    <span v-show="editMode" > <input  v-model="value"> <button  v-on:click="save()"> Save</button> <button v-on:click="toggle()"> Cancel</button></span>      
</div>
</template>

<script>
export default {
  name: "cell",
  props: {
    value: String,    
    columnName: String    
  },
    data(){
    return {      
      editMode: false,
    }
  },
  methods: {    
    toggle: function() {
        if (this.columnName == "FIRST_NAME" || this.columnName == "LAST_NAME" || this.columnName == "SALARY") {
            this.editMode = !this.editMode;
        }
    },
    save: function() {
        console.log("save " + this.value);
        this.$emit('cellUpdated',this.columnName, this.value);     
        this.editMode = !this.editMode;
    }
  }
}
</script>

<style scoped>
.cell-wrapper {
    font-weight: bold !important;
    color: white !important;
}
</style>