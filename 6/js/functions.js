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

const meetingOnlyDuringBusinessHours = (startOfWork, endOfWork, startMeeting, durationMeetingMinutes) => {
  const hoursToMinutes = (time) => {
      const timeToArray = time.split(':');
      const hoursToNumber = parseInt(timeToArray[0]);
      const minutesToNumber = parseInt(timeToArray[1]);
      return hoursToNumber * 60 + minutesToNumber;
  };

  const startOfWorkMinutes = hoursToMinutes(startOfWork);
  const endOfWorkMinutes = hoursToMinutes(endOfWork);
  const startMeetingMinutes = hoursToMinutes(startMeeting);
  const endMeetingMinutes = hoursToMinutes(startMeeting) + durationMeetingMinutes;

  if (startMeetingMinutes >= startOfWorkMinutes && endMeetingMinutes < endOfWorkMinutes) {
      return true;
  }
   return false;
};

console.log(meetingOnlyDuringBusinessHours('08:00', '17:30', '14:00', 90));
