function getMenu() {
    // set variables
    var url = window.location.pathname;
    var nav = document.getElementById('nav');

    // create menu tabs from menu array
    for (x = 0; x < aryMenu.length; x++) {

        // create new list item
        var li = document.createElement('li');

        // get page 
        var pageName = aryMenu[x][0];

        // set active status of tab
        if (url.indexOf(pageName) > 0) {
            li.setAttribute('class', 'active')
        } else {
            li.setAttribute('class', 'inactive')
        }

        // create anchor tag
        let a = document.createElement('a');
        a.href = aryMenu[x][0];
        a.innerText = aryMenu[x][1];

        // append anchor tag to li
        li.appendChild(a);

        //append li to ul
        nav.appendChild(li);
    }
}

function getSemester() {
    var semesterList = document.getElementById('semesterList');
  
    var option = document.createElement('option');
    option.value = 0;
    option.text = 'Select a Semester';
    semesterList.appendChild(option);
  
    for (var i = 0; i < arySemesters.length; i++) {
      var option = document.createElement('option');
      option.value = arySemesters[i][0];
      option.text = arySemesters[i][1];
      semesterList.appendChild(option);
    }
  }
  
  
  function getClass(semesterList) {
    var semesterID = semesterList.value;
    var classesArray = eval(`ary${semesterID}`);
    var classList = document.getElementById('classList');
  
    classList.innerHTML = '';
  
    for (var i = 0; i < classesArray.length; i++) {
      var option = document.createElement('option');
      option.value = classesArray[i][0];
      option.text = classesArray[i][1];
      classList.appendChild(option);
    }
  
    getStudents(); 
  }
  
function deleteClass() {
    var selectedIndex = document.getElementById('classList').selectedIndex;
      var selectedSemester = document.getElementById('semesterList').value;
      var selectedArray = eval(`ary${selectedSemester}`);
      if (selectedIndex === -1) {
      alert('Please select an item to delete.');
      return;
    }
  
    selectedArray.splice(selectedIndex, 1);
  
    getClass(document.getElementById('semesterList'));
  }
function addClass() {
    var selectedSemester = document.getElementById('semesterList').value;
  
    var className = document.getElementById('className').value;
  
    var sectionNumber = document.getElementById('sectionNumber').value;
  
    var selectedArray = eval(`ary${selectedSemester}`);
  
    if (!className || !sectionNumber) {
      alert('Please enter a class name and section number.');
      return;
    }
  
    var newRow = [className, sectionNumber];
  
    selectedArray.push(newRow);
  
    document.getElementById('className').value = '';
    document.getElementById('sectionNumber').value = '';
  
    getClass(document.getElementById('semesterList'));
  }
  function getStudents() {
    var classList = document.getElementById('classList');
    var selectedClassIndex = classList.selectedIndex;
    var selectedClassValue = classList.value;
    var selectedArray = eval(`ary${selectedClassValue}`);
    var studentList = document.getElementById('studentList');
  
    studentList.innerHTML = '';
  
    for (var i = 0; i < selectedArray.length; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = selectedArray[i][0] + ' ' + selectedArray[i][1];
      studentList.appendChild(option);
    }
  }
  
  function addStudent() {
    var classList = document.getElementById('classList');
    var selectedClassValue = classList.value;
    var selectedArray = eval(`ary${selectedClassValue}`);
    var meid = document.getElementById('meid').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
  
    if (!meid || !firstName || !lastName) {
      alert('Please enter the MEID, first name, and last name of the student.');
      return;
    }
  
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  
    var fullName = lastName + ', ' + firstName;
    var newStudent = [meid, fullName];
    selectedArray.push(newStudent);

    document.getElementById('meid').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
  
    getStudents();
  }
  
  
  
  
  function clearStudentFields() {
    document.getElementById('meid').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
  }
  
  function deleteStudent() {
    var studentList = document.getElementById('studentList');
    var selectedIndex = studentList.selectedIndex;
    var selectedClassValue = classList.value;
    var selectedArray = eval(`ary${selectedClassValue}`);
    var meid = document.getElementById('meid').value;
  
    if (meid) {
      var indexToDelete = -1;
  
      for (var i = 0; i < selectedArray.length; i++) {
        if (selectedArray[i][0] === meid) {
          indexToDelete = i;
          break;
        }
      }
  
      if (indexToDelete !== -1) {
        selectedArray.splice(indexToDelete, 1);
        studentList.remove(indexToDelete); 
        studentList.selectedIndex = -1;
      } else {
        alert('Student with the specified MEID was not found.');
      }
    } else {
      alert('Please enter the MEID of the student to delete.');
    }
  }
  
  
  