<script setup lang="ts">
import BaseInput from '@/components/general/BaseInput/';
import BaseButton from '@/components/general/BaseButton/';
import { ref, reactive } from 'vue';
import { useUserStore } from '@/stores/';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { authUser } = userStore;

const router = useRouter();

const authForm = reactive({
  login: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
});

const formError = ref('');

const clearError = (field: keyof typeof authForm) => {
  formError.value = '';

  if (authForm[field]?.error) authForm[field].error = '';
};

const isValidForm = () => {
  let isValid = true;

  Object.keys(authForm).forEach((field) => {
    if (!authForm[field as keyof typeof authForm].value) {
      authForm[field as keyof typeof authForm].error = 'Reqiured field';
      isValid = false;
    }
  });

  return isValid;
};

const submitForm = async () => {
  if (isValidForm()) {
    const data = {
      login: authForm.login.value,
      password: authForm.password.value,
    };

    const result = await authUser(data);
    if (!result) {
      formError.value = 'Login is not successful';
    } else {
      router.push({ name: 'index' });
    }
  }
};
</script>

<template>
  <div :class="['auth-form-wrapper', { '_with-error': formError }]">
    <p class="title">Sign in</p>
    <form class="auth-form" @submit="submitForm">
      <BaseInput
        id="login-input"
        v-model="authForm.login.value"
        label="Login*"
        placeholder="login"
        :error="authForm.login.error"
        @focus="clearError('login')"
      />
      <BaseInput
        id="password-input"
        v-model="authForm.password.value"
        label="Password*"
        placeholder="password"
        type="password"
        :error="authForm.password.error"
        @focus="clearError('password')"
      />
      <BaseButton class="submit-button" type="submit" @click="submitForm">
        Sign in
      </BaseButton>
    </form>
    <p v-if="formError" class="error-text">
      {{ formError }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.auth-form-wrapper {
  width: 100%;
  max-width: 500px;
  padding: 15px 15px 55px;
  border: 2px solid $green-1;
  border-radius: 10px;

  .title {
    color: $green-1;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    row-gap: 15px;
  }

  .submit-button {
    margin-top: 20px;
  }

  .error-text {
    margin-top: 16px;
    color: $red-1;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }

  &._with-error {
    padding: 15px;
  }
}
</style>
