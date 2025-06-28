// Check if running on Apple device
if (!Sukashi.isAppleDevice()) {
    document.getElementById('device-warning').style.display = 'block';
}

// Basic demo - checkerboard pattern
function createBasicDemo() {
    const brightnessArray = Sukashi.createBrightnessArray(8, 8, 50);
    
    // Create checkerboard pattern
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            const isEven = (x + y) % 2 === 0;
            Sukashi.setBrightness(brightnessArray, x, y, isEven ? 100 : 20);
        }
    }
    
    const container = document.getElementById('basic-demo');
    const element = Sukashi.createSukashi(brightnessArray, { 
        pixelSize: 6,
        container 
    });
}

// Gradient demo
function createGradientDemo() {
    const brightnessArray = Sukashi.createBrightnessArray(16, 8, 0);
    
    // Create horizontal gradient
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 16; x++) {
            const brightness = Math.floor((x / 15) * 100);
            Sukashi.setBrightness(brightnessArray, x, y, brightness);
        }
    }
    
    const container = document.getElementById('gradient-demo');
    const element = Sukashi.createSukashi(brightnessArray, { 
        pixelSize: 4,
        container 
    });
}

// Interactive demo
let interactiveArray = Sukashi.createBrightnessArray(12, 12, 50);
let interactiveElement = null;

function createInteractiveDemo() {
    const container = document.getElementById('interactive-demo');
    container.innerHTML = ''; // Clear previous content
    
    const pixelSize = parseInt(document.getElementById('pixel-size').value);
    interactiveElement = Sukashi.createSukashi(interactiveArray, { 
        pixelSize,
        container 
    });
}

function generateRandomPattern() {
    const maxBrightness = parseInt(document.getElementById('max-brightness').value);
    
    for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 12; x++) {
            const brightness = Math.floor(Math.random() * maxBrightness);
            Sukashi.setBrightness(interactiveArray, x, y, brightness);
        }
    }
    
    createInteractiveDemo();
}

function generateWavePattern() {
    const maxBrightness = parseInt(document.getElementById('max-brightness').value);
    
    for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 12; x++) {
            const wave = Math.sin((x + y) * 0.5) * 0.5 + 0.5;
            const brightness = Math.floor(wave * maxBrightness);
            Sukashi.setBrightness(interactiveArray, x, y, brightness);
        }
    }
    
    createInteractiveDemo();
}

function generateSpotlightPattern() {
    const maxBrightness = parseInt(document.getElementById('max-brightness').value);
    const centerX = 6;
    const centerY = 6;
    
    for (let y = 0; y < 12; y++) {
        for (let x = 0; x < 12; x++) {
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
            const brightness = Math.floor((1 - distance / maxDistance) * maxBrightness);
            Sukashi.setBrightness(interactiveArray, x, y, Math.max(0, brightness));
        }
    }
    
    createInteractiveDemo();
}

// Event listeners for controls
document.getElementById('pixel-size').addEventListener('input', (e) => {
    document.getElementById('pixel-size-value').textContent = e.target.value + 'px';
    createInteractiveDemo();
});

document.getElementById('max-brightness').addEventListener('input', (e) => {
    document.getElementById('max-brightness-value').textContent = e.target.value + '%';
});

// Initialize demos
createBasicDemo();
createGradientDemo();
generateWavePattern(); // Start with wave pattern for interactive demo