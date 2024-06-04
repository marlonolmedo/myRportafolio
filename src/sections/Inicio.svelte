<script>
let src = './src/assets/myphoto.jpeg';
import { Send, ExternalLink, Linkedin, Github } from 'lucide-svelte'
</script>

<section id= "inicio" class="section">
    <!-- <div class="grid grid-cols-2 grid-rows-2 border-solid border-white">
        
    </div> -->
    <!-- <div class="flex mb-2 justify-center items-center text-center">
        <img {src} alt="my photo" class="rounded-full" width="200" height="200">
    </div>
    <div class="text-center">
        <h1 class="text-5xl">Jose Marlon Olmedo Alas</h1>
    </div>
    <div class="flex justify-center items-center my-3">
            <div class="flex justify-center items-center rounded-full border-2 border-white border-solid w-52 h-10 cursor-pointer">
                <div class="rounded-full mx-4 bg-green-300 w-3 h-3">
                </div>
                <div clase="font-bold hover:font-extravold">
                    Available to work
                </div>
            </div>
    </div> -->
    <div class="grid grid-cols-3 grid-rows-3 gap-1">
        <div class="row-span-2 flex justify-center">
            <img {src} alt="my photo" class="rounded-full mb-2" width="170" height="170">
        </div>
        <div class="col-span-2 items-center">
            <h1 class="text-5xl">Jose Marlon Olmedo Alas</h1>
        </div>
        <div class="col-span-2">
            <div class="flex justify-center items-center rounded-full border-2 border-white border-solid w-52 h-10 cursor-pointer">
                <div class="rounded-full mx-4 bg-green-300 w-3 h-3">
                </div>
                <div clase="font-bold hover:font-extravold">
                    Available to work
                </div>
            </div>
        </div>
        <a href="mailto:marlonolmedo240@gmail.com" target="_blank" class="border border-solid rounded-full flex justify-center items-center h-12">
            <Send class="mr-2 my-2" size="20"/>
            <p class="font-bold">
                Contact me 
            </p>
        </a>
        <a href="https://www.linkedin.com/in/jose-marlon-olmedo-alas-919989194/" target="_blank" class="border border-solid rounded-full flex justify-center items-center h-12">
            <Linkedin class="mr-2 my-2" size="20"/>
            <p class="font-bold">
                Linkedin
            </p>
        </a>
        <a href="https://github.com/marlonolmedo" target="_blank" class="border border-solid rounded-full flex justify-center items-center h-12">
            <Github class="mr-2 my-2" size="20"/>
            <p class="font-bold">
                Github
            </p>
        </a>
    </div>
 </section>