<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout/';
import AuthForm from '@/components/pages/auth/AuthForm/';
</script>

<template>
  <AuthLayout>
    <div class="auth-page">
      <AuthForm />
    </div>
  </AuthLayout>
</template>

<style scoped lang="scss">
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}
</style>
