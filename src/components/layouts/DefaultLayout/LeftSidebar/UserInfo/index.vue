<template>
  <div class="user-info-component">
    <div class="avatar-wrapper">
      <img src="/images/avatar.png" alt="avatar" class="avatar">
    </div>
    <span class="username">User name</span>
  </div>
</template>

<style scoped lang="scss">
.user-info-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  width: 100%;
}

.avatar-wrapper {
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 50%;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.username {
  font-size: 30px;
  line-height: 36px;
}
</style>
