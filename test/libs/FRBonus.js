// fr just by barrier
// fr by percent from top fr or average fr
const maxFR = 500
const maxBonus = 20

const getPercent = (userFR, maxFR) => {
  const p =  parseInt(userFR / maxFR * 100)

  return Math.min(p, 100)
}

const calcBonusPercent = (percent, maxBonus) => {
  return parseInt(maxBonus * percent / 100)
}

const getBonus = (maxFR, maxBonus, userFR) => {
  const p = getPercent(userFR, maxFR)
  const b = calcBonusPercent(p, maxBonus)

  return b
}

module.exports = {
  getBonus
}
