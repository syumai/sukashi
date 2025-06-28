// Check if running on Apple device
if (!Sukashi.isAppleDevice()) {
    document.getElementById('device-warning').style.display = 'block';
}

// Pattern demo
let patternArray = Sukashi.createBrightnessArray(24, 24, 50);

function createPatternDemo() {
    const container = document.getElementById('pattern-demo');
    container.innerHTML = ''; // Clear previous content
    
    Sukashi.createSukashi(patternArray, { 
        pixelSize: 4,
        container 
    });
}

function generateCheckerboardPattern() {
    patternArray = Sukashi.createBrightnessArray(16, 16, 50);
    
    // Create checkerboard pattern
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
            const isEven = (x + y) % 2 === 0;
            Sukashi.setBrightness(patternArray, x, y, isEven ? 100 : 20);
        }
    }
    
    createPatternDemo();
}

function generateGradientPattern() {
    patternArray = Sukashi.createBrightnessArray(32, 16, 0);
    
    // Create horizontal gradient
    for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 32; x++) {
            const brightness = Math.floor((x / 31) * 100);
            Sukashi.setBrightness(patternArray, x, y, brightness);
        }
    }
    
    createPatternDemo();
}

function generateRandomPattern() {
    patternArray = Sukashi.createBrightnessArray(24, 24, 50);
    
    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 24; x++) {
            const brightness = Math.floor(Math.random() * 100);
            Sukashi.setBrightness(patternArray, x, y, brightness);
        }
    }
    
    createPatternDemo();
}

function generateWavePattern() {
    patternArray = Sukashi.createBrightnessArray(24, 24, 50);
    
    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 24; x++) {
            const wave = Math.sin((x + y) * 0.5) * 0.5 + 0.5;
            const brightness = Math.floor(wave * 100);
            Sukashi.setBrightness(patternArray, x, y, brightness);
        }
    }
    
    createPatternDemo();
}

function generateSpotlightPattern() {
    patternArray = Sukashi.createBrightnessArray(24, 24, 50);
    const centerX = 12;
    const centerY = 12;
    
    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 24; x++) {
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
            const brightness = Math.floor((1 - distance / maxDistance) * 100);
            Sukashi.setBrightness(patternArray, x, y, Math.max(0, brightness));
        }
    }
    
    createPatternDemo();
}

// Image demo
let imageArray = null;

function loadImage() {
    const imageUrl = document.getElementById('image-url').value;
    const gridSize = 64;
    
    if (!imageUrl) {
        alert('Please enter an image URL');
        return;
    }
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = function() {
        // Create canvas to analyze image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = gridSize;
        canvas.height = gridSize;
        
        // Draw image to canvas, scaled to grid size
        ctx.drawImage(img, 0, 0, gridSize, gridSize);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, gridSize, gridSize);
        const data = imageData.data;
        
        // Create brightness array
        imageArray = Sukashi.createBrightnessArray(gridSize, gridSize, 0);
        
        // Convert pixels to brightness values
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const index = (y * gridSize + x) * 4;
                const r = data[index];
                const g = data[index + 1];
                const b = data[index + 2];
                
                // Calculate brightness using luminance formula
                const brightness = Math.floor((0.299 * r + 0.587 * g + 0.114 * b) / 255 * 100);
                Sukashi.setBrightness(imageArray, x, y, brightness);
            }
        }
        
        createImageDemo();
    };
    
    img.onerror = function() {
        alert('Failed to load image. Please check the URL or try a different image.');
    };
    
    img.src = imageUrl;
}

function createImageDemo() {
    if (!imageArray) return;
    
    const container = document.getElementById('image-demo');
    container.innerHTML = ''; // Clear previous content
    
    const pixelSize = 4;
    Sukashi.createSukashi(imageArray, { 
        pixelSize,
        container 
    });
}


// Event listeners for image demo controls (removed since controls are now fixed)

// Initialize demos
generateWavePattern(); // Start with wave pattern
loadImage(); // Load default image