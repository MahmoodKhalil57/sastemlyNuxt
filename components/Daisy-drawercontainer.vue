<template>
  <div grid w-full>
    <input id="my-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <slot name="main" />
    </div>
    <div class="drawer-side !max-h-none" h-inherit>
      <label for="my-drawer" class="drawer-overlay" />
      <slot name="drawer" />
    </div>
  </div>
</template>
