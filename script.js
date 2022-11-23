//Create speakers sections

const speakersData = [
  {
    photo: './images/Speakers-01.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-02.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-03.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-04.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-05.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speaker-06.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
];

const dynamic = document.querySelector('.speaker-area');
dynamic.innerHTML = `<div class='speakers-detail'>
          
          <img src="${speakersData[0].photo}" class="image" 
        </div>
        <div class='col-2'>
          <h3>Lorna Gig</h3>
          <p style="color:#ed5342"><em>${speakersData[0].title}</em></p>
          <span></span>
          <p>
          ${speakersData[0].description} 
          </p>
        </div>
        </div>


        <div class='speakers-detail'>
          
          <img src="${speakersData[0].photo}" class="image" 
        </div>
        <div class='col-2'>
          <h3>Lorna Gig</h3>
          <p style="color:#ed5342"><em>${speakersData[0].title}</em></p>
          <span></span>
          <p>
          ${speakersData[0].description} 
          </p>
        </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        `;

// --------------------- Mobile-Menu------------------

const mobileMenu = document.getElementById('main-menu');
const closeBtn = document.getElementById('close');
const hamburger = document.getElementById('menu');

hamburger.onclick = function showMenu() {
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  mobileMenu.style.display = 'none';
};
