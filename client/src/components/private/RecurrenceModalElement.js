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
    <Label for="recurringPeriod">Repeat</Label>
    <Input
    type="select"
    value={this.state.recurrencePeriod}
    name="recurrencePeriod"
    onChange={this.handleInputChange}
    >
    <option selected value="0">Never</option>    
  {/*   <option>Daily</option> */}
    <option value="1">Weekly</option>
  {/*   <option>Monthly</option> */}
  {/*   <option>Yearly</option> */}
    </Input>
</FormGroup>
{/* WEEKLY */}
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
    <option value="SU">Sunday</option>
    <option value="MO">Monday</option>
    <option value="TU">Tuesday</option>
    <option value="WE">Wednesday</option>
    <option value="TH">Thursday</option>
    <option value="FR">Friday</option>
    <option value="SA">Saturday</option>
    </Input>
</FormGroup>


{/* MONTHLY 
<FormGroup>
    <Label for="repeatInterval">every</Label>
    <Input
    type="number"
    name="recurrencePeriod"
    id="recurringPeriod"
    placeholder="1"
    value={this.state.repeatInterval}
    onChange={this.handleInputChange}    
    />
    <span>month(s)</span>
</FormGroup>
*/}
        
</Form>



</div>
        )
     }
    }