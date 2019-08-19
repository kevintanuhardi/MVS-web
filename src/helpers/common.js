const redirect = (self, path, params)  => {
  const completePath = params ? `/${path}/${params}` : `/${path}`;
  self.props.history.push(completePath)
}

export default { redirect }