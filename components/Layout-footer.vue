<template>
  <footer w-full>
    <div class="footer p-10 bg-base-200 text-base-content" flex justify-evenly>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">Contact us</a>
        <a class="link link-hover">About us</a>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Development</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Social media</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </div>
    <div class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
      <div class="items-center grid-flow-col">
        <Brand-logo />
        <p>ACME Industries Ltd. <br>Providing reliable tech since 1992</p>
      </div>
      <div class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
          <a><div i-mdi-twitter text-6 /></a>
          <a><div i-mdi-youtube text-6 /></a>
          <a><div i-mdi-facebook text-6 /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
