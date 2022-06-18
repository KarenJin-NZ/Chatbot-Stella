import React from 'react'
import '../src/components/ReturnLink/Return.css'
import { Link } from 'react-router-dom'

const Return = () => {

  function handleSubmit(e){
    e.preventDefault();
    alert("Thank you for submitting the Return Form! We will contact you soon. Please click 'Go Back' to continue your journey.");
  }

  return (
    <div className='container'>
      <div className="form-wrap">
        <h1>Customer Return Form</h1>
        <p>Please fill the form, and one of our customer service respresentive will be in contact with you within 24 hours.</p>
        <form action="" onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label htmlFor="name">First Name <span className='form-label'>*</span></label>
            <input type="text" name="firstName" id="fName" placeholder='First Name' maxlength="32" pattern="[A-Za-z]{1,32}" required />
          </div>
          <div className="form-group">
            <label htmlFor="last">Last Name <span className='form-label'>*</span></label>
            <input type="text" name="lastName" id="lName" placeholder='Last Name' maxlength="32" pattern="[A-Za-z]{1,32}" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className='form-label'>*</span></label>
            <input type="email" name="email" id="email" placeholder='Email Address'/>
          </div>
          <div className="form-group">
            <label htmlFor="return">Return Reason <span className='form-label'>*</span></label>
            <textarea name="returnReason" id="" cols="30" rows="10" required ></textarea>
          </div>

          <button type="submit" className='btn'>Submit</button>
      </form>
      </div>
      <footer>
        <Link to='/'>Go Back</Link>
      </footer>
    </div>
  )
}

export default Return