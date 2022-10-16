export interface RagePower {
  id: string,
  name: string;
  category: string;
  prerequisites_formula: string;
}

const RagePowers: {[id:string]: RagePower} = {
  'beast_totem_lesser': {
    'id': 'beast_totem_lesser',
    'name': 'Beast Totem, Lesser',
    'category': 'Su',
    'prerequisites_formula': '!@ragepower:beast_totem_lesser'
  },
  'beast_totem': {
    'id': 'beast_totem',
    'name': 'Beast Totem',
    'category': 'Su',
    'prerequisites_formula': '!@ragepower:beast_totem AND @ragepower:beast_totem_lesser AND @class:barbarian >= 6'
  },
  'beast_totem_greater': {
    'id': 'beast_totem_greater',
    'name': 'Beast Totem, Greater',
    'category': 'Su',
    'prerequisites_formula': '!@ragepower:beast_totem_greater AND @ragepower:beast_totem AND @class:barbarian >= 10'
  }
};

export default RagePowers;