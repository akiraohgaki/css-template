function main() {
  // Style
  const style = document.createElement('style');

  style.textContent = `
    main {
      padding: 1rem;
      background-color: #eeeeee;
    }
  `;

  document.head.appendChild(style);

  // Main content
  const main = document.createElement('main');

  main.innerHTML = '';

  const colors = [
    'primary-active',
    'primary',
    'primary-passive',
    'secondary-active',
    'secondary',
    'secondary-passive',
    'background',
    'surface',
    'important',
    'information'
  ];

  for (const color of colors) {
    main.innerHTML += `
      <div style="
        background-color: var(--color-${color});
        color: var(--color-on-${color});
        display: inline-block;
        width: 15rem; height: 10rem;
        margin: 1rem; padding: 1rem;
        vertical-align: bottom;
      ">
      <span style="
        background-color: var(--color-on-${color});
        color: var(--color-${color});
        display: inline-block;
        padding: 0.5rem;
      ">${color}</span>
      <br>
      <span style="
        display: inline-block;
        padding: 0.5rem;
      ">${color}</span>
      <br>
      <!-- Variations -->
      <div style="
        width: 100%; height: 2rem;
        margin-top: 1rem;
      ">
      <span style="
        display: inline-block;
        width: 2rem; height: 100%;
        background-color: white;
        opacity: 0.2;
      "></span>
      <span style="
        display: inline-block;
        width: 2rem; height: 100%;
        background-color: black;
        opacity: 0.2;
      "></span>
      <span style="
        display: inline-block;
        width: 2rem; height: 100%;
        background-color: white;
        mix-blend-mode: overlay;
      "></span>
      <span style="
        display: inline-block;
        width: 2rem; height: 100%;
        background-color: black;
        mix-blend-mode: overlay;
      "></span>
      </div>
      </div>
    `;
  }

  main.innerHTML += '<hr>';

  const textSizes = ['text-small', 'text', 'text-large'];

  for (const size of textSizes) {
    main.innerHTML += `
      <span style="
        display: inline-block;
        padding: 1rem;
        font-size: var(--size-${size});
      ">${size}</span>
    `;
  }

  main.innerHTML += '<hr>';

  const spaceSizes = ['space-small', 'space', 'space-large'];

  for (const size of spaceSizes) {
    main.innerHTML += `
      <span style="
        display: inline-block;
        width: var(--size-${size});
        height: var(--size-${size});
        background-color: black;
      "></span>
      <span>${size}</span>
    `;
  }

  main.innerHTML += '<hr>';

  const radiusSizes = ['radius-small', 'radius', 'radius-large'];

  for (const size of radiusSizes) {
    main.innerHTML += `
      <span style="
        display: inline-block;
        width: 5rem; height: 5rem;
        border-radius: var(--size-${size});
        background-color: black;
      "></span>
      <span>${size}</span>
    `;
  }

  main.innerHTML += '<hr>';

  main.innerHTML += `
    <div style="
      background-color: white;
      border: var(--size-border) solid var(--color-border);
      box-shadow: 0px 0px var(--size-shadow) var(--color-shadow);
      display: inline-block;
      width: 15rem; height: 10rem;
      margin: 1rem; padding: 1rem;
      vertical-align: bottom;
    ">
    border, shadow,
    <span style="
      background-color: var(--color-highlight);
    ">highlight</span>
    </div>
  `;

  document.body.appendChild(main);
}

main();
