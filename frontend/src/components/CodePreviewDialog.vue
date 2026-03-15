<template>
  <dialog>
    <h2>Code Preview</h2>
    <!-- Your code preview implementation here -->
    <button @click="$emit('close')">Close</button>
  </dialog>
</template>

<script>
export default {
  name: 'CodePreviewDialog',
};
</script>
