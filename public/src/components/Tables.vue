<template>
    <v-layout child-flex>
        <v-data-table
        :headers="headers"
        :items="robots"
        hide-actions
        class="elevation-1"
        >
        <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.status }}</td>
        <td class="text-xs-center">{{ props.item.battery }}</td>
        <td class="text-xs-center"><v-btn outline color="indigo" @click.native="$emit('status-changed', props.item)">Connect</v-btn></td>
        <td class="text-xs-center">
          <v-tooltip bottom>
            <v-btn slot="activator" flat icon color="gray">
            <v-icon>info</v-icon>
            </v-btn>        
            <span>More Info</span>
          </v-tooltip>          
        </td>
        </template>
        </v-data-table>
    </v-layout>  
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Robot Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Status', value: 'status', align: 'center'},
          { text: 'Battery Level', value: 'battery', align: 'center' },
          { text: ' ', value: 'status', align: 'center'},
          { text: ' ', value: 'status', align: 'center'}
        ],
        robots: [
          {
            name: 'Robot Floor-1',
            status: 'Available',
            battery: '60%',
          },
          {
            name: 'Robot Floor-2',
            status: 'Busy',
            battery: '80%'
          },
          {
            name: 'Robot Floor-3',
            status: 'Locked',
            battery: '40%'
          },
          {
            name: 'Robot Floor-4',
            status: 'Charging',
            battery: '5%'
          }
        ]
      }
    }
  }
</script>