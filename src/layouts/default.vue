<template>
  <main h-full>
    <LayoutDrawer>
      <div flex="~ col" justify-between items-center h-full>
        <Layout-header />
        <slot />
        <Layout-footer />
      </div>
    </LayoutDrawer>
  </main>
</template>
