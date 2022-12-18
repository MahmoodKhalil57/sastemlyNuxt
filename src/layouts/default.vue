<template>
  <main h-full>
    <LayoutDrawer>
      <div flex="~ col" justify-between items-center h-full>
        <LayoutHeader />
        <slot />
        <LayoutFooter />
      </div>
    </LayoutDrawer>
  </main>
</template>
