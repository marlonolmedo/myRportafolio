import './index.css'
// import App from './App.svelte'
import App from './Myapp.svelte'
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
// import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

inject();
injectSpeedInsights();

const app = new App({
  target: document.getElementById('app'),
})

export default app
