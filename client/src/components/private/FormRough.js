import React from 'react'
import { Button, Modal, ModalBody, Row, Col, Form, FormGroup, Label, Input, Card, CardHeader } from "reactstrap";

export default class Calendar extends React.Component {
    constructor(props) {
     super(props)
  

this.state = {

}
}

     render() {
        return (
            <div> 

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
        <option selected value="0">Never</option>    
        <option value="1">Daily</option>
        <option value="2">Weekly</option>
    {/*   <option>Monthly</option> */}
    {/*   <option>Yearly</option> */}
        </Input>
    </FormGroup>
    
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


    <Row form>
    <Col md={6}>

    {(this.state.recurrencePeriod === "2") ? (
            <div>
        <FormGroup>
        <Label for="repeatInterval">every</Label>
        <Input
        type="number"
        name="repeatInterval"
        placeholder="1"
        value={this.state.repeatInterval}
        onChange={this.handleInputChange}   
        />
    <span>week(s)</span>
    </FormGroup>
    
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
    </div>
    ) : (
        <p />
    )}

        <FormGroup>
            <Label for="end-date-input">End Date</Label>
        <Input
        type="date"
        /* className="form-control" */
        id="end-date-input"
        value={this.state.endDate}
        name="endDate"
        onChange={this.handleInputChange}
        />
        </FormGroup>
    </Col>
    
    </Row>
    
    

       
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
    )
     }
    }