const divElement = document.querySelector('.onLine');
let isOnLine = true; // Initial value

function updateBackground() {
  if (isOnLine) {
    divElement.classList.remove('offLine');
    divElement.classList.add('onLine');
  } else {
    divElement.classList.remove('onLine');
    divElement.classList.add('offLine');
  }
}

// Simulating the change of `isOnLine` from true to false
isOnLine = false;
updateBackground();
