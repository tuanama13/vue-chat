<template>
  <div class="container">
      <div class="card login">
          <div class="card-body">
              <h2 class="card-title text-center">Login</h2>
              <form @submit.prevent="login" class="text-center">
                  <div class="form-group">
                      <input type="text" v-model="name" name="name" class="form-control" placeholder="Please enter name...">
                      <p v-if="errorText" class="text-danger">{{errorText}}</p>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            name : "",
            errorText: null,
        }
    },
    methods: {
        login(){
            if(this.name){
                this.$router.push({name: 'Chat', params: {name: this.name}})
            }else{
                // this.
            }
        },
    },
}
</script>

<style>

</style>