import React from "react";
import { Button, Card } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    //Define the initial state of the component
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "I'm a software engineer",
        imgSrc: "./SE.jpeg",
        profession: "Software Engineer",
      },
      show: false,

      timeMounted: 0,

      timeElapsed: 0,
    };
  }

  toggleHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  //Create a field that shows the time interval since the last component was mounted using the component lifecycle
  componentDidMount() {
    this.setState({ timeMounted: new Date() });

    this.timer = setInterval(() => {
      this.updateTimeElapsed();
    }, 1000);
  }

  updateTimeElapsed() {
    const { timeMounted } = this.state;
    const currentTime = new Date();
    const difference = Math.floor(currentTime - timeMounted) / 1000;
    console.log(difference);
    this.setState({ timeElapsed: difference });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="container">
        <Button onClick={this.toggleHandler}>
          {this.state.show ? `Hide profile` : `Show Profile`}
        </Button>
        {/* //this.state.show && <Card style={{ width: "18rem" }}> */}
        {this.state.show ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>{this.state.person.bio}</Card.Text>
              <Card.Text>{this.state.person.profession}</Card.Text>
            </Card.Body>
          </Card>
        ) : null}
        <p>Time Elapsed: {this.state.timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
