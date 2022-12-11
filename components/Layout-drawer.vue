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
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
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
