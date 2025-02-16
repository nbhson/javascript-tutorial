var courseAPI = "http://localhost:3000/coures";

function start() {
  getCourses(renderCourse);
  handleFormAdd();
}

// start app
start();

/**
 * return data form server
 * @param {*} callback
 */
function getCourses(callback) {
  // mặc định phương thức là get
  fetch(courseAPI)
    .then((res) => {
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}

/**
 * render UI
 * @param {*} courses
 */
function renderCourse(courses) {
  console.log(courses);
  var listCourseBlock = document.querySelector("#list-course");
  var html = courses.map(function (course) {
    return `
      <li class="course-item-${course.id}"> 
        <div style="font-size: 22px; font-weight: 600;">${course.name}</div>
        <div>${course.description}</div>
        <div>
          <button onclick="deleteCourse(${course.id})">Xóa</button>
        <div>
      </li>
    `;
  });
  listCourseBlock.innerHTML = html;
}

/**
 * form create
 */
function handleFormAdd() {
  let btnAdd = document.querySelector("#btnAdd");
  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();

    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;

    var formData = {
      name: name,
      description: description,
    };

    addCourses(formData, function (course) {
      getCourses(renderCourse);
    });
  });
}

/**
 * add course
 * @param {*} callback
 */
function addCourses(data) {
  fetch(courseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}

/**
 * delete course
 * @param {*} callback
 */
function deleteCourse(id) {
  fetch(courseAPI + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then(function () {
      // getCourses(renderCourse)
      var courseItem = document.querySelector(`.course-item-${id}`);
      if (courseItem) {
        courseItem.remove();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
