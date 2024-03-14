import React from 'react';
import { State } from './types';

export function renderSelects(state: State) {
  const {countries, classifications, subClassifications} = state || {
    countries: [],
    classifications: [],
    subClassifications: []
  };

  return (
    <>
      <select name="countries" multiple>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select name="classifications" multiple>
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select name="subClassifications" multiple>
        {subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>
  );
}