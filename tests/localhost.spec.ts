import { test, expect } from '@playwright/test';

test('general test', async ({ page }) => {  

  await page.goto('https://localhost:3000/');
  
  await page.getByText('User Profile').nth(1).click();

  await page.getByRole('link', { name: 'Hello World!' }).click();

  await page.getByRole('combobox').selectOption('es');
  
  await page.getByRole('link', { name: 'Perfil de usuario' }).click();
  
  await page.getByRole('link', { name: '¡Hola Mundo!' }).click();
  
  await page.getByRole('combobox').selectOption('en');
  
  await page.getByRole('link', { name: 'User Profile' }).click();
  
  await page.getByRole('navigation', { name: 'main navigation' }).click();
  
  await page.getByRole('link', { name: 'Hello World!' }).click();
  
  await page.getByLabel('Name:').click();
  
  await page.getByLabel('Name:').press('CapsLock');
  
  await page.getByLabel('Name:').fill('A');
  
  await page.getByLabel('Name:').press('CapsLock');
  
  await page.getByLabel('Name:').fill('Alex');
  
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await page.getByText('Hi, Alex!, Now it is 03/06/2023.').click();
  
  await page.getByText('$1,999.99').click();
  
  await page.getByRole('combobox').selectOption('es');
    
  await page.getByText('Nombre:').click();
  
  await page.getByLabel('Nombre:').click();
  
  await page.getByText('¡Hola, Alex!, ahora es el 06/03/2023.').click();
  
  await page.getByText('1999,99 €').click();
  
  await page.getByLabel('Nombre:').click();
  
  await page.getByLabel('Nombre:').fill('Ale');
  
  await page.getByRole('button', { name: 'Cancelar' }).click();
  
  await page.getByRole('link', { name: '¡Hola Mundo!' }).click();
  
  await page.getByRole('combobox').selectOption('en');
  
  await page.getByLabel('Name:').click();
  
  await page.getByLabel('Name:').press('CapsLock');
  
  await page.getByLabel('Name:').fill('A');
  
  await page.getByLabel('Name:').press('CapsLock');
  
  await page.getByLabel('Name:').fill('Alejandro');
  
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await page.getByRole('button', { name: 'Exit' }).click();
  
  await page.getByRole('combobox').selectOption('es');
  
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.goto('https://dev-bnsmryud51ab7o7k.us.auth0.com/u/login?state=hKFo2SBjMFB6LTNHZm1OQUJRRDMtV3EtQzdwX0ZNNjNHYmYyLaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEV0bGFMWHo5dWdOSFYwZzhweS1hRnltTXQ1YnRUMWZao2NpZNkgY0NNNmhMSVprZE1wcVE4aEV4dVhGRGNVZ0hkQmI5OUY');

  await page.goto('https://localhost:3000/');

  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.goto('https://dev-bnsmryud51ab7o7k.us.auth0.com/u/login?state=hKFo2SBjMFB6LTNHZm1OQUJRRDMtV3EtQzdwX0ZNNjNHYmYyLaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEV0bGFMWHo5dWdOSFYwZzhweS1hRnltTXQ1YnRUMWZao2NpZNkgY0NNNmhMSVprZE1wcVE4aEV4dVhGRGNVZ0hkQmI5OUY');

  await page.goto('https://localhost:3000/');
});