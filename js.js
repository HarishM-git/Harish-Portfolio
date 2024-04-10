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
  const divElem = document.createElement('div')
  divElem.className = 'web-developer video-editor'
  const serdivElem = document.createElement('div')
  serdivElem.className = 'service-icon'
  const Icon = document.createElement('i')
  Icon.className = 'fa-solid fa-video'
  Icon.style = 'color: black'
  const titleDiv=document.createElement('div')
  titleDiv.className='title-name'
  const serviceCon=document.createElement('div')
  serviceCon.className='service-content'
  const h4 = document.createElement('h4')
  h4.innerText = element.name
  const h6 = document.createElement('h6')
  h6.innerText = element.content
  titleDiv.append(h4)
  serviceCon.append(h6)
  serdivElem.append(Icon)
  divElem.append(serdivElem)
  divElem.append(titleDiv)
  divElem.append(serviceCon)
  document.querySelector('.service-js').appendChild(divElem)
});