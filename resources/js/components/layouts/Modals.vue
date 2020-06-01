<template>
  <div>
     <b-modal id="global-modal" hide-footer>

        <template v-slot:modal-title>
            <slot name="modal-title"></slot>            
        </template>
        
        <div class="d-block text-center"><slot name="modal-body"></slot></div>

        <div><slot name="modal-footer"></slot></div>

    </b-modal>
  </div>
</template>

<script>
export default {
 name: 'Modals'
}
</script>

<style>

</style>