import React, { Component } from 'react';
import {Container, Row, Col, Form, Button, FormLabel} from 'react-bootstrap';
import './mainForm.css';
// import TimePicker from 'react-bootstrap-time-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import DateTimePicker from './DateTimePicker';


const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
    }

    render() {

        function handleSubmit() {
            var dateList = document.getElementsByClassName("date")[0]
            document.getElementById("mockDate").value = dateList.getElementsByClassName("form-control")[0].value; 
        }

        function handleBandSize() {
            if(document.getElementById("formGridBandSize").value == "Other (Please Specify)") {
                document.getElementById("formGridBandOther").disabled = !document.getElementById("formGridBandOther").disabled;
            } else {
               document.getElementById("formGridBandOther").disabled = true;
            }
        }

        return (
            <div id="mainFormContainer">
            <Container id="formContainer" className="pagination-centered">
                
                <Row id="firstRow">
                
                    <Col>
                    <Form method="POST" action="https://formspree.io/info@amlive.com.au">
                    <h1 className="sectionHeading">Contact Info</h1>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="Name" placeholder="Enter Name" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridContactNumber">
                            <Form.Label>Contact number</Form.Label>
                            <Form.Control name="Contact Number" placeholder="example: 0402 232 323" required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Contact email</Form.Label>
                            <Form.Control name="Email" placeholder="Enter email" required /> 
                        </Form.Group>
                        {/* Finish Credentials */}

                        <h1 className="sectionHeading">Wedding Details</h1>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridWeddingDate">
                                <Form.Label>Wedding date</Form.Label>
                                <DateTimePicker />
                                <Form.Control id="mockDate" name="Wedding Date" className="hidden"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="venueField">
                                <Form.Label>Venue</Form.Label>
                                <Form.Control name="Venue" placeholder="Enter venue" required />
                            </Form.Group>
                        </Form.Row>
                        

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPackageType">
                                <Form.Label>Package type</Form.Label>
                                <Form.Control name="Package Type" as="select">
                                    <option>Choose...</option>
                                    <option>Ceremony</option>
                                    <option>Reception (including pre-dinner drinks)</option>
                                    <option>Combined Ceremony & Reception</option>
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBandSize">
                                <Form.Label>Band size</Form.Label>
                                <Form.Control name="Band Size" as="select" onChange={handleBandSize}>
                                    <option>Choose...</option>
                                    <option>Duo</option>
                                    <option>Trio</option>
                                    <option>4 Piece Band</option>
                                    <option>Duo + Band</option>
                                    <option>Other (Please Specify)</option>
                                </Form.Control>
                                </Form.Group>
                                
                                <Form.Group as={Col} controlId="formGridBandOther">
                                <Form.Label>Please specify</Form.Label>
                                <Form.Control name="Band Size (other)" disabled />
                            </Form.Group> 
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="timeStart">
                            <Form.Label>Start time</Form.Label>
                            <TimePicker name="Start time" id="timePicker"
                                showSecond={false}
                                defaultValue={now}
                                className="timePickerContainer"
                                format={format}
                                minuteStep={15}
                                use12Hours
                                inputReadOnly
                            />
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="timeEnd">
                            <Form.Label>End time</Form.Label>
                            <TimePicker name="End time" id="timePicker"
                                showSecond={false}
                                defaultValue={now}
                                className="timePickerContainer"
                                format={format}
                                minuteStep={15}
                                use12Hours
                                inputReadOnly
                            />
                            </Form.Group>
                            <Form.Group as={Col} controlId="requiredTime">
                                <Form.Label id="">Playing Time</Form.Label>
                                <Form.Control name="Music Time Frame" as="select">
                                    <option>Hours...</option>
                                    <option>2 hours</option>
                                    <option>3 hours</option>
                                    <option>4 hours</option>
                                    <option>5 hours</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check name="MC Requirement" type="checkbox" label="MC Required - Reception" />
                        </Form.Group>

                        <h1 className="sectionHeading">Additional Details</h1>
                        <Form.Row>
                            <Form.Group as={Col} controlId="GuestNumber">
                                <Form.Label>No of guests</Form.Label>
                                <Form.Control name="Number of Guests" placeholder="Approx guests"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="PreferredContact">
                                <Form.Label>Preferred Contact</Form.Label>
                                <Form.Control name="Preferred Contact" as="select">
                                    <option>Choose...</option>
                                    <option>Phone</option>
                                    <option>Email</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="HearAboutUs">
                            <Form.Label>How did you hear about us?</Form.Label>
                            <Form.Control name="How they heard about you" as="textarea" rows="3" />
                        </Form.Group>

                        <Button id="submitButton" type="submit"  variant="success" onClick={handleSubmit} >
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                
                
            </Container>
            </div>

        )
    }
}

export default MainForm