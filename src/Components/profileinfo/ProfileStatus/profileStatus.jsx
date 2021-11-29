import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  };
  
  activateEditStatus = () => {
    this.setState({
      editMode: !this.state.editMode
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (event) => {
   this.setState({
     status: event.currentTarget.value
   })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
     this.setState({
       status: this.props.status 
     })
  }

  render() {
    return (
      <>
        {!this.state.editMode ?
          <div>
            <span onDoubleClick={this.activateEditStatus}> Status: {this.props.status}</span>
          </div> : <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.activateEditStatus} value={this.state.status}></input>
          </div>
        }
      </>
    );
  }
}
export default ProfileStatus;