import { State } from './types';

function extractCountryCode(domain: string) {
  return domain.substring(0,2);
}

function extractClassificationCode(domain: string) {
  return domain.substring(3,5);
}

function extractSubClassificationCode(domain: string) {
  return domain.substring(6)
}

export function initializeState(domains: string[]) {
  let state: State = {
    countries: [],
    classifications: [],
    subClassifications: []
  };

  for (let i = 0; i < domains.length; i++) {
    const countryCode = extractCountryCode(domains[i]);
    const classificationCode = extractClassificationCode(domains[i]);
    const subClassificationCode = extractSubClassificationCode(domains[i]);

    if (state.countries.indexOf(countryCode) <= 0) {
      state = ({
        ...state,
        countries: [...state.countries, countryCode]
      })
    }

    state = ({
      ...state,
      classifications: [...state.classifications, classificationCode]
    })

    let flag = false;

    for (let j = 0; j < state.subClassifications.length; j++) {
      if (state.subClassifications[j] === subClassificationCode) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      state = ({
        ...state,
        subClassifications: [...state.subClassifications, subClassificationCode]
      })
    }
  }

  return {
    ...state,
    classifications: state.classifications.filter((e, i, l) => l.indexOf(e) === i),
  };
}