import '../style.scss';
import js_image from './assets/avatar.jpg';
import js_project1 from './assets/travel.png';
import js_project2 from './assets/shelter.png';
import js_project3 from './assets/virtual-keyboard.png';
import js_project4 from './assets/minesweeper.png';
import js_project5 from './assets/online-store.png';
import js_project6 from './assets/puzzle.png';

const projects = [
  {
    title: 'Travel',
    imageSrc: js_project1,
    url: 'https://rolling-scopes-school.github.io/astap4-JSFEPRESCHOOL2022Q2/Travel/'
  },
  {
    title: 'Shelter',
    imageSrc: js_project2,
    url: 'https://rolling-scopes-school.github.io/astap4-JSFE2023Q1/Shelter/'
  },
  {
    title: 'Virtual-keyboard',
    imageSrc: js_project3,
    url: 'https://astap4.github.io/virtual-keyboard/'
  },
  {
    title: 'Minesweeper',
    imageSrc: js_project4,
    url: 'https://rolling-scopes-school.github.io/astap4-JSFE2023Q1/minesweeper/'
  },
  {
    title: 'Online-shop',
    imageSrc: js_project5,
    url: 'https://astap4-siarheiliavontsyeu-onlinestore.netlify.app/#main'
  },
  {
    title: 'Puzzle',
    imageSrc: js_project6,
    url: 'https://rolling-scopes-school.github.io/astap4-JSFE2022Q3/puzzle/'
  },
]

const imageContainer = document.querySelector('.my-photo')
const myImage = document.createElement('img');
myImage.classList.add('my-photo-img')
myImage.src = js_image;

imageContainer.append(myImage);

const projectsContainer = document.querySelector('.projects')

projects.forEach((item) => {
  const project = document.createElement('a');
  project.href = item.url;
  project.classList.add('project')
  const projectImg = document.createElement('img');
  projectImg.classList.add('project-img');
  projectImg.src = item.imageSrc;
  const projectLink = document.createElement('p');
  projectLink.textContent = item.title;
  projectLink.classList.add('project-title');
  project.append(projectImg, projectLink)
  projectsContainer.append(project)
})


