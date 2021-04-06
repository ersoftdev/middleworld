module.exports = ({ HeroStatRepository, HeroStat }) =>
  (hero, power, mana, craft,  religion) => {
    const heroStat = new HeroStat(hero, power, mana, craft,  religion)
    return HeroStatRepository.persist(heroStat)
  }
