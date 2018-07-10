import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToDo } from '../../actions/index';

const TaskFormInput = styled.input`
  margin-left: 10px;
  display: block; 

  &:nth-child(n+2){
    margin-top: 10px;
  }
`;

const TaskFormSubmitButton = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
`;

class NewTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: ''
    }

    this._handleTitleChange = this._handleTitleChange.bind(this);
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
    this._resetFormState = this._resetFormState.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleTitleChange(e) {
    this.setState(...this.state, {title: e.target.value});
  }

  _handleDescriptionChange(e) {
    this.setState(...this.state, {description: e.target.value});
  }

  _resetFormState() {
    this.setState(...this.state, {title: '', description: ''});
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.addToDo(this.state.title,this.state.description);
    this._resetFormState();
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
          <TaskFormInput placeholder="title" type="text" onChange={this._handleTitleChange} value={this.state.title} />
          <TaskFormInput placeholder="description" type="text" onChange={this._handleDescriptionChange} value={this.state.description} />
          <TaskFormSubmitButton type="submit"> Save </TaskFormSubmitButton>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: (title,description) => dispatch(addToDo(title,description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);