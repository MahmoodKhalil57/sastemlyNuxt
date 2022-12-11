<template>
  <main flex="~ col" justify-between items-center h-full>
    <LayoutDrawer>
      <Layout-header />
      <slot />
      <Layout-footer />
    </LayoutDrawer>
  </main>
</template>
