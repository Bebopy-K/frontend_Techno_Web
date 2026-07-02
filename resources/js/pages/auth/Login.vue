<script setup lang="ts">
import { ref, computed } from "vue";
import { useForm } from "@inertiajs/vue3";
import { Eye, EyeOff, Lock, Mail, Loader2, ArrowLeft } from "lucide-vue-next";
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
  <section class="min-h-screen w-full flex bg-background text-foreground overflow-hidden">
    
    <div class="w-full lg:w-[45%] flex flex-col justify-between p-8 sm:p-12 md:p-16 relative z-10 bg-background/80 backdrop-blur-md border-r border-border">
      <div class="w-full max-w-md mx-auto my-auto space-y-7">
        <form @submit.prevent="submit" class="space-y-5">
          
          <div v-if="form.errors.email" class="flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-[10px] p-3 text-destructive text-[0.85rem] animate-shake">
            <span>{{ form.errors.email }}</span>
          </div>

          <div class="space-y-2">
            <label for="login-email" class="text-[0.85rem] font-medium text-foreground/80">Email</label>
            <div class="relative flex items-center bg-secondary/30 border border-border rounded-[10px] transition-all duration-200 focus-within:border-primary focus-within:bg-secondary/50 focus-within:ring-2 focus-within:ring-primary/20" :class="{ 'border-destructive/50': form.errors.email }">
              <span class="flex items-center justify-center pl-3.5 text-muted-foreground/50 shrink-0">
                <Mail :size="16" />
              </span>
              <input
                id="login-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="nama@email.com"
                class="flex-1 bg-transparent border-none outline-none py-3 px-3 text-[0.9rem] text-foreground placeholder-muted-foreground/30"
                required
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="login-password" class="text-[0.85rem] font-medium text-foreground/80">Password</label>
            <div class="relative flex items-center bg-secondary/30 border border-border rounded-[10px] transition-all duration-200 focus-within:border-primary focus-within:bg-secondary/50 focus-within:ring-2 focus-within:ring-primary/20" :class="{ 'border-destructive/50': form.errors.password }">
              <span class="flex items-center justify-center pl-3.5 text-muted-foreground/50 shrink-0">
                <Lock :size="16" />
              </span>
              <input
                id="login-password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Masukkan password"
                class="flex-1 bg-transparent border-none outline-none py-3 px-3 text-[0.9rem] text-foreground placeholder-muted-foreground/30"
                required
              />
              <button
                type="button"
                class="bg-none border-none cursor-pointer text-muted-foreground/50 px-3.5 flex items-center shrink-0 hover:text-foreground/70 transition-colors"
                @click="showPassword = !showPassword"
              >
                <EyeOff v-if="showPassword" :size="16" />
                <Eye v-else :size="16" />
              </button>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <button
              type="submit"
              class="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary hover:bg-primary/90 active:scale-[0.99] text-primary-foreground font-semibold text-[0.95rem] border-none rounded-[8px] cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
              :disabled="isLoading"
            >
              <Loader2 v-if="isLoading" :size="16" class="animate-spin" />
              <span>{{ isLoading ? "Signing in..." : "Sign in" }}</span>
            </button>
          </div>
        </form>

      </div>

      <div class="text-[0.85rem] text-muted-foreground/40 text-center lg:text-left invisible">
        Spacer
      </div>
    </div>

    <div class="hidden lg:flex lg:w-[55%] relative flex-col items-center justify-center bg-gradient-to-b from-primary/95 to-background border-l border-border isolation-auto">
      
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        <div class="absolute inset-0 ps2-grid-matrix opacity-[0.25] dark:opacity-[0.12]" />
        
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(var(--accent-rgb,var(--primary)),0.4)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary),0.2)_0%,transparent_70%)]" />

        <div class="absolute inset-0 opacity-40 dark:opacity-70">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/30 blur-[100px] animate-ps2-orb-float-slow" />
          <div class="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[140px] animate-ps2-orb-float-fast" />
          <div class="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-primary/30 blur-[90px] animate-ps2-orb-float-reverse" />
        </div>

        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      </div>

      <div class="relative z-10 flex flex-col items-center text-center px-12 group" data-aos="fade-up" data-aos-duration="1000">
        <div class="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-[24px] flex items-center justify-center shadow-[0_12px_40px_rgba(var(--primary),0.3)] group-hover:scale-105 transition-transform duration-500">
          <img src="../../assets/icon.svg" alt="App Logo" class="w-14 h-14 object-contain brightness-0 invert" />
        </div>
        <h2 class="text-2xl font-bold mt-6 tracking-tight text-foreground">
          Admin Panel
        </h2>
        <p class="text-sm text-muted-foreground/80 max-w-xs mt-2 leading-relaxed">
          Sistem manajemen perangkat lunak skala bisnis terintegrasi.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.ps2-grid-matrix {
  background-image: 
    linear-gradient(to right, hsl(var(--foreground) / 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--foreground) / 0.15) 1px, transparent 1px);
  background-size: 1rem 1rem;
  mask-image: radial-gradient(circle at 50% 50%, #000 20%, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 20%, transparent 80%);
}

@keyframes ps2-orb-float-slow {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(30px, -40px) scale(1.15); opacity: 0.6; }
  100% { transform: translate(-10px, 10px) scale(0.95); opacity: 0.3; }
}

@keyframes ps2-orb-float-fast {
  0% { transform: translate(0, 0) scale(1.05); opacity: 0.4; }
  50% { transform: translate(-40px, 30px) scale(0.95); opacity: 0.5; }
  100% { transform: translate(20px, -20px) scale(1.05); opacity: 0.4; }
}

@keyframes ps2-orb-float-reverse {
  0% { transform: translate(0, 0) scale(0.95); opacity: 0.4; }
  50% { transform: translate(-20px, -30px) scale(1.1); opacity: 0.3; }
  100% { transform: translate(30px, 20px) scale(0.95); opacity: 0.4; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

.animate-ps2-orb-float-slow {
  animation: ps2-orb-float-slow 21s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-ps2-orb-float-fast {
  animation: ps2-orb-float-fast 24s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-ps2-orb-float-reverse {
  animation: ps2-orb-float-reverse 18s ease-in-out infinite;
  will-change: transform, opacity;
}

.animate-shake {
  animation: shake 0.4s ease;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: hsl(var(--foreground));
  -webkit-box-shadow: 0 0 0px 1000px hsl(var(--background)) inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
