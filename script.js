// Create a text material with white color
const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Create text
const textGeometry = new THREE.TextGeometry('H', {
    font: new THREE.FontLoader().load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json'),
    size: 1,
    height: 0.1,
    curveSegments: 12,
    bevelEnabled: false
});
const text = new THREE.Mesh(textGeometry, textMaterial);
scene.add(text);
