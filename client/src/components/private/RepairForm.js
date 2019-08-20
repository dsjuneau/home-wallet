import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";


export default class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        return (

              <Form>
                  <FormGroup>
                    <Label htmlFor="repairType">Type</Label>
                    <Input
                      type="select"
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
                    <Label htmlFor="repairDescription">Description</Label>
                    <Input
                      type="text"
                      id="repairDescriptionInput"
                      placeholder="mow grass"
                      value={this.state.title}
                      name="title"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="recurringPeriod">Repeat</Label>
                    <Input
                      type="select"
                      value={this.state.recurrencePeriod}
                      name="recurrencePeriod"
                      onChange={this.handleInputChange}
                    >
                      <option value="never">Never</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      {/*   <option>Monthly</option> */}
                      {/*   <option>Yearly</option> */}
                    </Input>
                  </FormGroup>

                  {this.state.recurrencePeriod === "daily" ||
                  this.state.recurrencePeriod === "weekly" ? (
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="recurrence-start-date-input">
                            Start Date
                          </Label>
                          <Input
                            type="date"
                            id="recurrence-start-date-input"
                            value={this.state.recurrenceStartDate}
                            name="recurrenceStartDate"
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label htmlFor="end-date-input">End By Date</Label>
                          <Input
                            type="date"
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
                          <Label htmlFor="start-date-input">Start Date</Label>
                          <Input
                            type="date"
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
                        <Label htmlFor="start-time-input">Start Time</Label>
                        <Input
                          type="time"
                          id="start-time-input"
                          value={this.state.startTime}
                          name="startTime"
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label htmlFor="end-time-input">End Time</Label>
                        <Input
                          type="time"
                          id="end-time-input"
                          value={this.state.endTime}
                          name="endTime"
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {this.state.recurrencePeriod === "weekly" ? (
                    <div>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label htmlFor="repeatInterval">every</Label>
                            <Input
                              type="select"
                              name="repeatInterval"
                              value={this.state.repeatInterval}
                              onChange={this.handleInputChange}
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                            </Input>
                            <span>week(s)</span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label htmlFor="repeatDayOfWeek">on</Label>
                            <Input
                              type="select"
                              value={this.state.repeatDayOfWeek}
                              name="repeatDayOfWeek"
                              onChange={this.handleInputChange}
                            >
                              <option value="SU">Sunday</option>
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
                        <Label htmlFor="repairCost"> Repair Cost</Label>
                        <Input
                          type="number"
                          id="repairCostInput"
                          value={this.state.cost}
                          name="cost"
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label htmlFor="repairPriority">Repair Priority</Label>
                        <Input
                          type="select"
                          id="repairPrioritySelect"
                          value={this.state.priority}
                          name="priority"
                          onChange={this.handleInputChange}
                        >
                          <option>low</option>
                          <option>medium</option>
                          <option>high</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label htmlFor="repairStatus">Repair Status</Label>
                        <Input
                          type="select"
                          id="repairStatusSelect"
                          value={this.state.status}
                          name="status"
                          onChange={this.handleInputChange}
                        >
                          <option>Thinking about it!</option>
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
                        <Label htmlFor="isVendor">
                          Assign a Contractor/Vendor?
                        </Label>
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
                      <Label htmlFor="repairVendor" />
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
                    <Label htmlFor="repairNotes">
                      Additional Notes/Instruction
                    </Label>
                    <Input
                      type="textarea"
                      id="repairNotesInput"
                      rows="3"
                      value={this.state.notes}
                      name="notes"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <Button
                    onClick={this.handleFormSubmit}
                    className="btn btn-block btn-success mt-3"
                  >
                    Add
                  </Button>
                </Form>
        )
    }
}