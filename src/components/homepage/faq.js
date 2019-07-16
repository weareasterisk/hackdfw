import React, {Component} from 'react';
import Col from "reactstrap/es/Col";
import ReactHtmlParser from 'react-html-parser';
import Container from "reactstrap/es/Container";
import {Row} from "reactstrap";

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      question: '',
      text: ''
    }
  }

  componentDidMount() {
    this.changeFAQ(0);
  }

  changeFAQ = index => {
    const { data } = this.state;
    const {question, text} = data[index];
    this.setState({question, text});
  };

  render() {
    const { data, question, text} = this.state;
    return (
      <React.Fragment>
        <Container>
          <h1 className="faq-title">FAQ</h1>
          <Row>
            <Col md={4}>
              {
                data.map((entry, i) =>
                  <p className="faq-question"
                     onClick={() => this.changeFAQ(i)}
                  >
                    {/* TODO: Change > to component*/}
                    > {entry.question}
                  </p>
                )
              }
            </Col>
            <Col md={7}>
              <h4 className="font-weight-medium"> {question} </h4>
              {ReactHtmlParser(text)}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
