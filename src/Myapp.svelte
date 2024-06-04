<script>
import Header from "./lib/header.svelte";
import Inicio from './sections/Inicio.svelte'
import Aboutme from './sections/Aboutme.svelte'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
</script>

<Analytics/>
<Header/>
<SpeedInsights />
<main class="px-4 mt-16">
    <Inicio/>
    <Aboutme/>
</main>
