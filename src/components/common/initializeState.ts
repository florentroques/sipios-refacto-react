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

function addCountryCodeToState(state: State, domain: string) {
  const countryCode = extractCountryCode(domain);

  if (state.countries.indexOf(countryCode) <= 0) {
    state = {
      ...state,
      countries: [...state.countries, countryCode]
    };
  }

  return state;
}

function addClassificationCodeToState(state: State, domain: string) {
  const classificationCode = extractClassificationCode(domain);

  return {
    ...state,
    classifications: [...state.classifications, classificationCode]
  };
}

function addSubClassificationCodeToState(state: State, domain: string) {
  const subClassificationCode = extractSubClassificationCode(domain);

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

  return state;
}

export function initializeState(domains: string[]) {
  let state: State = {
    countries: [],
    classifications: [],
    subClassifications: []
  };

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];

    state = addCountryCodeToState(state, domain);
    state = addClassificationCodeToState(state, domain);
    state = addSubClassificationCodeToState(state, domain);
  }

  return {
    ...state,
    classifications: state.classifications.filter((e, i, l) => l.indexOf(e) === i),
  };
}