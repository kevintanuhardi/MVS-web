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

export default { redirect, toggleBoolean, handleChange }