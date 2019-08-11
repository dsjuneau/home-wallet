import React, { Component } from "react";
import { Button, Modal, ModalBody, Row, Col, Form, FormGroup, Label, Input, Card, CardHeader } from "reactstrap";
import moment from 'moment';
import API from "../../utils/API";

export default class AddRepair extends Component {
  state = {
    repairType: "",
    title: "",
    cost: 0,
    priority: "",
    status: "",
    isVendor: false,
    vendor: "",
    notes: "",
    recurrencePeriod: "0",
    repeatInterval: 1,
    repeatDayOfWeek: "",
    startDate: "",
    recurrenceStartDate: "",
    recurrenceEndDate: "",
    startTime: "",
    endTime: "",
   
  };

  

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`${this.state.repairType} Added`);
    let newEvent;
      
      let newRepair = {
        userId: this.props.userId,
        repairType: this.state.repairType,
        title: this.state.title,
        cost: this.state.cost,
        priority: this.state.priority,
        status: this.state.status,
        recurrencePeriod: this.state.recurrencePeriod,
        vendor: this.state.vendor,
        notes: this.state.notes,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
      }

      if (this.state.recurrencePeriod !== "never") {

        let momentStart = this.state.recurrenceStartDate + " " + this.state.startTime;
        let momentEnd = this.state.recurrenceStartDate + " " + this.state.endTime;
        let duration = moment
        .duration(moment(momentEnd, 'YYYY/MM/DD HH:mm')
        .diff(moment(momentStart, 'YYYY/MM/DD HH:mm'))
        ).asHours();

        console.log("duration: " + duration);

        


        let parsedRecurStart = this.state.recurrenceStartDate + "T" + this.state.startTime + ":00";
    //    let parsedRecurEnd = this.state.recurrenceEndDate + "T" + this.state.endTime + ":00";

            newRepair.recurrenceStartDate = parsedRecurStart;
            
            newRepair.repeatDayOfWeek = this.state.repeatDayOfWeek;
            newRepair.recurrenceEndDate = this.state.recurrenceEndDate;
            newRepair.duration= duration;

            if (this.state.recurrencePeriod === "daily"){

            /*     let momentDayInterval = moment
                    .duration(moment(this.state.recurrenceEndDate, 'YYYY/MM/DD')
                    .diff(moment(this.state.recurrenceStartDate, 'YYYY/MM/DD'))
                    ).asDays();
                
                console.log("momentDayInterval: " + momentDayInterval); */

                this.setState({
                    
                    repeatInterval: 1,
                  })

                newRepair.repeatInterval = this.state.repeatInterval;
                
                newEvent = {
                    userId: this.props.userId,
                    title: this.state.title,
                    rrule: {
                        freq: this.state.recurrencePeriod,
                        interval: this.state.repeatInterval,
                        dtstart: parsedRecurStart,
                        until: this.state.recurrenceEndDate,
                    },
                    duration: duration,
                    backgroundColor: "yellow",
        
                   }
    
            }else if (this.state.recurrencePeriod === "weekly") {

                newRepair.repeatInterval = this.state.repeatInterval;

                newEvent = {
                    userId: this.props.userId,
                    title: this.state.title,
                    rrule: {
                        freq: this.state.recurrencePeriod,
                        interval: this.state.repeatInterval,
                        byweekday: this.state.repeatDayOfWeek,
                        dtstart: parsedRecurStart,
                        until: this.state.recurrenceEndDate,
                    },
                    duration: duration,
                    backgroundColor: "green",
        
                   }
                
}
}else {
    let momentStart = this.state.startDate + " " + this.state.startTime;
        let momentEnd = this.state.startDate + " " + this.state.endTime;
        let duration = moment
        .duration(moment(momentEnd, 'YYYY/MM/DD HH:mm')
        .diff(moment(momentStart, 'YYYY/MM/DD HH:mm'))
        ).asHours();

        console.log("duration: " + duration);

        let parsedStart = this.state.startDate + "T" + this.state.startTime + ":00";
        let parsedEnd = this.state.startDate + "T" + this.state.endTime + ":00";

        newRepair.startDate = parsedStart;
        newRepair.duration = duration;

        newEvent = {
            userId: this.props.userId,
            category: this.state.repairType,
            title: this.state.title,
            start: parsedStart,
            end: parsedEnd,
            editable: true,
        }
}


      API.saveRepair(newRepair)
          .then(newRepair => {
            console.log("newRepair: " + newRepair);
          })
          .catch(err => console.log(err));

      API.saveEvent(newEvent)
      .then(newEvent => {
    //      console.log("newEvent in saveEvent: " + JSON.stringify(newEvent));
        this.toggle();
      })
      .catch(err => console.log(err));

      API.getEvents(this.props.userId)
      .then(response => {
        console.log(response);
        this.setState({ 
            events: response.data
          });
      })
      .catch(err => console.log(err));

      this.setState({
        repairType: "",
        title: "",
        startDate: "",
        recurrencePeriod: "never",
        repeatInterval: 1,
        repeatDayOfWeek: "",
        recurrenceStartDate: "",
        recurrenceEndDate: "",
        startTime: "",
        endTime: "",
        cost: 0,
        priority: "low",
        status: "Thinking about it!",
        isVendor: false,
        vendor: "",
        notes: "",
        editable: true,
      })
  };



  handleCheck = () => {
    this.setState({ isVendor: !this.state.isVendor });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="card mt-2" />
          <div className="card-header mb-4 bg-secondary text-white">
            <h3 className="text-center mt-4 ">
              <i className="fas fa-tools" /> Add Repair
            </h3>
          </div>
          <div className="card-body">
            <div className="text-right">
              <a className="btn btn-info" href="/Repairs/">
                Go to Repair List
              </a>
            </div>
             <Form>
    <FormGroup>
        <Label for="repairType">Type</Label>
        <Input
        type="select"
        /* className="form-control" */
        id="repairTypeSelect"
        value={this.state.repairType}
        name="repairType"
        onChange={this.handleInputChange}
        >
        <option>Update</option>
        <option>Repair</option>
        <option>Maintenance</option>
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="repairDescription">Description</Label>
        <Input
        type="text"
        /*  className="form-control" */
        id="repairDescriptionInput"
        placeholder="mow grass"
        value={this.state.title}
        name="title"
        onChange={this.handleInputChange}
        />
    </FormGroup>

    <FormGroup>
        <Label for="recurringPeriod">Repeat</Label>
        <Input
        type="select"
        value={this.state.recurrencePeriod}
        name="recurrencePeriod"
        onChange={this.handleInputChange}
        >
        <option selected value="never">Never</option>    
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
    {/*   <option>Monthly</option> */}
    {/*   <option>Yearly</option> */}
        </Input>
    </FormGroup>
    
    
        {((this.state.recurrencePeriod === "daily") || (this.state.recurrencePeriod === "weekly")) ? (
        <Row>
        <Col md={6}>
        <FormGroup>
            <Label for="recurrence-start-date-input">Start Date</Label>
            <Input
            type="date"
            /* className="form-control" */
            id="recurrence-start-date-input"
            value={this.state.recurrenceStartDate}
            name="recurrenceStartDate"
            onChange={this.handleInputChange}
            />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label for="end-date-input">End By Date</Label>
        <Input
        type="date"
        /* className="form-control" */
        id="end-date-input"
        value={this.state.recurrenceEndDate}
        name="recurrenceEndDate"
        onChange={this.handleInputChange}
        />
        </FormGroup>
        </Col>
        </Row>
) : (
    <Row>
    <Col md={6}>
        <FormGroup>
            <Label for="start-date-input">Start Date</Label>
            <Input
            type="date"
            /* className="form-control" */
            id="start-date-input"
            value={this.state.startDate}
            name="startDate"
            onChange={this.handleInputChange}
            />
        </FormGroup>
        </Col>
     </Row>
)}
        
       
        <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="start-time-input">Start Time</Label>
        <Input
        type="time"
        /* className="form-control" */
        id="start-time-input"
        value={this.state.startTime}
        name="startTime"
        onChange={this.handleInputChange}
        />                  
        </FormGroup>
    </Col>
    <Col md={6}>
        <FormGroup>
        <Label for="end-time-input">End Time</Label>
        <Input
        type="time"
        /* className="form-control" */
        id="end-time-input"
        value={this.state.endTime}
        name="endTime"
        onChange={this.handleInputChange}
        />                  
        </FormGroup>
    </Col>
    </Row>

  

    {(this.state.recurrencePeriod === "weekly") ? (
        <div>
        <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="repeatInterval">every</Label>
        <Input
        type="select"
        name="repeatInterval"
       
        value={this.state.repeatInterval}
        onChange={this.handleInputChange}   
        >
        <option selected value={1}>1</option>    
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        </Input>
    <span>week(s)</span>
    </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
        <Label for="repeatDayOfWeek">on</Label>
        <Input
        type="select"
        value={this.state.repeatDayOfWeek}
        name="repeatDayOfWeek"
        onChange={this.handleInputChange}
        >
        <option selected value="SU">Sunday</option>
        <option value="MO">Monday</option>
        <option value="TU">Tuesday</option>
        <option value="WE">Wednesday</option>
        <option value="TH">Thursday</option>
        <option value="FR">Friday</option>
        <option value="SA">Saturday</option>
        </Input>
    </FormGroup>
    </Col>
    </Row>
    </div>
    ) : (
        <p />
    )}

       
    <Row form>
    <Col md={4}>
    <FormGroup>
        <Label for="repairCost"> Repair Cost</Label>
        <Input
        type="number"
        /*  className="form-control" */
        id="repairCostInput"
        placeholder="$35"
        value={this.state.cost}
        name="cost"
        onChange={this.handleInputChange}
        />
    </FormGroup>
    </Col>
    <Col md={4}>
    <FormGroup>
        <Label for="repairPriority">Repair Priority</Label>
        <Input
        type="select"
        /* className="form-control" */
        id="repairPrioritySelect"
        value={this.state.priority}
        name="priority"
        onChange={this.handleInputChange}
        >
        <option selected>low</option>
        <option>medium</option>
        <option>high</option>
        </Input>
    </FormGroup>
    </Col>
    <Col md={4}>
    <FormGroup>
        <Label for="repairStatus">Repair Status</Label>
        <Input
        type="select"
        /* className="form-control" */
        id="repairStatusSelect"
        value={this.state.status}
        name="status"
        onChange={this.handleInputChange}
        >
        <option selected>Thinking about it!</option>
        <option>Getting Bids</option>
        <option>In Progress</option>
        <option>Completed</option>
        </Input>
    </FormGroup>
    </Col>
    </Row>
    <FormGroup>
    <Row form>
    <Col md={4}>
            <Label for="isVendor">Assign a Contractor/Vendor?</Label>
    </Col>
    <Col md={4}>
        <input
        type="checkbox"
        name="vendorCheckbox"
        checked={this.state.isVendor}
        onChange={this.handleCheck}
        />
    </Col>
    </Row>
    </FormGroup>

    {this.state.isVendor ? (
        <FormGroup>
        <Label for="repairVendor"></Label>
        <Input
            type="select"
            className="form-control"
            id="repairVendorSelect"
            value={this.state.vendor}
            name="vendor"
            onChange={this.handleInputChange}
        >
            <option>Big Bob</option>
            <option>Julio</option>
        </Input>
        </FormGroup>
    ) : (
        <p />
    )}

        <FormGroup>
        <Label for="repairNotes">Additional Notes/Instruction</Label>
        <Input
        type="textarea"
        /* className="form-control" */
        id="repairNotesInput"
        rows="3"
        value={this.state.notes}
        name="notes"
        onChange={this.handleInputChange}
        />
        </FormGroup>



    <button
        onClick={this.handleFormSubmit}
        className="btn btn-block btn-success mt-3"
    >
        Add
    </button>
    </Form>
            </div>
          </div>
        </div>
    );
  }
}
