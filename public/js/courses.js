const coursesDiv = document.querySelector('#courseDiv');
const data = {};

var displayAllCourses = function (data) {
  //create elements that make up the course item
  console.log(data);
  let count = 0;

  //create elements and display data to each course item
  data.forEach((event) => {
    let currentCourse = data[count];

    // //parse category data
    // let dataArr = JSON.parse(currentCourse.category);
    // for (let i = 0; i < dataArr.length; i++) {
    //   const categories = dataArr[i];
    //   console.log(categories);
    // }
    //create dynamic elements
    let courseDiv = document.createElement('div');
    let title = document.createElement('h4');
    let category = document.createElement('p');
    let age = document.createElement('p');
    let location = document.createElement('p');
    let description = document.createElement('p');
    let websiteBtn = document.createElement('button');
    let url = document.createElement('p');

    //append elements
    title.append(currentCourse.title);
    category.append(currentCourse.category);
    age.append(currentCourse.age);
    location.append(currentCourse.location);
    description.append(currentCourse.description);
    websiteBtn.innerHTML += `<button class='btn'><a target = 'blank' href = '${currentCourse.url}'><p>View Website</p></a></button>`;

    //append parent elements
    courseDiv.appendChild(title);
    courseDiv.appendChild(category);
    courseDiv.appendChild(age);
    courseDiv.appendChild(location);
    courseDiv.appendChild(description);
    courseDiv.appendChild(websiteBtn);
    coursesDiv.append(courseDiv);

    //add classes to DOM elements
    courseDiv.setAttribute(
      'style',
      'border-radius: 40px; padding: 1%; margin 1%; align-items: center;'
    );
    courseDiv.setAttribute('class', 'card');
    title.setAttribute('class', 'card-header');
    category.setAttribute('class', 'card-text');
    age.setAttribute('class', 'card-text');
    location.setAttribute('class', 'card-text');
    description.setAttribute('class', 'card-text');
    url.setAttribute('class', 'card-footer');

    //go to the next course
    count++;
  });
};

var getCourses = function () {
  fetch('http://localhost:3001/api/courses')
    .then((res) => res.json())
    .then((data) => {
      displayAllCourses(data);
    });
};

window.addEventListener('load', getCourses);
