<script>
import FormGenerator from "../components/FormGenerator.vue";

export default {
  name: "GeneratorDemo",
  components: { FormGenerator },
  props: {
    data:Object    
  },
   methods: {
        showNext: function(e){
          if(this.counter >  this.data.length)
          this.counter = 1;
        var nextRecord = this.data[this.counter];
        console.log(nextRecord);
        this.counter++;
        this.$forceUpdate(nextRecord);
        }
      },
  data() {   
    return {
       counter: 1,       
        schema: [
          {
            placeholder: "First Name",
            "fieldType": "TextInput",
            label: "First Name",
            name: "FIRST_NAME",
            editable: true
            },
            {
              fieldType: "TextInput",
              placeholder: "Last Name",
              label: "Last Name",
              name: "LAST_NAME",
              editable: true
            },
            {
              fieldType: "TestInput",
              placeholder: "Email",
              name: "EMAIL",
              label: "Email",
              editable: true
            },
          {
            fieldType: "NumberInput",
            placeholder: "Phone Number",
            name: "PHONE_NUMBER",
            label: "Phone Number"
          },
          {
            fieldType: "TextInput",
            placeholder: "Hire Data",
            name: "HIRE_DATE",
            label: "Hire Date"
          },
          {
            fieldType: "NumberInput",
            placeholder: "Salary",
            name: "SALARY",
            label: "Salary"
          },
        ]
    };
  }
};
</script>
<template>
    <div class="form-element-container" :key="counter">
      <form-generator :schema="schema" :formData="data"></form-generator>
    </div>
  <button v-on:click="showNext('dfd')">Show Next</button>
  

</template>
