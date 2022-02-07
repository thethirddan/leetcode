"use strict";

/*
You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.


Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
]



Sample output:

find_pairs(student_course_pairs_2) =>
{
  "1,0":[]
  "2,0":[]
  "2,1":[]
  "3,0":[]
  "3,1":["Course 1", "Course 2"]
  "3,2":[]
  "4,0":[]
  "4,1":[]
  "4,2":[]
  "4,3":[]
} 

Sample Input:
student_course_pairs_3 = [
  ["23", "Software Design"], 
  ["3", "Advanced Mechanics"], 
  ["2", "Art History"], 
  ["33", "Another"],
]


Sample output:

find_pairs(student_course_pairs_3) =>
{
  "23,3": []
  "23,2": []
  "23,33":[]
  "3,2":  []
  "3,33": []
  "2,33": []
}

Complexity analysis variables:

n: number of student,course pairs in the input
s: number of students
c: total number of courses being offered (note: The number of courses any student can take is bounded by a small constant)

*/

const studentCoursePairs1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const studentCoursePairs2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"]
];

const studentCoursePairs3 = [
  ["23", "Software Design"], 
  ["3",  "Advanced Mechanics"], 
  ["2",  "Art History"], 
  ["33", "Another"]
];


function studentPairs(enrolment) {
  //Map of sets
  const classAttendance = new Map();
  const students = new Set();
  
  enrolment.forEach(pair => {
    const student = pair[0];
    const course = pair[1];
    
    students.add(student);
    if (classAttendance.get(course)) {
      const AddingStudents = classAttendance.get(course);
      classAttendance.set(course, AddingStudents.add(student))
    } else {
      classAttendance.set(course, new Set([student]));
    }
  });
  const newStudents = [...students];
  const seenStudents = new Set();
  const finalPairs = new Map();
  
  for (let i = 0; i < newStudents.length; i++) {
    for (let j = 0; j < newStudents.length; j++) {
      if (!seenStudents.has(newStudents[j]) && (newStudents[i] != newStudents[j])) {
        finalPairs.set(`${newStudents[i]},${newStudents[j]}`, new Set());
      }
    }
    seenStudents.add(newStudents[i]);
  }

  console.log(classAttendance);
  classAttendance.forEach((newKids, course) => {
    const kids = [...newKids];
    console.log(kids);
    const seenKids = new Set();
    for (let i = 0; i < kids.length; i++) {
      for (let j = 0; j < kids.length; j++) { 
        if (!seenKids.has(kids[j]) && kids[i] != kids[j]) {
          addCourse(finalPairs, course, kids[i], kids[j]);
        }
      }
      seenKids.add(kids[i]);
    }
  });
  
  return finalPairs;
}

function addCourse(finalPairs, course, kid1, kid2) {
  const pair1 = `${kid1},${kid2}`;
  const pair2 = `${kid2},${kid1}`;
  let courses;
  
  if (finalPairs.get(pair1)) {
    courses = finalPairs.get(pair1);
    finalPairs.set(pair1, [...courses, course]);
    return;
  } 
  
  courses = finalPairs.get(pair2);
    finalPairs.set(pair2, [...courses, course]);
    return;
};

studentPairs(studentCoursePairs1);