// Convert 12 hour to 24 hour
// ✅ Check if string starts with number ✅
function startsWithNumber(str) {
    return /^\d/.test(str);
  }
  
  // ✅️ Get number from start of string ✅
  function getNumberAtEnd(str) {
    if (startsWithNumber(str)) {
      return Number(str.match(/^\d+/)[0]);
    }
  
    return null;
  }
  
  const addZero = (num) => (num < 10 ? '0' + num : num);
  
  const getHour = (hour) => {
    if (typeof hour === 'string') {
      return hour;
    } else {
      return addZero(hour);
    }
  };
  
  function convert(str) {
    let time = str.split(':');
  
    let hour = Number(time[0]);
    let min = Number(getNumberAtEnd(time[1]));
    let formate = time[1].endsWith('AM') ? 'AM' : 'PM';
    console.log(formate);
  
    if (formate === 'AM') {
      if (hour === 12) {
        hour = '00';
      }
    } else if (formate === 'PM' && hour < 12) {
      hour = hour + 12;
    }
  
    return `${getHour(hour)}:${addZero(min)}`;
  }
  
  console.log(convert('10:02PM'));
  