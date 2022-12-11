<template>
  <div class="navbar bg-base-100" z-1000 shadow-2xl shadow-dark-900>
    <div class="navbar-start">
      <label for="my-drawer" class="btn btn-ghost lg:hidden drawer-button"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
      <div px-4>
        <Brand-logo />
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Projects</a></li>
        <li tabindex="0">
          <a rounded-t-md>
            Services
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </a>
          <ul class="rounded-box bg-base-100 p-2 !rounded-t-0" shadow-black shadow-2xl>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navbar-end" flex="~ row" gap-4 px-4>
      <a class="btn">Get started</a>
      <DarkToggle />
    </div>
  </div>
</template>
