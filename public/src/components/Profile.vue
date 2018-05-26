<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>      
      <v-flex xs12 sm4>
        <v-card>
          <v-card-text class="px-0">
            <v-avatar
            :tile="User"
            :size="150">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="avatar">
            </v-avatar>
            <br>
            <br>
            <h2>John Leider</h2>
            <h4>@john1995</h4>
          </v-card-text>
        </v-card>
      </v-flex>      
      <v-flex xs12 sm8>
        <v-card align-center>
          <v-card-text class="px-0">              
              <v-container grid-list-md>
                <v-layout row wrap align-center>
                <v-flex xs12 sm6>
                    <v-text-field v-model="first" box label="First Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field v-model="last" box label="Last Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    box
                    label="Email address"
                    hint="Enter your email!"
                    persistent-hint
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field v-model="username" box label="User Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field v-model="officenumber" box label="Office Phone"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                    <v-text-field v-model="mobilenumber" box label="Mobile Phone"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field box multi-line label="Bio"></v-text-field>
                </v-flex>
                <div class="text-sm-center">
                    <v-btn round color="warning">Update Profile</v-btn>
                </div>                
                </v-layout>
              </v-container>
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      first: 'John',
      last: 'Doe',
      email: 'John@mail.com',
      username: 'john1995',
      officenumber: '741589635',
      mobilenumber: '120386247',
      emailRules: [
        v => {
          return !!v || 'E-mail is required'
        },
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>