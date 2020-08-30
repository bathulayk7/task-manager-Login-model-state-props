import React from 'react'
import { FormGroup, Label, Form, Input, Button } from 'reactstrap'

class TaskForm extends React.Component{
    state={
        title:"",
        description:"",
        titleErr:"",
        descriptionErr:"",
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const {title,description}=this.state;  
        let valid=true;
        if(title===""){
            this.setState({titleErr:"Title Error"})
            valid=false;
        }
        if(description===""){
            this.setState({descriptionErr:"Description Error"})
            valid=false;
        }
        if(valid){
            const data={
                title,
                description,
            };
            this.props.addTask(data);
            this.setState({
                title:"",
                description:"",
                titleErr:"",
                descriptionErr:""
            })
        }
    } 
    handleChange=(e)=>{
            this.setState({
           [e.target.id]:e.target.value,
           [e.target.id+"Err"]:"" 
       })
    }
render(){
    const {title,description,titleErr,descriptionErr}=this.state;
    return(
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={this.handleChange} />
                <span id="titleErr" style={{color:"red", fontSize:"12px"}}>
                    {titleErr}
                </span>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description" >Description</Label>
                <Input type="textarea" id="description" rows="5" value={description} onChange={this.handleChange} />
                <span id="descriptionErr" style={{color:"red", fontSize:"12px"}}>
                    {descriptionErr}
                </span>
            </FormGroup>
            <Button color="primary">Add</Button>
        </Form>
    )
 }
}

export default TaskForm;