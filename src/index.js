//import './style/main.css'
import * as THREE from 'three'
import { ARButton } from './ARbutton';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Mesh, SphericalHarmonics3, TetrahedronGeometry } from 'three'



function init(){


// container to add all the models ,22 camera, scene etc
    const container=document.createElement('div');
    document.body.append(container);

//create a scene 
const scene=new THREE.Scene();

//create camera

const camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.01,40);

const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
			light.position.set(0.5, 1, 0.25);
			scene.add(light);

const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.xr.enabled = true; // New!
container.appendChild(renderer.domElement);
document.body.appendChild(ARButton.createButton(renderer));
window.addEventListener('resize', onWindowResize, false);







const model1=new THREE.IcosahedronGeometry(0.1,1);
const color1=new THREE.MeshBasicMaterial({
    color: new THREE.Color('rgb(159, 43, 104)'),
    
});
const mesh1=new THREE.Mesh(model1,color1);
scene.add(mesh1);
mesh1.position.set(0,0,-0.3);

const model2=new THREE.TorusGeometry(0.15,0.05,12,50);
const color2=new THREE.MeshBasicMaterial({
    color : new THREE.Color("rgb(253,253,150)")
});

const mesh2=new THREE.Mesh(model2,color2);
scene.add(mesh2);
mesh2.position.set(0,0,-0.6);

const model3=new THREE.OctahedronGeometry(0.2,1);
const color3=new THREE.MeshBasicMaterial({
    color : new THREE.Color("rgb(0,0,255)")
});

const mesh3=new THREE.Mesh(model3,color3);
scene.add(mesh3);
mesh3.position.set(0,0,-2);




/*
loader.load(
    '../src/assets/biggltf/scene.glb',
    
    function (gltf) {

        scene.add(gltf.scene);

console.log("Model added to scene");


    },
   
    function (xhr) {
  
},
    
    function (error) {
        console.error(error);
    }
);


*/
//to animate
function animate()
{
    renderer.setAnimationLoop(render);
}
function render(){
    
    renderer.render(scene,camera);
}


//if window is resized

function onWindowResize(){
 camera.aspect=window.innerWidth/window.innerHeight;
 camera.updateProjectionMatrix();
 renderer.setSize(window.innerWidth,window.innerHeight);
}

onWindowResize();

animate();
}
init();

