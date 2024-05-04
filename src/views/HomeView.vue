<script setup>
import IconYellow from '@/components/icons/IconYellow.vue';
import IconGooglePlay from '@/components/icons/IconGooglePlay.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import IconArrow2 from '@/components/icons/IconArrow2.vue';
import TheBox from '@/components/TheBox.vue';
import TheExpanded from '@/components/TheExpanded.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
</script>

<template>
  <div
    class="flex flex-col gap-9 lg:flex-row lg:!gap-20 bg-primary-400 h-full pt-20 py-24 px-4 relative overflow-hidden">
    <div class="absolute -top-44 -left-48">
      <div class="bg-primary-300 w-[32rem] h-[32rem] rounded-full !z-0"></div>
    </div>
    <div class="absolute -bottom-44 -right-48">
      <div class="bg-primary-300 w-[32rem] h-[32rem] rounded-full !z-0"></div>
    </div>
    <div class="flex-1 lg:pt-8 lg:ml-24 md:mr-16 ml-4 lg:mr-0 md:pt-28 relative">
      <h1 class=" text-5xl md:text-6xl font-bold leading-normal md:leading-none tracking-wide"> Aplica a adelantos de
        capital más rápido y fácil con DiiMO </h1>
      <IconYellow />
      <div>
        <p class="pt-10 text-2xl">¡Conseguir adelantos de capital nunca fue tan fácil! Sin papeleos, sin historial
          crediticio, ni filas ¡todo en un sólo lugar!</p>
        <IconGooglePlay class="mt-8" />
      </div>
    </div>
    <div
      class=" hidden md:flex pb-24 lg:pb-0 mx-auto justify-center align-middle !items-center relative w-96 lg:w-[26rem] lg:mr-24">
      <img src="../assets/cliente-diimo.webp" alt="" class=" h-auto">
      <div class="absolute right-0 top-20">
        <img src="../assets/diimo-monto-140.webp" alt="" class="circle">
      </div>
      <div class="absolute lg:top-[340px] right-0 top-72">
        <img src="../assets/diimo-monto-365.webp" alt="" class="circle">
      </div>
      <div class="absolute top-72 left-2 lg:top-80">
        <img src="../assets/diimo-monto-35.webp" alt="" class="circle">
      </div>
    </div>
  </div>

  <section id="diimo" class=" pt-24 lg:pt-40 relative scroll-smooth transition-all duration-500">
    <img src="../assets/que-es-diimo.webp" alt="" class="hidden lg:flex absolute z-20 top-10 -left-4 w-1/2">
    <div class="relative bg-primary-700 rounded-3xl w-11/12 mx-auto">
      <img src="../assets/pattern.svg" alt="" class="absolute">
      <div class=" flex-none lg:flex lg:flex-wrap items-center gap-28 px-8 md:pr-12 py-10 mx-auto">
        <div class="flex-1"></div>
        <div class=" text-white flex-1">
          <h2 class="mb-5 text-4xl md:text-5xl font-bold"> ¿Qué es DiiMO? </h2>
          <p> Con DiiMO podrás acceder a adelantos de capital que te darán la oportunidad de avanzar con tus proyectos
            personales. Ofrecemos inclusión financiera para emprendedores, trabajadores y personas que puedan demostrar
            ingresos fijos. <br> Puedes solicitar tu adelanto desde cualquier lugar y en cualquier momento, solo
            necesitas
            tu celular y descargar la App DiiMO. </p>
        </div>
      </div>
    </div>
  </section>

  <section id="how-it-works">
    <div class="pt-24 gap-8 px-4 flex lg:pt-40 xl:px-20 lg:mx-20 justify-between">
      <div class=" hidden md:flex relative text-white">
        <img src="../assets/sin-papeleos-ni-largas-filas.webp" alt="">
        <div class="absolute mx-2 bottom-10 text-center">
          <h2 class="font-bold font">Sin papeleos ni largas filas</h2>
          <p class="mt-2">Olvídate de hacer largas filas y papeleos para acceder a un adelanto de capital DiiMO</p>
        </div>
      </div>
      <div class="relative mx-auto text-white">
        <img src="../assets/confiable-y-seguro.webp" alt="">
        <div class="absolute mx-2 bottom-10 text-center">
          <h2 class="font-bold font">Confiable y seguro</h2>
          <p class="mt-2">Tus datos son resguardados con la única finalidad de otorgarte un adelanto de capital y no son
            compartidos</p>
        </div>
      </div>
      <div class="hidden md:flex relative text-white">
        <img src="../assets/sin-anticipos-ni-fiadores.webp" alt="">
        <div class="absolute mx-2 bottom-10 text-center">
          <h2 class="font-bold font">Sin anticipos ni fiadores</h2>
          <p class="mt-2">En DiiMO jamás te pediremos un pago antes de depositarte tu adelanto de capital</p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center  my-6 gap-4">
      <div class="arrow">
        <IconArrow />
      </div>
      <div class="arrow">
        <IconArrow2 />
      </div>
    </div>
  </section>

  <section class="pb-20 py-24 md:py-36">
    <div class=" bg-secondary-500 relative h-[232px] md:h-[344px] lg:h-[260px] xl:h-[300px]">
      <div class="flex flex-wrap h-full gap-28 md:pr-16 xl:gap-6 lg:pr-10">
        <div class="hidden md:flex flex-1 "><img src="../assets/montos-diimo.webp" alt=""
            class="absolute w-[424px] lg:w[480px] xl:w-[608px] bottom-0 left-10 lg:left-12 sc:left-36 xl:left-28"></div>
        <div
          class="flex-1 pt-6 rsm:pt-16 rsm:px-0 md:ml-6 md:py-16 w-full px-16 md:pt-12 !align-middle text-center md:text-left">
          <h2 class="my-auto font-medium lg:font-bold text-4xl md:text-5xl sc:ml-10 xl:ml-8 xl:mr-28">"No se trata de
            las ideas, se
            trata de hacerlas realidad"</h2>
        </div>
      </div>
    </div>
  </section>

  <section id="how-to-start">
    <div>
      <h2 class=" text-center text-4xl font-bold text-primary-500">¿Cómo obtengo mi adelanto de capital?</h2>
    </div>
    <div class=" flex flex-wrap my-12 mt-16">
      <div class="hidden z-10 left-0 top-24 lg:flex flex-1 w-[41rem] !xl:w-[780px] mt-28">
        <div class=" absolute w-[656px]"><img src="../assets/descarga-la-app.webp" alt=""></div>
      </div>
      <div class=" w-full lg:w-1/2 z-20">
        <div>
          <TheBox number="1" title="Descarga la app"
            msg="Busca DiiMO App en Google Play Store y descarga la aplicación en tu celular." />
        </div>
        <div>
          <TheBox number="2" title="Completa el registro"
            msg="Regístrate en simples pasos, que te ayudarán a solicitar tu adelanto de capital con DiiMO." />
        </div>
        <div>
          <TheBox number="3" title="Solicita un adelanto de capital"
            msg="Una vez terminado el registro, puedes solicitar el monto inicial para tu adelanto de capital." />
        </div>
        <div>
          <TheBox number="4" title="Espera a que sea aprobado"
            msg="Espera alrededor de 24 horas para que sea aprobado. DiiMO te notificará cuando todo esté listo." />
        </div>
        <div>
          <TheBox number="5" title="Acepta tu adelanto de capital"
            msg="¡Ahora solo queda aceptar tu adelanto de capital, elegir tus abonos, seleccionar donde quieres recibir tu desembolso y recibirás el dinero!" />
        </div>
        <div>
          <TheBox number="6" title="Revisa tus abonos sugeridos"
            msg="Tendrás toda la información de tus abonos en la pantalla principal de la aplicación." />
        </div>
      </div>
    </div>

    <div class="flex justify-center ">
      <div
        class="relative smc:bottom-7 smc:w-[1044px] al:bottom-1 em:bottom-1 sc:bottom-7 px-10 mx-2 md:mx-0 md:px-32 !overflow-hidden bottom-1 lg:bottom-[50px] xl:bottom-7 xl:w-[1200px] lg:px-32 mt-12 lg:mt-0 justify-center bg-primary-800 rounded-3xl py-8 lg:py-12 text-white text-center">
        <h2 class="font-bold text-4xl md:text-6xl"> Aplica ya </h2>
        <p class="mt-8"> ¡Descarga DiiMO App ahora y solicita tu adelanto de capital DiiMO! <br> Sin papeleos, sin
          anticipos
          y completamente seguro. </p>
        <div class="flex md:mx-14 lg:mx-2 xl:mx-6">
          <div class="flex items-center mt-8 flex-1 p-2 py-4 bg-green-100 rounded-xl ">
            <span class="font-bold text-green-900 transition-colors">+503</span>
            <input type="text" inputmode="numeric" name="phone" oninput="this.value = this.value.replace(/\D+/g, '')"
              class="w-full bg-green-100 border-0 outline-none pl-2 ml-2 text-lg text-green-900 border-none"
              placeholder="Número de teléfono">
          </div>
          <button
            class="items-center mt-8 w-1/2 ml-4 md:w-1/2 h-16 !z-50 md:ml-4 hover:bg-primary-600 md:mt-8 justify-center p-4 font-medium text-white transition-colors duration-150 border border-transparent shadow-sm outline-none rounded-xl bg-primary-500 !flex"><span
              class="flex items-center justify-center"> Descargar ahora <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class=" hover:animate-bounce ml-4">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg></span></button>
        </div>
        <img src="../assets/pattern-green-1.svg" alt="" class="absolute top-0 left-0 w-1/3 z-0">
        <img src="../assets/pattern-green-2.svg" alt="" class="absolute bottom-0 right-0 w-1/3 z-0">
      </div>
    </div>
  </section>

  <section id="faq" class="px-8 mt-28 lg:mt-52  lg:px-28">
    <div>
      <h2 class=" text-center text-3xl md:text-4xl font-bold text-primary-500">Preguntas frecuentes</h2>
    </div>
    <div class="md:flex flex-wrap mt-8 gap-8">
      <div class=" flex-1">
        <TheExpanded title="¿Qué es DiiMO?"
          msg="DiiMO es una aplicación que te brinda acceso a adelantos de capital de manera 100% digital. Puedes acceder a estos adelantos desde tu celular en cualquier momento y lugar, estamos disponibles 24/7. El proceso es rápido, no tendrás que pagar ningún costo ni anticipo por verificar si aplicas y el tiempo de respuesta es de máximo 24 horas. El monto aprobado se depositará directamente en tu billetera móvil Tigo Money." />
        <TheExpanded title="¿Cómo solicito un adelanto de capital DiiMO?"
          msg="Solicitar un adelanto de capital DiiMO es sencillo. Solo necesitas descargar y tener instalada la aplicación en tu teléfono Android y tu DUI. Completa el formulario inicial, selecciona el monto disponible y podrás aplicar en cuestión de segundos." />
        <TheExpanded title="¿Puedo aplicar si no tengo una cuenta para desembolso?"
          msg="Sí, puedes completar el proceso de solicitud incluso si no tienes una cuenta de desembolso. Si tu adelanto de capital es aprobado, tendrás 5 días para abrir tu cuenta. Una vez abierta, podrás aceptar y recibir tu dinero en las siguientes 24 horas. Si no abres la cuenta en 5 días, la aprobación expirará, pero siempre podrás hacer una nueva solicitud" />
        <TheExpanded title="¿Qué opciones tengo con el dinero en mi cuenta Tigo Money?"
          msg="Una vez que tengas el dinero en tu cuenta Tigo Money, podrás realizar varias acciones: recargar tu celular, enviar dinero a otras personas, pagar servicios o incluso retirarlo en efectivo en alguno de los más de 2,200 agentes Tigo Money distribuidos en todo el país. Algunas transacciones podrían tener cargos por parte de Tigo Money." />
        <TheExpanded title="¿En cuánto tiempo recibiré el dinero?"
          msg="Una vez que tu adelanto de capital sea aprobado, deberás aceptar tu adelanto y recibirás el depósito en tu cuenta en cuestión de minutos, sin importar el día o la hora." />
      </div>
      <div class=" flex-1">
        <TheExpanded title="¿Cuándo comienza el plazo para mi adelanto de capital?"
          msg="El plazo para el pago de tu adelanto de capital comienza a correr a partir del momento en que recibes el dinero en tu cuenta." />
        <TheExpanded title="¿Cómo puedo confiar mis datos a DiiMO?"
          msg="DiiMO utiliza estándares de encriptación y seguridad de nivel mundial para proteger tus datos. Nunca compartimos tu información con terceros ni vendemos tu información o perfil crediticio." />
        <TheExpanded title="¿Cómo mejoro mi nivel DiiMO?"
          msg="Tu nivel DiiMO mejora al pagar a tiempo. Cada pago puntual te permitirá acceder a mayores montos en el futuro." />
        <TheExpanded title="¿Puedo realizar abonos anticipados sin penalidades?"
          msg="Sí, puedes realizar abonos parciales o totales antes del vencimiento de la deuda sin incurrir en penalidades." />
        <TheExpanded title="¿Qué sucede si no puedo pagar a tiempo?"
          msg="Entendemos las situaciones y aplicamos un recargo moratorio único. Aunque reportamos al buró de crédito, nuestro enfoque de cobro es respetuoso y no agresivo." />
      </div>
    </div>
  </section>

  <section>
    <div class="bg-slate-100 mt-24 pb-44 py-10 lg:pb-28 mb-6">
      <h2 class=" text-center text-4xl font-bold text-primary-500">La gente dice</h2>
      <div class="flex mt-10 px-4 lg:px-24">
        <TheTestimonial
          opinion=" &quot;Yo he tenido una muy buena experiencia, un adelanto de capital pequeño para salir de un apuro.&quot;"
          person="- Nancy Alvarado" class="hidden md:block" />
        <TheTestimonial
          opinion=" &quot;Es una app confiable. Sí te aprueba el crédito sin anticipos, ni timos en unos minutos y obtuve mi primer crédito. ¡Muy recomendada!&quot; "
          person="- David Lizama" />
        <TheTestimonial opinion=" &quot;Es muy buena salida a nuestras necesidades, gracias DiiMO.&quot; "
          person="- Julio Martínez" class="hidden md:block" />
      </div>
    </div>
  </section>

  <footer class="mt-24">
    <div class=" px-4 lg:px-0 bg-primary-400 py-11">
      <h2 class="mb-6 text-4xl font-bold text-center text-white"> ¡Descarga ya! </h2>
      <p class="my-4 text-center text-white"> Con DiiMO App accederás a adelantos de capital desde tu celular, olvídate
        largas filas, papeleos y tiempos largos de espera. <br> ¡Conoce DiiMO App y únete a la mejor solución financiera
        digital! </p>
      <div class="flex items-center justify-center py-4 gap-x-4"><a href="https://www.facebook.com/DiimoAppSV"
          target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="w-6 h-6 text-white transition ease-in-out transform hover:scale-110">
            <path fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
            </path>
          </svg></a><a href="https://www.tiktok.com/@diimoapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512" class="w-6 h-6 text-white transition ease-in-out transform hover:scale-110">
            <path fill="currentColor"
              d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z">
            </path>
          </svg></a><a href="https://www.instagram.com/diimoapp/" target="_blank"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            class="w-6 h-6 text-white transition ease-in-out transform hover:scale-110">
            <path fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
            </path>
          </svg></a><a href="https://www.youtube.com/@diimo4991" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512" class="w-6 h-6 text-white transition ease-in-out transform hover:scale-110">
            <path fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
            </path>
          </svg></a></div>
      <IconGooglePlay class="cursor-pointer w-[170px] mx-auto mt-2" />
    </div>
    <div class=" bg-primary-900 text-center text-primary-200 py-4 text-sm">
      <p>© DiiMO Technologies, S.A de C.V. Todos los derechos reservados 2024</p>
    </div>
  </footer>
</template>