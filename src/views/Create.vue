<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      :counter="10"
      :rules="titleRules"
      label="Title"
      required
    ></v-text-field>

    <v-textarea
      v-model="description"
      :rules="descriptionRules"
      label="Description"
      required
    ></v-textarea>

    <v-select
      v-model="select"
      :items="categories"
      :rules="[v => !!v || 'Category is required']"
      label="Category"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
    <v-btn
      color="success"
      @click="submitForm"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 10) || 'Title must be less than 10 characters',
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length >= 10) || 'Title must be less than 10 characters',
      ],
      select: null,
      categories: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      submitForm () {
          this.$store.commit('submitForm', {title: this.title, description: this.description, select: this.select})
      }
    },
  }
</script>