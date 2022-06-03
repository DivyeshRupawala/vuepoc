<template>
  <div class="formElement">
   <div v-for="(field, index) in schema">
    <div v-if="field.editable">
   <label class="field-label">{{field.label}}</label>
    <input class="field" type="text"
           :name="name"
           :value="formData[field.name]"
           @input="updateForm(field.name ,$event.target.value)"
           :placeholder="placeholder
           ">
   </div>
  <div v-else>
   <label class="field-label">{{field.label}}</label> <div class="field">{{formData[field.name]}}</div>
   </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormGenerator",
  components: { },
  props: ["schema", "value", "formData"], 
  data() {
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>
