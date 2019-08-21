const redirect = (self, path, params)  => {
  const completePath = params ? `/${path}/${params}` : `/${path}`;
  self.props.history.push(completePath)
}

const toggleBoolean = (self, stateName, preferedState) => {
  const newState = preferedState? preferedState : !self.state[stateName];

  self.setState({[stateName]: newState})
}

export default { redirect, toggleBoolean }