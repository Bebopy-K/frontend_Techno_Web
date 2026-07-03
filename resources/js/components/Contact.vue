<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Pengembangan Web",
  message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  console.log(contactForm);

  const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Halo, saya ${firstName} ${lastName}, Email saya adalah ${email}. %0D%0A${message}`;

  window.location.href = mailToLink;
};
</script>

<template>
  <section
    id="contact"
    class="container py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6"
    data-aos="fade-up" data-aos-duration="1000"
  >
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4">
          <p class="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Kontak</p>

          <h2 class="text-3xl md:text-4xl font-bold">Hubungi Kami</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Silakan hubungi kami untuk mendiskusikan proyek Anda berikutnya atau jika Anda memiliki pertanyaan seputar layanan kami.
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 />
              <div class="font-bold">Alamat Kami</div>
            </div>

            <div>Jl. Tadulako No.35</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone />
              <div class="font-bold">Telepon</div>
            </div>

            <div>-</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">Email</div>
            </div>

            <div>technocelebesv@gmail.com</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Clock />
              <div class="font-bold">Jam Kerja</div>
            </div>

            <div>
              <div>Senin - Jumat</div>
              <div>08.00 - 17.00</div>
            </div>
          </div>
        </div>
      </div>

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form
            @submit.prevent="handleSubmit"
            class="grid gap-4"
          >
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">Nama Depan</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  v-model="contactForm.firstName"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Nama Belakang</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  v-model="contactForm.lastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                v-model="contactForm.email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Subjek</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Pilih subjek" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Pengembangan Web">
                      Pengembangan Web
                    </SelectItem>
                    <SelectItem value="Pengembangan Aplikasi Mobile">
                      Pengembangan Aplikasi Mobile
                    </SelectItem>
                    <SelectItem value="Desain Figma"> Desain Figma </SelectItem>
                    <SelectItem value="REST API"> REST API </SelectItem>
                    <SelectItem value="Proyek FullStack">
                      Proyek FullStack
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Pesan</Label>
              <Textarea
                id="message"
                placeholder="Tulis pesan Anda di sini..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert
              v-if="invalidInputForm"
              variant="destructive"
            >
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Kesalahan</AlertTitle>
              <AlertDescription>
                Terdapat kesalahan pada formulir Anda. Silakan periksa kembali inputan Anda.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Kirim pesan</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
