const services=[{
  icon:'fa fa-code',
  name:'Web Developer',
  content:'Seamlessly merging creativity with code to sculpt engaging user interfaces, using HTML, CSS, and JavaScript as the artist\'s palette.'
},{
  icon:'fa fa-brain',
  name:'UI Designer',
  content:'Crafting digital realms where creativity meets functionality, sculpting interfaces that dance with user intuition and delight.'
},
{
  icon:'fa fa-video',
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
  Icon.className = element.icon
  Icon.style = 'color: white'
  const titleDiv=document.createElement('div')
  titleDiv.className='title-name'
  const Hr=document.createElement('hr')
  const serviceCon=document.createElement('div')
  serviceCon.className='service-content'
  const h4 = document.createElement('h4')
  h4.innerText = element.name
  const h6 = document.createElement('h6')
  h6.innerText = element.content
  serdivElem.append(Icon)
  divElem.append(serdivElem)
  titleDiv.append(h4)
  divElem.append(titleDiv)
  divElem.append(Hr)
  serviceCon.append(h6)
  divElem.append(serviceCon)
  document.querySelector('.service-js').appendChild(divElem)

});


var outerContainers = document.querySelectorAll('.web-developer');

outerContainers.forEach(function(container) {
  container.addEventListener('mouseover', function() {
    var innerContainer = container.querySelector('.service-icon');
    var icon = innerContainer.querySelector('.fa');
    icon.style.color = 'Black';
  });

  container.addEventListener('mouseout', function() {
    var innerContainer = container.querySelector('.service-icon');
    var icon = innerContainer.querySelector('.fa');
    icon.style.color = '#01d8c3'; 
  });
});





document.addEventListener('DOMContentLoaded', function() {
  const headerLinks = document.querySelectorAll('header a');

  function setActiveLink() {
      headerLinks.forEach(link => {
          const sectionId = link.getAttribute('href').substring(1);
          const section = document.getElementById(sectionId);
          
          if (isElementInViewport(section)) {
              headerLinks.forEach(headerLink => headerLink.classList.remove('active'));
              link.classList.add('active');
          }
      });
  }

  setActiveLink();

  window.addEventListener('scroll', setActiveLink);

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});
