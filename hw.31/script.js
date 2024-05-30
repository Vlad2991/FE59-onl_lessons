const subjects = {
    mathematics: { students: 200, teachers: 6 },
    biology: { students: 120, teachers: 6 },
    geography: { students: 60, teachers: 2 },
    chemistry: { students: 100, teachers: 3 }
  };
  
 
  const nameOfSubject = Object.keys(subjects).join(', ');
  console.log('Названия предметов:', nameOfSubject);
  
 
  const totalCounts = Object.values(subjects).reduce((acc, subject) => {
    acc.students += subject.students;
    acc.teachers += subject.teachers;
    return acc;
  }, { students: 0, teachers: 0 });
  console.log('Общее количество студентов и учителей:', totalCounts);
  

  const averageStudents = totalCounts.students / Object.keys(subjects).length;
  console.log('Среднее количество студентов на всех предметах:', averageStudents);
  
 
  const subjectsArray = Object.entries(subjects).map(([name, data]) => {
    return { name, ...data };
  });
  console.log('Массив из объектов предметов:', subjectsArray);
  
  
  const sortedByTeachers = subjectsArray.sort((a, b) => b.teachers - a.teachers);
  console.log('Отсортированный массив по количеству преподавателей:', sortedByTeachers);