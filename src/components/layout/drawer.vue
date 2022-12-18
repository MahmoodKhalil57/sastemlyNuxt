<template>
  <DaisyDrawerContainer>
    <template #main>
      <div h-full>
        <slot />
      </div>
    </template>
    <template #drawer>
      <ul class="menu py-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <div class="collapse collapse-arrow">
          <input id="collapse-input" type="checkbox">
          <div class="collapse-title font-medium">
            Services
          </div>
          <div class="collapse-content">
            <ul class="rounded-box bg-base-100 p-2 !rounded-l-0">
              <li><a>Development</a></li>
              <li><a>Design</a></li>
              <li><a>Social media</a></li>
            </ul>
          </div>
        </div>
        <li><a>Projects</a></li>
      </ul>
    </template>
  </DaisyDrawerContainer>
</template>

  <style scoped>
  #collapse-input:hover + .collapse-title{
    background-color: hsla(var(--bc),var(--un-bg-opacity));
    --un-bg-opacity: 0.1;
  }
  </style>

