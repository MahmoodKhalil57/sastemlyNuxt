<template>
  <DaisyDrawercontainer>
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
        <li><a>Projects</a></li>
        <li tabindex="0">
          <a rounded-t-md>
            Services
            <i i-material-symbols-arrow-forward-ios-rounded />
          </a>
          <ul class="rounded-box bg-base-100 p-2 !rounded-l-0">
            <li><a>Development</a></li>
            <li><a>Design</a></li>
            <li><a>Social media</a></li>
          </ul>
        </li>
      </ul>
    </template>
  </DaisyDrawercontainer>
</template>
