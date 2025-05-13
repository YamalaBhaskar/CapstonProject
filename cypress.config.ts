import { error } from 'console';
import { defineConfig } from 'cypress';
 
export default defineConfig({

  e2e: {
    pageLoadTimeout: 10000,
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#',
  },
  env: {
    url: 'https://rahulshettyacademy.com/seleniumPractise/#',
   
  },
  screenshotOnRunFailure: true,
  video: true,
});

