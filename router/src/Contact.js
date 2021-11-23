import React from 'react'  
class Contact extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              FirstName:
              <input type="text" value={this.state.value} onChange={this.handleChange} required />
            </label><br/><br/>
            <label>
              LastName:
              <input type="text" onChange={this.handleChange} required />
            </label><br/><br/>
            <label>
              Email:
              <input type="text" onChange={this.handleChange} required />
            </label><br/><br/>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    } 
export default Contact