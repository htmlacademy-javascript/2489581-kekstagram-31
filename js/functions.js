/*
Функция для проверки длины строки. Она принимает строку,
 которую нужно проверить, и максимальную длину и возвращает true,
  если строка меньше или равна указанной длине, и false,
  если строка длиннее.
*/

const checkLength = function (string,length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

/*
Функция для проверки, является ли строка палиндромом.
 Палиндром — это слово или фраза, которые одинаково читаются
  и слева направо и справа налево. Например:

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
*/

let polindrome = function (string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');
  let revers = '';
  for (let i = string.length - 1; i >= 0; i--) {
    revers += string[i];
  } if (revers === string) {
    return true;
  } else{
    return false;
  }
};
