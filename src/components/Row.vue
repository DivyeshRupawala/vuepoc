<template>
    <tr class="row-wrapper" v-for="entry in filteredData" v-on:click="onRowSelection(entry)">
        <td v-for="key in columns">     
            <cell :value="entry[key]" :columnName="key"></cell>
        </td>    
    </tr>
</template>

<script>
import Cell from "./Cell.vue";

export default {
  name: "row",
  props: {
    columns: Array,    
    filteredData: Object    
  },
    data(){
    return {      
      editMode: false,
    }
  },
  methods: {    
    onRowSelection: function(selectedRow) {
        console.log("Selected Row");
        console.log(selectedRow)
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