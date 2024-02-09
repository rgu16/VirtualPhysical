import React, { useState } from 'react';

const BasicForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    height:'',
    birthday:'',
    input1:'',
    input2:'',
    input3:'',
    input4:'',
    input5:'',
  });
  const [helpText, setHelpText] = useState({
    firstName: '',
    lastName: '',
    height:'',
    weight:'',
    birthday:'',
    input1:'',
    input2:'',
    input3:'',
    input4:'',
    input5:'',
    input1image: '/patientSearchIcon.png',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNextClick = () => {
    // Determine the next incomplete input field
    const fields = Object.keys(formData);
    const nextField = fields.find((field) => formData[field] === '');

    if (nextField) {
      // If there is an incomplete field, focus on it and scroll the screen
      const nextInput = document.getElementsByName(nextField)[0];
      nextInput.focus();
      nextInput.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If all fields are filled, you can navigate to the next step or perform other actions
      submitForm()
      alert("form submitted")
      setFormData({
        firstName: '',
        lastName: '',
        height:'',
        birthday:'',
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
      })
    }
  };

  const submitForm = () => {
    // Implement the logic for submitting the form
    console.log('Form submitted!', formData);
  };

  const isFormValid = () => {
    // Check if all fields are filled
    return Object.values(formData).every((value) => value !== '');
  };
  const renderHelp = (fieldName) => {
    // Replace this with the actual text or image you want to display
    if (fieldName === 'input1'){
      return "Click for image!"
    }
    return `Help text for ${fieldName}`;
  };
  const handleHelpButtonClick = (fieldName,e) => {
    // Set the help text based on the field name
    e.preventDefault();
    const help = {
      firstName: "More detailed help text for first name",
      lastName: "More detailed help text for last name",
      height:'More detailed help text for height',
      weight:'More detailed help text for weight',
      birthday:'More detailed help text for birthday',
      input1:'More detailed help text for input1',
      input2:'More detailed help text for input2',
      input3:'More detailed help text for input3',
      input4:'More detailed help text for input4',
      input5:'More detailed help text for input5',
    }
    setHelpText((prevHelpText) => ({
      ...prevHelpText,
      [fieldName]: prevHelpText[fieldName] ? '' : help[fieldName],
    }));
    
  };
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
   <form style={{ flex: 1, paddingBottom: '60px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('firstName ')} onClick={(e) => handleHelpButtonClick('firstName',e)}>
            ?
          </button>
        </div>
        {helpText.firstName && <div>{helpText.firstName}</div>}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('lastName ')} onClick={(e) => handleHelpButtonClick('lastName',e)}>
            ?
          </button>
        </div>
        {helpText.lastName && <div>{helpText.lastName}</div>}
        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('weight ')}>
            ?
          </button>
        </div> */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('height ')}>
            ?
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="birthday">birthday:</label>
          <input
            type="text"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('birthday ')}>
            ?
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="input1">Input 1:</label>
          <input
            type="text"
            id="input1"
            name="input1"
            value={formData.input1}
            onChange={handleInputChange}
          />
          <button className="help-button" title={renderHelp('input1')} onClick={(e) => handleHelpButtonClick('input1',e)}>
            ? <div className="help-image"></div>
          </button>
        </div>
        {helpText.input1 && <div>{helpText.input1}</div>}
        {helpText.input1 && <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/patientSearchIcon.png'} 
                alt="Not Found" 
                className="img-3"
              />}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="birthday">input2:</label>
          <input
            type="text"
            id="input2"
            name="input2"
            value={formData.input2}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('input2 ')}>
            ?
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="birthday">input3:</label>
          <input
            type="text"
            id="input3"
            name="input3"
            value={formData.input3}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('input3 ')}>
            ?
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="birthday">input4:</label>
          <input
            type="text"
            id="input4"
            name="input4"
            value={formData.input4}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('input4 ')}>
            ?
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="birthday">input5:</label>
          <input
            type="text"
            id="input5"
            name="input5"
            value={formData.input5}
            onChange={handleInputChange}
          />
          <button className="help-button" style={{border: 'none', background: 'none'}} title={renderHelp('input5 ')}>
            ?
          </button>
        </div>
      </form>

      <footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#333', color: 'white', textAlign: 'center', padding: '10px' }}>
        <button onClick={handleNextClick}>{isFormValid() ? 'Submit' : 'Next'}</button>
      </footer>
    </div>
  );
};

export default BasicForm;
