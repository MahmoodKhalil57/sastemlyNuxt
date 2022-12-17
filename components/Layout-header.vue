<template>
  <div class="navbar bg-base-100" z-1000 shadow-2xl shadow-dark-900>
    <div class="navbar-start">
      <label for="my-drawer" class="btn btn-ghost lg:hidden drawer-button">
        <i i-material-symbols-segment-rounded mirror text-5 />
      </label>
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
            <i i-material-symbols-keyboard-arrow-down-rounded />
          </a>
          <ul class="rounded-box bg-base-100 p-2 !rounded-t-0" shadow-black shadow-2xl>
            <li><a>Development</a></li>
            <li><a>Design</a></li>
            <li><a>Social media</a></li>
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
