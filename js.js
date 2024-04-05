const services=[{
  name:'Web Developer',
  content:'Seamlessly merging creativity with code to sculpt engaging user interfaces, using HTML, CSS, and JavaScript as the artist\'s palette.'
},{
  name:'UI Designer',
  content:'Crafting digital realms where creativity meets functionality, sculpting interfaces that dance with user intuition and delight.'
},
{
  name:'Video and photo editor',
  content:'Crafting compelling stories through precise video editing, each scene woven seamlessly into a captivating narrative.'
}]
let html=''
services.forEach(element => {
html+=`<div class="web-developer video-editor">
    <div class="service-icon"><i style="color: black;"class="fa-solid fa-video"></i></div>
    <div class="title-name"><h4><u>${element.name}</u></h4></div>
    <div class="service-content"><h6>${element.content}</h6></div>
  </div>
</div>`
});
console.log(html);
document.querySelector('.service-js').innerHTML=html;