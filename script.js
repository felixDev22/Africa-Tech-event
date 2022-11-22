//Create speakers sections

const speakersData = [
  {
    photo: './images/Speaker 1.png',
    shape: './images/vector3.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speaker-2.png',
    shape: './images/vector3.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speaker-7.png',
    shape: './images/vector3.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speaker-3.png',
    shape: './images/vector3.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speaker-4.png',
    shape: './images/vector3.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
  {
    photo: './images/Speaker-8.png',
    shape: './images/vector3.png',
    title: 'CE0 of Africa Tech club',
    description:
      'Founder of Brits-Tech, with 15 years experience in technology and innovation',
  },
];
const dynamic = document.querySelector('.speakers-detail');
dynamic.innerHTML = `<div class='portrait'>
          <img src="${speakersData[0].photo}" class=image alt="speaker" />
          <div class='shape'>
            <img src="${speakersData[0].shape}" alt="shape" />
          </div>
        </div>
        <div class='text-area'>
          <h3>Lorna Gig</h3>
          <p style="color:#ed5342"><em>${speakersData[0].title}</em></p>
          <span></span>
          <p>
          ${speakersData[0].description} 
          </p>
        </div>`;

function displaySpeakers() {
  dynamic.style.display = 'flex';
}
