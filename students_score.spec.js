const { findTopStudent, congratulateTopStudent } = require('./students_score');

// Пример тестовых данных
const testData = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" }
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" }
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" }
  ]
];

describe('findTopStudent', () => {
  test.each`
    group      | expected
    ${testData[0]} | ${{ name: "Ivan", score: 35, date: "2022-10-11" }}
    ${testData[1]} | ${{ name: "Marina", score: 25, date: "2022-10-01" }}
    ${testData[2]} | ${null}
  `('Найти лучшего студента из группы $group', ({ group, expected }) => {
    const topStudent = findTopStudent(group);
    expect(topStudent).toEqual(expected);
  });
});

describe('congratulateTopStudent', () => {
  test.each`
    group      | message
    ${testData[0]} | ${'Поздравляем Ivan! Вы набрали 35 баллов и стали лидером!'}
    ${testData[1]} | ${'Поздравляем Marina! Вы набрали 25 баллов и стали лидером!'}
    ${testData[2]} | ${'Никто не набрал баллы.'}
  `('Поздравление для лучшего студента из группы $group', ({ group, message }) => {
    const consoleSpy = jest.spyOn(console, 'log');
    congratulateTopStudent(group);
    expect(consoleSpy).toHaveBeenCalledWith(message);
    consoleSpy.mockRestore();
  });
});