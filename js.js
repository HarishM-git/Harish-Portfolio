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



const Projects=[{
  img:"project-photos/rps-game.png",
  content:"This is an Rock Paper Scissor Game for JS Practice",
  href:"https://harishm-git.github.io/rps-game/"
},
{
  img:"project-photos/tdl.png",
  content:"This is an To Do List for JS Practice",
  href:"https://harishm-git.github.io/t-d-list/"
},
{
  img:"project-photos/youtube.png",
  href:"https://harishm-git.github.io/you-tube/" ,
  content:"This is an Youtube Clone for Html and Css Practice"
}]


Projects.forEach((element)=>{

  const anch=document.createElement('a');
  anch.style="text-decoration:none";
  anch.href=element.href;
  const common_mo=document.createElement('div');
  common_mo.className="common-model youtube-con";
  const styleCo=document.createElement('div');
  styleCo.className="style-container";
  const Image=document.createElement('img');
  Image.src=element.img;
  Image.alt="photo about my project";
  const text_pro=document.createElement('div');
  text_pro.className="text-project";
  const h_4=document.createElement('h4');
  h_4.innerText=element.content;
  styleCo.append(Image);
  text_pro.append(h_4);
  common_mo.append(styleCo);
  common_mo.append(text_pro);
  anch.append(common_mo);

  document.querySelector('.feature-pro-container').appendChild(anch)



})



document.addEventListener('DOMContentLoaded', function() {
  const headerLinks = document.querySelectorAll('header a');

  function setActiveLink() {
      headerLinks.forEach(link => {
          // Check if link is not null
          if (link !== null) {
              const href = link.getAttribute('href');
              if (href) {
                  const sectionId = href.substring(1);
                  const section = document.getElementById(sectionId);

                  // Only proceed if section is found
                  if (section && isElementInViewport(section)) {
                      // Remove 'active' class from all links
                      headerLinks.forEach(headerLink => headerLink.classList.remove('active'));
                      // Add 'active' class to the current link
                      link.classList.add('active');
                  }
              }
          }
      });
  }

  setActiveLink();

  window.addEventListener('scroll', setActiveLink);

  // Check if an element is in the viewport
  function isElementInViewport(el) {
      if (el === null) {
          return false;
      }
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
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





