
"use strict";

function calculateVolumeAndArea(a) {
  if (typeof (a) !== "number" || a < 0 || !Number.isInteger(a)) {
    return ('При вычислении произошла ошибка');
  } else {
    const volume = a * a * a;
    const area = 6 * a * a;
    return(`Объем куба: ${volume}, площадь всей поверхности: ${area}`)
  }
}

calculateVolumeAndArea(124)


function getCoupeNumber(a) {
  if (a === 0 || a > 36) {
    return('Таких мест в вагоне не существует');
  } else if (typeof a == "number" && a >= 0 && Number.isInteger(a)){
    return Math.ceil(a / 4);
  } else {
    return('Ошибка. Проверьте правильность введенного номера места');
  }
}
getCoupeNumber(16)
