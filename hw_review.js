const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

//1

const stringOfSubjects = (subjects) => {
  const arrayOfSubjects = Object.keys(subjects);
  return arrayOfSubjects.join(", ");
};

console.log(stringOfSubjects(subjects));

//2

const countOfSubjectsAndTeachers = (subjects) => {
  const arrayOfStudentdAndTeachers = Object.values(subjects);
  console.log(arrayOfStudentdAndTeachers);

  return arrayOfStudentdAndTeachers.reduce(
    (result, { students, teachers }) => {
      result.amountOfStudents += +[students];

      result.amountOfTeachers += +[teachers];

      return result;
    },
    { amountOfStudents: 0, amountOfTeachers: 0 }
  );
};

console.log(countOfSubjectsAndTeachers(subjects));

//3

const averageOfStudent = (subjects) => {
  const arrayOfStudentdAndTeachers = Object.values(subjects);

  const sumOfObjects = Object.keys(subjects).length;
  const sum = arrayOfStudentdAndTeachers.reduce((result, { students }) => {
    result += +students;

    return result;
  }, 0);

  const averageOfStudents = sum / sumOfObjects;
  return averageOfStudents;
};

console.log(averageOfStudent(subjects));

//4
const arrayOfObjects = (subjects) => {
  const subjectEntries = Object.entries(subjects);
  console.log(subjectEntries);

  return subjectEntries.reduce((result, [key, value]) => {
    const arrayToPust = { [key]: value };

    result.push(arrayToPust);
    return result;
  }, []);
};

console.log(arrayOfObjects(subjects));

//5

const sortOfObjectsByAmountOfTeachers = (subjects) => {
  const subjectEntries = Object.entries(subjects);
  console.log(subjectEntries);

  subjectEntries.sort(
    (
      [currentObject, { teachers: currentTeachers }],
      [nextObject, { teachers: nextTeachers }]
    ) => nextTeachers - currentTeachers
  );

  console.log(subjectEntries);

  return subjectEntries.reduce((result, [key, value]) => {
    result.push(key);
    return result;
  }, []);
};

console.log(sortOfObjectsByAmountOfTeachers(subjects));
