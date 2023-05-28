const projects = [
  {
    title: 'Travel',
    imageSrc: './assets/travel.png',
    url: 'https://rolling-scopes-school.github.io/astap4-JSFEPRESCHOOL2022Q2/Travel/'
  },
  {
    title: 'Shelter',
    imageSrc: './assets/shelter.png',
    url: 'https://rolling-scopes-school.github.io/astap4-JSFE2023Q1/Shelter/'
  },
  {
    title: 'Virtual-keyboard',
    imageSrc: './assets/virtual-keyboard.png',
    url: 'https://astap4.github.io/virtual-keyboard/'
  },
  {
    title: 'Minesweeper',
    imageSrc: './assets/minesweeper.png',
    url: 'https://rolling-scopes-school.github.io/astap4-JSFE2023Q1/minesweeper/'
  },
  {
    title: 'Online-shop',
    imageSrc: './assets/online-store.png',
    url: 'https://astap4-siarheiliavontsyeu-onlinestore.netlify.app/#main'
  },
  {
    title: 'Puzzle',
    imageSrc: './assets/puzzle.png',
    url: 'https://rolling-scopes-school.github.io/astap4-JSFE2022Q3/puzzle/'
  },
]

// const imageContainer = document.querySelector('.my-photo')
// const myImage = document.createElement('img');
// myImage.classList.add('my-photo-img')
// myImage.src = js_image;

// imageContainer.append(myImage);

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


