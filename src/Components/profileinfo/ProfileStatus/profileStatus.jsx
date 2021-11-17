import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  };
  
  activateEditStatus = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }
  render() {
    return (
      <>
        {!this.state.editMode ?
          <div>
            <span onDoubleClick={this.activateEditStatus}> Status: {this.props.status}</span>
          </div> : <div>
            <input autoFocus={true} onBlur={this.activateEditStatus} value={this.props.status}></input>
          </div>
        }
      </>
    );
  }
}
export default ProfileStatus;