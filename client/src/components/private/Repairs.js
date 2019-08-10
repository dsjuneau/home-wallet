import React from "react";
import { Button, Modal, ModalBody, Row, Col, Form, FormGroup, Label, Input, Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, } from "reactstrap";
import moment from 'moment';
import API from "../../utils/API";

/* export default function AddRepair() { */
  export default class Repair extends React.Component {
    constructor(props) {
     super(props)

     this.state = {
      repairs: [],
  /*     repairType: "",
      title: "",
      cost: 0,
      priority: "",
      status: "",
      isVendor: false,
      vendor: "",
      notes: "",
      recurrencePeriod: "never",
      repeatInterval: 1,
      repeatDayOfWeek: "",
      startDate: "",
      recurrenceStartDate: "",
      recurrenceEndDate: "",
      startTime: "",
      endTime: "", */
     
    };
  }


  componentDidMount() {
    this.loadRepairs();
}

loadRepairs = () => { 

  API.getRepairs(this.props.userId)
  .then(repairs => {
    console.log(repairs);



  const repairList =  repairs.data.map(item => ({
    repairId: item._id,
    repairType: item.repairType,
    title:item.title,
    cost: item.cost,
    priority: item.priority,
    status: item.status,
    vendor: item.vendor,
    notes: item.notes,
    recurrencePeriod: item.recurrencePeriod,
    repeatInterval: item.repeatInterval,
    repeatDayOfWeek: item.repeatDayOfWeek,
    startDate: item.startDate,
    recurrenceStartDate: item.recurrenceStartDate,
    recurrenceEndDate: item.recurrenceEndDate,
    duration: item.duration,
    startTime: item.startTime,
    endTime: item.endTime,  
  }))

  
    this.setState({ 
        repairs: repairList,
      });
  })
  .catch(err => console.log(err));
};

handleDeleteRepair (id) {
  var filtered = this.state.repairs.filter(item => item._id !== id);
  this.setState({ 
    repairs: filtered,
   });
  API.deleteRepair(id)
    .then(this.loadRepairs())
    .catch(err => console.log(err));
  API.deleteEvent(id)
  .then()
  .catch(err => console.log(err));
};


render() {
  return (
    <div>
      <div className="container">
        <div className="card mt-2" />
        <div className="card-header mb-4 bg-secondary text-white">
          <h3 className="text-center mt-4 ">
            <i className="fas fa-tools" /> &nbsp; Updates, Repairs, and
            Maintenance
          </h3>
        </div>
        <div className="card-body">
          <div className="text-right">
            <a className="btn btn-info" href="/AddRepair/">
              <i class="fa fa-plus-circle" aria-hidden="true" /> &nbsp; Add
              Task
            </a>
          </div>
          <br />
          <div>
          {this.state.repairs.length ? (
            this.state.repairs.map(item => (    
      <Card className="repair-card" style={{ borderColor: '#333' }} key={item.repairId}>
        <CardBody>
          <CardTitle><h3>{item.title}</h3></CardTitle>
          <CardSubtitle><h5>{item.priority} priority</h5></CardSubtitle>
          <CardText className= "repair-card-textbox">
            <Row>
            <Col md={4}>
              <p>Notes: {item.notes}</p>
            </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>Cost: ${item.cost}</p>
              </Col>
              <Col md={6}>
                <p>Status: {item.status}</p>
              </Col>
            </Row>
            <Row>
            <Col md={6}>
              <p>Vendor: {item.vendor}</p>
            </Col>
            
            {((item.recurrencePeriod === "never") ? (
            <Col md={6}>
              <p>Scheduled For: {moment(item.startDate).format('MM/DD/YYYY')}  </p>
            </Col>
            ) : (
              <p/>
              )
            )}

            {((item.recurrencePeriod === "weekly") ? (
            <Col md={6}>
              <p>Scheduled every {item.repeatInterval} week(s) from {moment(item.recurrenceStartDate).format('MM/DD/YYYY')} to {moment(item.recurrenceEndDate).format('MM/DD/YYYY')}</p>
            </Col>
             ) : (
              <p/>
              )
            )}

            {((item.recurrencePeriod === "daily") ? (
            <Col md={6}>
              <p>Scheduled from: {moment(item.recurrenceStartDate).format('MM/DD/YYYY')} to {moment(item.recurrenceEndDate).format('MM/DD/YYYY')}</p>
            </Col>
             ) : (
              <p/>
              )
            )}
            
         
            </Row>              
          </CardText>
          <Button
          color="danger"
          onClick={() =>this.handleDeleteRepair(item.repairId)}
          >Delete</Button>
        </CardBody>
      </Card>

      ))
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
        </div>
      </div>
    </div>
  );
}
}
