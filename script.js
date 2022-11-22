//Create speakers sections

const speakersData = [{}];

const dynamic = document.querySelector('.speakers-detail');
dynamic.innerHTML = `<div class='portrait'>
          <img src="./images/Speaker 1.png" class=image alt="speaker" />
          <div class='shape'>
            <img src="./images/vector3.png"   alt="shape" />
          </div>
        </div>
        <div class='text-area'>
          <h3>Lorna Gig</h3>
          <p><em>CE0 of Africa Tech club</em></p>
          <span></span>
          <p> Africa Tech was established in 2022 to bring on-board the
                African youth to the Tech community. We welcome you for our
                first Dev event
          </p>
        </div>`;

function displaySpeakers() {
  dynamic.style.display = 'flex';
}
