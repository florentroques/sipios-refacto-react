import { State } from './types';

export function initializeState(domains: string[]) {
  let state: State = {
    countries: [],
    classifications: [],
    subClassifications: []
  };

  for(let i = 0; i < domains.length; i++) {
    if (state.countries.indexOf(domains[i].substring(0,2)) <= 0) {
      state = ({
        ...state,
        countries: [...state.countries, domains[i].substring(0,2)]
      })
    }

    state = ({
      ...state,
      classifications: [...state.classifications, domains[i].substring(3,5)]
    })

    let flag = false;
    for(let j = 0; j < state.subClassifications.length; j++) {
      if (state.subClassifications[j] === domains[i].substring(6)) {
        flag = true
        break;
      }
    }
    if (!flag) {
      state = ({
        ...state,
        subClassifications: [...state.subClassifications, domains[i].substring(6)]
      })
    }
  }

  return {
    ...state,
    classifications: state.classifications.filter((e, i, l) => l.indexOf(e) === i),
  };
}