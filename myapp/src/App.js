import { Component } from 'react';
import {GrAdd} from 'react-icons/gr'
import {BiSolidEdit} from 'react-icons/bi'
import {MdNotificationsPaused} from 'react-icons/md'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdOutlineCheckBox} from 'react-icons/md'
import './App.css';

class App extends Component {
  state = {
    addClick:false,
    editedClick:false,
    inputValue:false,
    descriptionInput:'',
    date:'',
    time:'',
    assignUser:''
  }
     clickOnAdd = () => {
      this.setState(prevsState => ({ addClick:!prevsState.addClick
      }))}

      descriptionInputClick = (event) => {
          this.setState({descriptionInput:event.target.value})
      }
      changeDate = (event) => {
        this.setState({date:event.target.value})
      }
      changeTime = (event) => {
          this.setState({time:event.target.value})
      }

      changeUser = (event) => {
        this.setState({assignUser:event.target.value})
      }

      clickOnSave = () => {
        this.setState(prevsState => ({addClick:!prevsState.addClick}))
        this.setState(prevsState => ({inputValue:!prevsState.inputValue}))
      }
      clickOnCancel = () => {
        this.setState(prevsState => ({addClick : !prevsState.addClick}))
      }
      clickEditButton = () => {
        this.setState(prevsState => ({editedClick:!prevsState.editedClick}))
      }

      renderTask = () => {
        const {descriptionInput,date,time,assignUser} = this.state
        
        return (
          <div className='task-adding-container'>
           <label className='task-description-heading' htmlFor='taskDescription'>Task Description</label>
           <input onChange={this.descriptionInputClick} className='task-description-input' value={descriptionInput} id='taskDescription' type='text'/>
           <div className='date-time-container'>
            <div className='date-container'>
              <label htmlFor='date-input' className='date-heading'>Date</label>
              <input id='data-input' onChange={this.changeDate} value={date} className='date-input' type='date'/>
            </div>
            <div className='time-container'>
              <label className='time-heading' htmlFor='time'>Time</label>
              <input type='time' value={time} onChange={this.changeTime} className='time-input'/>
            </div>
           </div>
           <div className='assign-user'>
               <label htmlFor='assignUser' className='assign-user-heading'>Assign User</label>
               <select value={assignUser} className='assign-user-input' onChange={this.changeUser} id='assignUser' name='assignUser'>
                   <option value ='surendra' >surendra</option>
                   <option value = 'suresh'>suresh</option>
                   <option value = 'basha'>basha</option>
               </select>
           </div>
           <div className='button-container'>
            <button className='cancel-button' onClick={this.clickOnCancel}>Cancel</button>
            <button className='save-button' onClick={this.clickOnSave}>Save</button>
           </div>
          </div>
        )
      }
      clickOnEditedSave = () => {
        this.setState(prevsState => ({editedClick:!prevsState.editedClick}))
      }
      clickOnEditedCancel = () => {
        this.setState(prevsState => ({editedClick:!prevsState.editedClick}))
      }
      clickOnDelete = () => {
        this.setState(prevsState => ({editedClick:!prevsState.editedClick}))
        this.setState(prevsState => ({inputValue:!prevsState.inputValue}))
        this.setState({descriptionInput:"",date:"",time:""})
        
      }

      rendereditedTask = () => {
        const {descriptionInput,date,time,assignUser} = this.state
        return(
          <div className='task-adding-container'>
           <label className='task-description-heading' htmlFor='taskDescription'>Task Description</label>
           <input onChange={this.descriptionInputClick} className='task-description-input' value={descriptionInput} id='taskDescription' type='text'/>
           <div className='date-time-container'>
            <div className='date-container'>
              <label htmlFor='date-input' className='date-heading'>Date</label>
              <input id='data-input' onChange={this.changeDate} value={date} className='date-input' type='date'/>
            </div>
            <div className='time-container'>
              <label className='time-heading' htmlFor='time'>Time</label>
              <input type='time' value={time} onChange={this.changeTime} className='time-input'/>
            </div>
           </div>
           <div className='assign-user'>
               <label htmlFor='assignUser' className='assign-user-heading'>Assign User</label>
               <select value={assignUser} className='assign-user-input' onChange={this.changeUser} id='assignUser' name='assignUser'>
                   <option value ='surendra' >surendra</option>
                   <option value = 'suresh'>suresh</option>
                   <option value = 'basha'>basha</option>
               </select>
           </div>
           <div className='button-edit-container'>
            <AiOutlineDelete className='delete-icon' onClick={this.clickOnDelete}/>
            <div>
            <button className='cancel-button' onClick={this.clickOnEditedCancel}>Cancel</button>
            <button className='save-button' onClick={this.clickOnEditedSave}>Save</button>
            </div>
            
           </div>
          </div>
        )
      }

      renderInputValue = () => {
        const {descriptionInput,date} = this.state
        return(
            <div className='task-value-container'>
              <ul>
                <li className='list-type'>{descriptionInput}</li>
                <li className='list-type'>{date}</li>
              </ul>
              <div>
                <BiSolidEdit className='edit-icon' onClick={this.clickEditButton}/>
                <MdNotificationsPaused className='edit-icon'/>
                <MdOutlineCheckBox className= 'check-edit-icon'/>
              </div>
            </div>
        )
      }
  render(){
    const {addClick,editedClick} = this.state;
    const{descriptionInput,date,time,assignUser,inputValue} = this.state
    console.log(descriptionInput,date,time,assignUser)
    return (
      <div className='container'>
         <div className='task-container'>
         <h1 className='task-heading'>Task</h1>
         <GrAdd className='button' onClick={this.clickOnAdd}/>
      </div>
      {addClick && this.renderTask()}
      {inputValue && this.renderInputValue()}
      {editedClick && this.rendereditedTask()}
      </div>
      
    )

  }
  
}

export default App;
