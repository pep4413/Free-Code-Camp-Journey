class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"Pat"}/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
  
  Camper.defaultProps = {
    name: "CamperBot"
  }

  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }
  return (
    <p>{props.name}</p>
  )
}

// Note that you must create a class component by extending React.Component in order to create state like this.