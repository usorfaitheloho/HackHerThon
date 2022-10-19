// Mobile menu navigation functionality
const container = document.getElementsByClassName('toggle-menu')[0];
const icon = document.querySelector('.hamburger .fa-bars');
const logo = document.querySelector('.logo');

container.style.visibility = 'hidden';

function changeIcon() {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
  logo.style.visibility = 'hidden';
  icon.style.left = '20px';
  if (container.style.visibility === 'hidden') {
    container.style.visibility = 'visible';
  } else if (container.style.visibility !== 'hidden') {
    container.style.visibility = 'hidden';
    logo.style.visibility = 'visible';
  }
}

function hideMenu() {
  container.style.visibility = 'hidden ';
  logo.style.visibility = 'visible';
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
}
changeIcon();
hideMenu();

const projectCard = [
  {
    Name: 'Faith Eloho Usor',
    Position: 'president of the Hackerthon',
    Occupation: 'full Stack programmer',
    Image: ['./assets/images/faith.jpg'],
  },
  {
    Name: 'Dr. Olubamji Adeola',
    Position: 'Co-founder of the Hackerthon',
    Occupation: 'Back end programmer',
    Image: ['./assets/images/Dr.olubamji.jpg'],
  },
  {
    Name: 'omotoyosi Omotee',
    Position: 'Co-founder of the Hackerthon',
    Occupation: 'Data Scientist',
    Image: ['./assets/images/Omotoyosi.jpg'],
  },
  {
    Name: 'Omobolanle Adeola',
    Position: 'Co-founder of the Hackerthon',
    Occupation: 'Back end programmer',
    Image: ['./assets/images/omobolanle.jpg'],
  },
  {
    Name: 'Ola Adegbeye',
    Position: 'Co-founder of the Hackerthon',
    Occupation: 'specialist in programming',
    Image: ['./assets/images/Ola.png'],
  },
  {
    Name: 'Deba Eiche',
    Position: 'president of the congress',
    Occupation: 'specialist in programming',
    Image: ['./assets/images/Deba.jpg'],
  },
];

document.querySelector('.speakers-containers').innerHTML = projectCard.map((data) => `
  <div class="speakers-target col-12 col-md-5">
  <div class="back-img row mb-5  p-4">
  <div class = "speakers-background"><img src="./assets/images/draft.jpg"/> </div>
  <div class="col-3  pr-0 pl-0">
     <img src=${data.Image} width="120" alt="speaker1"/>
  </div>
  <div class="col-9 speaker-block pr-0 ">
    <h3 class=" section-title font-weight-bold">${data.Name}</h3>
    <p class="orange font-italic">${data.Position}</p>
    <span class="hr-speakers ml-0 mb-3"> </span>
    <p>${data.Occupation}</p>
  </div>
  </div>
</div>
  `).join('');

function Speaker() {
  const classSpeakers = Array.from(document.querySelectorAll('.speakers-target'));
  for (let i = 2; i < classSpeakers.length; i += 1) {
    classSpeakers[i].classList.add('hide');
  }
}
Speaker();

function show() {
  document.querySelector('.more-speakers').addEventListener('click', () => {
    const classSpeakers = Array.from(document.querySelectorAll('.speakers-target'));
    for (let i = 2; i < classSpeakers.length; i += 1) {
      classSpeakers[i].classList.toggle('hide');
    }
    const button = document.querySelector('#more-speakers');
    if (button.innerHTML === '"MORE" <i class="fas fa-angle-down orange"> ::before </i>') {
      button.innerHTML = 'LESS <i class="fas fa-angle-up orange"></i>';
    } else { button.innerHTML = ' MORE <i class="fas fa-angle-down orange"></i>'; }
  });
}

show();
