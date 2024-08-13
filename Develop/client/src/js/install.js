const butInstall = document.getElementById('buttonInstall');

let userPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (ev) => {
  ev.preventDefault();
  userPrompt = ev;
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (userPrompt) {
    userPrompt.prompt();
    const { outcome } = await userPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    userPrompt = null;
    butInstall.style.display = 'none';
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (ev) => {
  console.log('PWA was installed', ev);
});
