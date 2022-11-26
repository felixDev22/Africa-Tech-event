//Create speakers sections

const speakersData = [
  {
    photo: './images/Speakers-01.png',
    name: 'Hellen john',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-02.png',
    name: 'Bazu Bazu',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-03.png',
    name: 'Kevin Mzito',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-04.png',
    name: 'Felix Mtongoi',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },

  {
    photo: './images/Speakers-05.png',
    name: 'Linda Henrys',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speakers-06.png',
    name: 'Shruti Shah',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
];

const speakerDetails = document.querySelector('.speaker-area');

speakersData.forEach((speaker) => {
  speakerDetails.innerHTML += `<article class='speakers-detail'>
          <img src="${speaker.photo}" class="image" ></img>
        <div class='col-2'>
          <h3>${speaker.name}</h3>
          <p style="color:#ed5342"><em>${speaker.title}</em></p>
          <span></span>
          <p>
          ${speaker.description} 
          </p>
        </div>
        </article> `;
});

// --------------------- Mobile-Menu------------------

const mobileMenu = document.querySelector('.main-menu');
const closeBtn = document.getElementById('close');
const hamburger = document.getElementById('menu-bar');

hamburger.onclick = function showMenu() {
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  mobileMenu.style.display = none = 'none';
};
