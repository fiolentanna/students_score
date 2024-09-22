function findTopStudent(students) {
  // Фильтруем студентов, у которых есть дата выполнения задания и они набрали баллы
  const studentsWithScores = students.filter((s) => s.score > 0 && s.date);

  // Если никто не набрал баллы, возвращаем null
  if (studentsWithScores.length === 0) {
    return null;
  }

  // Сортируем по количеству баллов и дате выполнения
  studentsWithScores.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score; // Сортировка по баллам по убыванию
    }
    return new Date(a.date) - new Date(b.date); // Сортировка по дате по возрастанию
  });

  return studentsWithScores[0]; // Возвращаем первого (с наибольшими баллами и самой ранней датой)
}

function congratulateTopStudent(students) {
  const topStudent = findTopStudent(students);
  if (topStudent) {
    console.log(
      `Поздравляем ${topStudent.name}! Вы набрали ${topStudent.score} баллов и стали лидером!`
    );
  } else {
    console.log("Никто не набрал баллы.");
  }
}


module.exports = {findTopStudent, congratulateTopStudent};
