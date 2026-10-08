// Initial array of students
const students = ["Patrick", "Ryzza", "Lyca", "Junjun", "Daniel"];

// Shows a message in the Result section
function showResult(message) {
  document.getElementById("result").innerHTML = message;
}

// Displays the student list and total number of students
function displayStudents() {
  let list = "";

  for (let i = 0; i < students.length; i++) {
    list += i + 1 + ". " + students[i] + "<br>";
  }

  document.getElementById("studentList").innerHTML = list;

  document.getElementById("totalStudents").innerHTML =
    "Total Students: " + students.length;
}

// push() - adds a student to the end of the array
function pushStudent(name) {
  students.push(name);
}

// pop() - removes and returns the last student
function popStudent() {
  return students.pop();
}

// at() - returns the student at the given index
function findStudentAt(index) {
  return students.at(index);
}

// join() - joins all students using a separator
function joinStudents(separator) {
  return students.join(separator);
}

// toString() - converts the array into a string
function studentsToString() {
  return students.toString();
}

// Adds a new student using push()
function addStudent() {
  let name = document.getElementById("studentName").value;

  let namePattern = /^[A-Za-z\s]+$/;
  if (name.trim() === "") {
    showResult("Please enter a student name.");
  }
  else if(!namePattern.test(name.trim())){
    showResult("Error: Student name must contain letters only (no numbers or symbols).");
  } else {
    pushStudent(name.trim());
    displayStudents();

    document.getElementById("studentName").value = "";

    showResult(name + " was added to the list.");
  }
}

// Removes the last student using pop()
function removeLastStudent() {
  if (students.length == 0) {
    showResult("The list is already empty.");
  } else {
    let removed = popStudent();

    displayStudents();

    showResult(removed + " was removed from the list.");
  }
}

// Finds a student using at()
function findStudent() {
  let input = document.getElementById("indexNumber").value;
  let index = Number(input);

  // Check if the index is empty, invalid, negative, decimal, or out of range
  if (
    input == "" ||
    isNaN(index) ||
    index % 1 != 0 ||
    index < 0 ||
    index >= students.length
  ) {
    showResult("Invalid index. Please enter a valid index.");
  } else {
    showResult("Student at index " + index + ": " + findStudentAt(index));
  }
}

// Displays the array using join()
function showJoinedStudents() {
  showResult("Joined Students: " + joinStudents(" | "));
}

// Displays the array using toString()
function showStringStudents() {
  showResult("Array as String: " + studentsToString());
}

// Displays the initial list when the page loads
displayStudents();