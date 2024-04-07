const services=[{
  icon:'<i class="fa-solid fa-code"></i>',
  name:'Web Developer',
  content:'Seamlessly merging creativity with code to sculpt engaging user interfaces, using HTML, CSS, and JavaScript as the artist\'s palette.'
},{
  icon:'<i class="fa-solid fa-brain"></i>',
  name:'UI Designer',
  content:'Crafting digital realms where creativity meets functionality, sculpting interfaces that dance with user intuition and delight.'
},
{
  icon:'<i class="fa-solid fa-video"></i>',
  name:'Video and photo editor',
  content:'Crafting compelling stories through precise video editing, each scene woven seamlessly into a captivating narrative.'
}]

const projects=[{
  image:'',
  text:''
},{
  image:'',
  text:'',

},{
  image:'',
  text:''
}]







let html_service=''
services.forEach(element => {
html_service+=`<div class="web-developer video-editor">
    <div class="service-icon">${element.icon}</div>
    <div class="title-name"><h4>${element.name}</h4></div>
    <hr>
    <div class="service-content"><h6>${element.content}</h6></div>
  </div>
</div>`
});

document.querySelector('.service-js').innerHTML=html_service;