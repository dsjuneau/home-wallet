// https://fullcalendar.io/docs/react // NOT DONE

import React from 'react'
import { Button, Modal, ModalBody, Row, Col, Form, FormGroup, Label, Input, Card, CardHeader } from "reactstrap";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import rrulePlugin from '@fullcalendar/rrule';
import moment from 'moment';
import API from "../../utils/API";
import './main.scss' // webpack must be configured to do this

export default class Calendar extends React.Component {
   constructor(props) {
    super(props)


    this.calendarComponentRef = React.createRef()
    this.state = {
        events: [],
    //   search: "",
        repairType: "",
        title: "",
        recurrencePeriod: "0",
        repeatInterval: 1,
        repeatDayOfWeek: "",
        startDate: "",
        recurrenceStartDate: "",
        recurrenceEndDate: "",
        startTime: "",
        endTime: "",
        cost: 0,
        priority: "",
        status: "",
        isVendor: false,
        vendor: "",
        notes: "",
        editable: true,
        
        modal: false,
        // detailModal: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    } 
  
    componentDidMount() {
        this.loadEvents();
    }

    loadEvents = () => { 

        API.getEvents()
      .then(response => {
    //    console.log(response);
        this.setState({ 
            events: response.data
          });
      })
      .catch(err => console.log(err));
    };
        
       /*  API.getEvents()
        .then(events => {
    
            const eventList =  events.data.map(item => ({
                title: item.title,
                start: item.start,
                end: item.end,
                editable: item.editable 
            }))      
       
            this.setState({ 
            events: eventList,
            });
        })
        .catch(err => console.log(err));       
        }; */

    
    toggle = () => {
      this.setState(prevState => ({
        modal: !prevState.modal,
      }));
    };


    // Want to create modal that shows event or repair details.
    /* handleDateClick = (dateObj) => {
        const {date} = dateObj;
        const newEvents = this.state.events.filter (event => event.start === date);
        console.log("this.state.events: " + this.state.events);
        console.log("Date: " + date);
        console.log(newEvents);
    } */
   
    handleNewEvent = (arg) => {                            // handleDateClick = 
  //    console.log(this.props.user_id);  // working
      this.setState(prevState => ({
        modal: !prevState.modal,
      })
      );
    }


    handleCheck = () => {      
        this.setState({ isVendor: !this.state.isVendor });
    };


    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
           console.log(event.target);
      // Updating the input's state
      this.setState({
       
        [name]: value,
      
      });
    };

  

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();

      //   Sample:  2018-06-01T12:30:00


/* //      let parsedRecurrenceEndDate = this.state.recurrenceEndDate + "T" + this.state.endTime + ":00";
        console.log("this.state.startTime: " + this.state.startTime);
        console.log(typeof this.state.startTime);
       let momentDate = moment().format(this.state.startDate + " " + this.state.startTime);
      console.log("momentDate: " + momentDate);
      console.log(typeof momentDate); // string
   
      let newDateDate = new Date(parsedStart);
      console.log("newDateDate: " + newDateDate);
      console.log(typeof newDateDate); // object */



/////// I WAS HERE ///////
      
      let newEvent;
      
      let newRepair = {
        repairType: this.state.repairType,
        title: this.state.title,
        cost: this.state.cost,
        priority: this.state.priority,
        status: this.state.status,
        recurrencePeriod: this.state.recurrencePeriod,
        vendor: this.state.vendor,
        notes: this.state.notes,
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
                
           
          }else {
            let parsedStart = this.state.startDate + "T" + this.state.startTime + ":00";
            let parsedEnd = this.state.startDate + "T" + this.state.endTime + ":00";

            newRepair.startDate = parsedStart;

            newEvent = {
                userId: this.props.userId,
        //        category: this.state.repairType,
                title: this.state.title,
                start: parsedStart,
                end: parsedEnd,
                editable: true,
            }
    }
}


      API.saveRepair(newRepair)
          .then(newRepair => {
            console.log(newRepair);
          })
          .catch(err => console.log(err));

      API.saveEvent(newEvent)
      .then(newEvent => {
        this.toggle();
      })
      .catch(err => console.log(err));

      API.getEvents()
      .then(response => {
    //    console.log(response);
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
        repeatInterval: "0",
        repeatDayOfWeek: "",
        recurrenceStartDate: "",
        recurrenceEndDate: "",
        startTime: "",
        endTime: "",
        cost: 0,
        priority: "",
        status: "",
        isVendor: false,
        vendor: "",
        notes: "",
        editable: true,
      })


    };


/*   loadEvents = (start, end, timezone, callback) => {
      $.axios({
           url: ‘myxmlfeed.php’,
           dataType: ‘xml’,
           data: {
                           // our hypothetical feed requires UNIX timestamps
                          start: start.unix(),
                          end: end.unix()
          },
          success: function(doc) {
               var events = [];
                          $(doc).find(‘event’).each(function() {
                               events.push({
                                    title: $(this).attr(‘title’),
                                    start: $(this).attr(‘start’) // will be parsed
                    });
                        });
                       callback(events);
                    }
    });
 } */

render() {
  return (
      <div>
      <button onClick={ this.handleNewEvent }><h3>Add Event</h3></button>&nbsp;
      <div className='calendar-container'>
        <div className='calendar-top'>
        </div>
        <div className='calendar'></div>
    <FullCalendar
    defaultView="dayGridMonth"
    dateClick={this.handleDateClick }
    /* this.handleDateClick */
    
    header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
    plugins={[ dayGridPlugin, interactionPlugin, rrulePlugin ]}
    ref={ this.calendarComponentRef }
    events={ this.state.events }

    >

    </FullCalendar>
      </div>

      <div>
        <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
        >
        <Button
            className="ml-auto"
            color="danger"
            onClick={this.toggle}
        >
            x
        </Button>
        <ModalBody>
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
        type="number"
        name="repeatInterval"
        placeholder={1}
        value={this.state.repeatInterval}
        onChange={this.handleInputChange}   
        />
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
        </ModalBody>
        </Modal>
            </div>
    </div>
  )
}

}