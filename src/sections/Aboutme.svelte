<script>
import Projectcard from '../lib/ProjectCard.svelte'
import Experience from './Experience.svelte'
import { CircleUserRound, BriefcaseBusiness, Terminal, Rocket } from 'lucide-svelte';
</script>

<section class="section md:py-6 scroll-m-20 w-full container">
    <div class="flex flex-col" id="aboutme">
        <div class="my-2 flex flex-row">
            <CircleUserRound size=30 class="mr-4"/>
            <h2 class="text-2xl">About me</h2>
        </div>
        <div class="my-2">
            Hi, my name is Marlon, I'm a software developer, I have worked as a web application developer for 5 years, custom systems working with agile methodologies such as SCRUM and XP model, 
            being a Full Stack developer with BackEnd languages such as PHP with Laravel and Python, Front End of Javascript with Vuejs.
        </div>
    </div>
    <div class="flex flex-col mt-3" id="projects">
        <div class="my-2 flex flex-row">
            <Terminal size=30 class="mr-4"/>
            <h2 class="text-2xl">Projects</h2>
        </div>
        <div class="my-2 grid grid-cols-3 grid-flow-row gap-4">
            <Projectcard nameProject="Sap Policial" imgsrc="./src/assets/saplogin.png">
                <div slot="descriptiontext" class="text-justify">
                    A web application was developed to address a major issue faced by the entity: different departments were using disparate systems, leading to a lack of control and data synchronization. 
                    This application centralizes all systems, incorporating user management and privileges. Inspired by ERP systems and SAT, it is designed to be used nationwide on El Salvador and is accessible online.
                </div>
            </Projectcard>
            <Projectcard nameProject="Satelite ERP" imgsrc="./src/assets/satsistema.png">
                <div slot="descriptiontext" class="text-justify">
                    It is a software solution designed to optimize production, control, and integrity within a company. The platform is divided into modules that can be subscribed to for use within your own company.
                </div>
            </Projectcard>
            <Projectcard nameProject="Admi. Campeonatos" imgsrc="./src/assets/campeonato.png">
                <div slot="descriptiontext" class="text-justify">
                    Application for managing soccer championships: you can manage everything from team registrations to the final match. You can register each match of the championship and view detailed reports. 
                </div>
            </Projectcard>
        </div>
    </div>
    <div class="flex flex-col" id="experience">
        <div class="my-2 flex flex-row">
            <BriefcaseBusiness size=30 class="mr-4"/>
            <h2 class="text-2xl">Experience</h2>
        </div>
        <Experience/>
    </div>
    <div class="flex flex-col" id="skill">
        <div class="my-2 flex flex-row">
            <Rocket size=30 class="mr-4"/>
            <h2 class="text-2xl">skills</h2>
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, iste nesciunt aut perferendis perspiciatis reprehenderit! Fugiat a reiciendis dolores beatae, necessitatibus voluptatem, illum illo dolore dignissimos rem facere tenetur exercitationem.</div>
    </div>
</section>