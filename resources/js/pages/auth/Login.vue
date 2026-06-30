<script setup lang="ts">
import { ref, computed } from "vue";
import { useForm } from "@inertiajs/vue3";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-vue-next";

const showPassword = ref(false);

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

const isLoading = computed(() => form.processing);

function submit() {
  form.post("/login", {
    onFinish: () => {
      form.reset("password");
    },
  });
}
</script>

<template>
  <div class="login-wrapper">
    <!-- Animated background -->
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>

    <!-- Grid pattern overlay -->
    <div class="grid-overlay"></div>

    <div class="login-container">
      <!-- Card -->
      <div class="login-card">
        <!-- Logo & Branding -->
        <div class="login-header">
          <a href="/" class="logo-link">
            <div class="logo-wrapper">
              <img
                src="../../assets/icon.svg"
                alt="Logo"
                class="logo-img"
              />
            </div>
          </a>
          <h1 class="login-title">Selamat Datang Kembali</h1>
          <p class="login-subtitle">
            Masuk ke akun Anda untuk melanjutkan
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="submit" class="login-form" id="login-form">
          <!-- Error global -->
          <div v-if="form.errors.email" class="error-banner" id="login-error-banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            <span>{{ form.errors.email }}</span>
          </div>

          <!-- Email Field -->
          <div class="form-group">
            <label for="login-email" class="form-label">Email</label>
            <div class="input-wrapper" :class="{ 'input-error': form.errors.email }">
              <span class="input-icon">
                <Mail :size="17" />
              </span>
              <input
                id="login-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="nama@email.com"
                class="form-input"
                required
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <div class="label-row">
              <label for="login-password" class="form-label">Password</label>
            </div>
            <div class="input-wrapper" :class="{ 'input-error': form.errors.password }">
              <span class="input-icon">
                <Lock :size="17" />
              </span>
              <input
                id="login-password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Masukkan password"
                class="form-input"
                required
              />
              <button
                type="button"
                class="password-toggle"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Sembunyikan password' : 'Tampilkan password'"
              >
                <EyeOff v-if="showPassword" :size="17" />
                <Eye v-else :size="17" />
              </button>
            </div>
          </div>

          <!-- Remember me -->
          <div class="remember-row">
            <label class="remember-label" id="remember-me-label">
              <input
                id="login-remember"
                v-model="form.remember"
                type="checkbox"
                class="remember-checkbox"
              />
              <span class="checkmark"></span>
              <span class="remember-text">Ingat saya</span>
            </label>
          </div>

          <!-- Submit Button -->
          <button
            id="login-submit-btn"
            type="submit"
            class="submit-btn"
            :disabled="isLoading"
          >
            <Loader2 v-if="isLoading" :size="18" class="spin-icon" />
            <span>{{ isLoading ? "Memproses..." : "Masuk" }}</span>
          </button>
        </form>

        <!-- Footer -->
        <div class="login-footer">
          <a href="/" class="back-link">← Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* =====================
   WRAPPER & BACKGROUND
===================== */
.login-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #020c16;
  padding: 1.5rem;
}

/* Animated Orbs */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  animation: float 8s ease-in-out infinite;
}

.bg-orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, hsl(202, 70%, 45%) 0%, transparent 70%);
  top: -15%;
  left: -10%;
  animation-delay: 0s;
}

.bg-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, hsl(220, 70%, 35%) 0%, transparent 70%);
  bottom: -15%;
  right: -10%;
  animation-delay: -3s;
}

.bg-orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, hsl(190, 70%, 40%) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  animation: float3 8s ease-in-out infinite;
  animation-delay: -6s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

@keyframes float3 {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, calc(-50% - 20px)) scale(1.05); }
}

/* Grid Overlay */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

/* =====================
   CONTAINER & CARD
===================== */
.login-container {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 440px;
}

.login-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255,255,255,0.04),
    inset 0 1px 0 rgba(255,255,255,0.08);
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =====================
   HEADER
===================== */
.login-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  text-align: center;
}

.logo-link {
  display: inline-block;
  text-decoration: none;
}

.logo-wrapper {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, hsl(202, 70%, 45%) 0%, hsl(220, 70%, 40%) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px hsla(202, 70%, 45%, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-wrapper:hover {
  transform: scale(1.05) rotate(-3deg);
  box-shadow: 0 12px 40px hsla(202, 70%, 45%, 0.55);
}

.logo-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.login-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
}

.login-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
}

/* =====================
   FORM
===================== */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Error Banner */
.error-banner {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  color: #f87171;
  font-size: 0.85rem;
  animation: shake 0.4s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
}

/* Form Group */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.01em;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Input */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}

.input-wrapper:focus-within {
  border-color: hsl(202, 70%, 50%);
  box-shadow: 0 0 0 3px hsla(202, 70%, 50%, 0.15);
  background: rgba(255, 255, 255, 0.08);
}

.input-wrapper.input-error {
  border-color: rgba(239, 68, 68, 0.5);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem 0 1rem;
  color: rgba(255, 255, 255, 0.35);
  flex-shrink: 0;
}

.form-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.85rem 0.75rem 0.85rem 0;
  font-size: 0.9rem;
  color: #ffffff;
  font-family: inherit;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}

.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus {
  -webkit-text-fill-color: #ffffff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(2, 12, 22, 0.9) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.password-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.35);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  flex-shrink: 0;
}

.password-toggle:hover {
  color: rgba(255, 255, 255, 0.7);
}

/* Remember Me */
.remember-row {
  display: flex;
  align-items: center;
}

.remember-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
}

.remember-checkbox {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
  position: relative;
}

.remember-checkbox:checked + .checkmark {
  background: hsl(202, 70%, 50%);
  border-color: hsl(202, 70%, 50%);
}

.remember-checkbox:checked + .checkmark::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 6px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(-45deg) translate(1px, -1px);
}

.remember-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
}

/* Submit Button */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, hsl(202, 70%, 48%) 0%, hsl(220, 70%, 42%) 100%);
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px hsla(202, 70%, 48%, 0.4);
  font-family: inherit;
  letter-spacing: 0.01em;
  margin-top: 0.25rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px hsla(202, 70%, 48%, 0.55);
  background: linear-gradient(135deg, hsl(202, 70%, 52%) 0%, hsl(220, 70%, 46%) 100%);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0px);
}

.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.spin-icon {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* =====================
   FOOTER
===================== */
.login-footer {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.footer-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
}

.footer-link {
  color: hsl(202, 70%, 60%);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-link:hover {
  color: hsl(202, 70%, 70%);
}

.back-link {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition: color 0.2s;
}

.back-link:hover {
  color: rgba(255, 255, 255, 0.6);
}
</style>
