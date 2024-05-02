import React, { Component } from 'react'
import Input from '../Input/Input';
class RegisterForm extends Component {
  state = {
    formData: {
      name: {
        value: '',
        validator: {
          minLength: 3,
          maxLength: 10,
          required: true
        },
        error: { status: true, message: "" ,isTouched: false } 
      },
      phoneNumber: {
        value: '',
        validator: {
          minLength: 10,
          maxLength: 10,
          required: false
        },
        error: { status: true, message: "" ,isTouched: false}
      },
      email: {
        value: '',
        validator: {
          required: true
        },
        error: { status: true, message: "" ,isTouched: false}
      },
      password: {
        value: '',
        validator: {
          minLength: 6,
          maxLength: 24,
          required: true
        },
        error: { status: true, message: "" ,isTouched: false}
      }
    },
    isFormValid: false
  };

  checkValue = (value, rules) => {
    let isValid = true;
    let trimmedValue = value.trim();
    let message = ""
    if (rules.maxLength && trimmedValue.length > rules.maxLength) {
      isValid = false;
      message = `more than max length (${rules.maxLength})`;
    }
    if (rules.minLength && trimmedValue.length < rules.minLength) {
      isValid = false;
      message = `less than min length (${rules.minLength})`;
    }
    if (rules.required && trimmedValue.length === 0) {
      isValid = false;
      message = "required";
    }
    return { isValid, message };
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const updatedForm = this.state.formData;
    updatedForm[fieldName].value = fieldValue

    let { isValid, message } = this.checkValue(e.target.value, updatedForm[fieldName].validator);

    updatedForm[fieldName].error.status = !isValid;
    updatedForm[fieldName].error.message = message;
    updatedForm[fieldName].error.isTouched = true;

    let newIsFormValid = true;
    for (let fn in updatedForm) {
      if (updatedForm[fn].validator.required === true) {
        newIsFormValid = !updatedForm[fn].error.status && newIsFormValid;
      }
    }

    this.setState({
      formData: updatedForm,
      isFormValid: newIsFormValid
    });
  };
  render() {
    const { name, phoneNumber, email, password } = this.state.formData;
    //destructor
    const { isFormValid } = this.state;
    return (
      <div className='RegisterForm'>
        <form onSubmit={this.onSubmitForm}>

          <Input
            onChange={this.onChangeInput}
            value={name.value}
            name="name"
            placeholder='Name'
            error={name.error} />
          <Input
            onChange={this.onChangeInput}
            value={phoneNumber.value}
            name="phoneNumber"
            placeholder='Phone Number'
            error={phoneNumber.error} />
          <Input
            onChange={this.onChangeInput}
            value={email.value}
            name="email"
            placeholder='Email'
            error={email.error} />
          <Input
            onChange={this.onChangeInput}
            value={password.value}
            type='password'
            name="password"
            placeholder='Password'
            error={password.error} />

          <button disabled={!isFormValid} type="submit" className="Button">Register</button>

        </form>
      </div>
    )
  }
}

export default RegisterForm
