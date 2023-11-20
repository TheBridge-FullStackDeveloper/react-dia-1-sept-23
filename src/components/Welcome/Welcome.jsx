const Welcome = (props) => {
    console.log('props',props.name)
  return <h3>Hello {props.name}</h3>;
};

export default Welcome;
