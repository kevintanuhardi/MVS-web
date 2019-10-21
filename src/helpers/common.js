const redirect = (self, path, params)  => {
  const completePath = params ? `/${path}/${params}` : `/${path}`;
  self.props.history.push(completePath)
}

const toggleBoolean = (self, stateName, preferedState) => {
  const newState = preferedState? preferedState : !self.state[stateName];

  self.setState({[stateName]: newState})
}

const handleChange = (self, stateName, preferedState) => {
  console.log(stateName)
  if(stateName.indexOf('.') !== -1) {
    const arrStateName = stateName.split('.');

    const selectedObj = self.state[arrStateName[0]]
    selectedObj[arrStateName[1]] = preferedState;

    return self.setState({[arrStateName[0]] : selectedObj})
  } else {
    return self.setState({[stateName]: preferedState})
  }
}

function pagination(c, m) {
  var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
      if ( i >= left && i < right) {
          range.push(i);
      }
  }

  for (let i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}

export default { redirect, toggleBoolean, handleChange, pagination }