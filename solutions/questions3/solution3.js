function solution(bandage, health, attacks) {
  const lastTime = attacks[attacks.length - 1][0];
  const [castingTiem, regen, bonus] = bandage;

  let consecutive = 0;
  let time = 0;
  let result = health;

  let nextAttack = attacks.shift();

  while (lastTime >= time) {
    if (nextAttack[0] === time) {
      result -= nextAttack[1];
      consecutive = 0;
      nextAttack = attacks.shift();
    } else {
      result += regen;
      consecutive++;

      if (castingTiem === consecutive) {
        result += bonus;
        consecutive = 0;
      }
    }
    if (result > health) {
      result = health;
    }
    //죽을경우 바로 리턴
    if (result <= 0) {
      return -1;
    }

    time++;
  }

  return result;
}
