<template>    
  <td v-for="key in columns" v-on:click="onRowSelection()">     
      <cell :value="data[key]" :columnName="key" @cellUpdated="onCellUpdated"></cell>
  </td>
</template>

<script>
import Cell from "./Cell.vue";

export default {
  name: "row",
  props: {
    columns: Array,    
    entry: Object    
  },
    data(){
    return {      
      editMode: false,
      data: this.getRow()
    }
  },
  methods: {   
    getRow() {
      if (this.entry.id === this.$store.state.selectRow.id) {
        return this.$store.state.selectRow;
      } else {
        return this.entry;
      }        
    }, 
    onRowSelection: function() {
        console.log("Selected Row");
        console.log(this.entry);
        this.$emit('rowselected',this.entry);       
    },
    onCellUpdated: function(filedName, value) {      
      this.entry[filedName] = value;
      console.log("Row Component : "+value);
    }    
  }, 
   components: {      
    Cell   
  }
}
</script>

<style scoped>
.cell-wrapper {
    font-weight: bold !important;
    color: white !important;
}
</style>