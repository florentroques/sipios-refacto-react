import React from 'react';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

function renderSelects(state: State) {
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

class DomainFilter extends React.Component<Props, State> {
  componentDidMount() {
    const { domains } = this.props

    let state = this.state || ({
      countries: [],
      classifications: [],
      subClassifications: []
    });

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

    this.setState({
      ...state,
      classifications: state.classifications.filter((e, i, l) => l.indexOf(e) === i),
    })
  }

  render() {
    return renderSelects(this.state);
  }
}

export default DomainFilter
