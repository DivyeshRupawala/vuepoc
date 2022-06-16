<script>
import $bus from '../event'
   export default {

        props: {},
        methods: {
          keyHandler (event) {
            var sortKey = event.key;
            var enteredKey = event.key;
            var filterKey=this.filterKey +enteredKey;
            filterKey=filterKey.toLowerCase();
            var pivotData = this.data;
            if (filterKey && filterKey!="") {
              pivotData = pivotData.filter(function(row) {
                return Object.keys(row).some(function(key) {
                  return (
                    String(row[key])
                      .toLowerCase()
                      .indexOf(filterKey) > -1
                  );
                });
              });
              $bus.$emit('keyHandler',pivotData);
            }else {
              var pivotData = this.data;
              $bus.$emit('keyHandler',pivotData);
            }
         },
         keyHandlerFull (event) {
            var filterKey=this.filterKey;
            filterKey=filterKey.toLowerCase();
            var pivotData = this.data;
            if (filterKey && filterKey!="") {
              pivotData = pivotData.filter(function(row) {
                return Object.keys(row).some(function(key) {
                  return (
                    String(row[key])
                      .toLowerCase()
                      .indexOf(filterKey) > -1
                  );
                });
              });
            }
            this.$emit('keyHandler',pivotData);
         }
        }
    }
</script>

<template type="text/x-template" id='filter-info'>
    <form id="search">
        Search  Test <input name="query" v-model="filterKey" @keypress="keyHandler($event)"  @keyup.delete="keyHandlerFull"/>
    </form>
</template>

<style>
/* body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #007bdc;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #007bdc;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
} */

</style>
