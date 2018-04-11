<template>
    <ul class="left-warp">
      <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}

      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" class="left-warp" v-if="isFolder">
      <items
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </items>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
    </ul>

</template>

<script>
  import items from './tree.vue';
    export default {
        name: 'items',
        props: {
          model: Object
        },
        components:{
    			items
    		},
        data: function () {
          return {
            open: false
          }
        },
        computed: {
            hasMenu: {
                get: function() {
                    return this.data.list && this.data.list.length > 0;
                }
            }
        },
				computed: {
			    isFolder: function () {
			      return this.model.children &&
			        this.model.children.length
    		}
  		},
  		methods: {
		    toggle: function () {
		      if (this.isFolder) {
		        this.open = !this.open
		      }
    		},
	    changeType: function () {
	      if (!this.isFolder) {
	        Vue.set(this.model, 'children', [])
	        this.addChild()
	        this.open = true
	      }
	    },
	    addChild: function () {
	      this.model.children.push({
	        name: 'new stuff'
	      })
	    }
  }
    }

</script>

<style lang="scss">
  .left-warp{
    margin-left: 20px;
  }
</style>
