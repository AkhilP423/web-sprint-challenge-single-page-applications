import React, { useState } from 'react';
import Styled from 'styled-components';
import Styling from './Styling';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';


const FormStyle = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	color: black;
	background: orange;
  .errorName {
    color: red;
  }
  `;

  const schema = yup.object().shape({
    name:
    yup.string().required('Name is a required field').min(2, 'name must be at least 2 characters'),
    size:
    	yup.boolean().oneOf([true], 'You must select a size'),
    Pepperoni:
    	yup.boolean(),
    Ham:
    	yup.boolean(),
    Chicken:
		yup.boolean(),
	Bacon:
		yup.boolean(),
	Sausage:
		yup.boolean(),
	Meatballs:
		yup.boolean(),
    specialRequest:
    	yup.string(),
  })

function OrderForm () {

  const [ form, setForm ] = useState({
    name: '',
    size: '0',
    Pepperoni: false,
    Ham: false,
	Chicken: false,
	Bacon: false,
	Sausage: false,
	Meatballs: false,
    specialRequest: '',
  })

    const [ errors, setErrors ] = useState({
    name: '',
    size: '',
    Pepperoni: '',
    Ham: '',
    Chicken: '',
    Bacon: '',
    Sausage: '',
    Meatballs: '',
    specialRequest: '',
  })

    const [ user, setUser ] = useState({
    setForm
  })


    const submit = event => {
    event.preventDefault()
    const newUser = {
      name: form.name,
      size: form.size,
      Pepperoni: form.Pepperoni,
      Ham: form.Ham,
	  Chicken: form.Chicken,
	  Bacon: form.Bacon,
	  Sausage: form.Sausage,
	  Meatballs: form.Meatballs,
      specialRequest: form.specialRequest,
    }

  axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
            setForm({
              name: '',
              size: '',
              Pepperoni: false,
              Ham: false,
              Chicken: false,
			  Bacon: false,
			  Sausage: false,
			  Meatballs: false,
              specialRequest: '',
            })
            setUser({
              name: form.name,
              size: form.size,
              Pepperoni: form.Pepperoni,
              Ham: form.Ham,
			  Chicken: form.Chicken,
			  Bacon: form.Bacon,
			  Sausage: form.Sausage,
			  Meatballs: form.Meatballs,
              specialRequest: form.specialRequest,
            })
        })
        .catch(err => {
        })
    }
  
    const setFormErrors =(name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }
    const change = event => {
    const { checked, value, name, type } = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setForm({ ...form, [name]: valueToUse})
    }

  

    return (
      <>
      <Styling>
        <div className='Header'>
         <div className='Name'>
            <h1>Lambda Eats</h1>
         </div>
        <div className='Nav'>
            <Link to='/'>Home</Link>
            <Link to='/Pizza'>Order</Link>
         </div>
        </div>
       </Styling>

        <FormStyle>

        <div className='errorName'>
        {errors.name}<br />
        </div>

        <form id ="pizza-form" onSubmit={submit} autoComplete='off'>

        <div>   
        <label>
        Name on Order:
        <input onChange={change} value={form.name} type='text' id ='name-input' name='name' /></label>
        </div>
             
        <div>
		<label>Choose your size and toppings: 
		<select onChange={change} value={form.size} id = 'size-dropdown' name='size'>           
        <option value=''>-Select-</option>
        <option value='Small'>Small</option>
        <option value='Medium'>Medium</option>
        <option value='Large'>Large</option>
        <option value='Extra Large'>Extra Large</option>
        </select>
        </label>
        </div>

        <div>
        <label>Pepperoni:
        <input onChange={change} checked={form.Pepperoni} name='Pepperoni' type='checkbox' /></label>
        <label>Ham:
        <input onChange={change} checked={form.Ham} name='Ham' type='checkbox' /></label>
        <label>Chicken:
        <input onChange={change} checked={form.Chicken} name='Chicken' type='checkbox' /></label>
		<label>Bacon:
        <input onChange={change} checked={form.Bacon} name='Bacon' type='checkbox' /></label>
		<label>Sausage:
        <input onChange={change} checked={form.Sausage} name='Sausage' type='checkbox' /></label>
        <label>Meatballs:
        <input onChange={change} checked={form.Meatballs} name='Meatballs' type='checkbox' /></label>
		</div>

        <div>
        <label>Special Requests:
        <input onChange={change} value={form.specialRequest} id='special-text' name='specialRequest' type='text' /></label>
        </div>
        <button id = 'order-button' name='button'>Complete Order!</button>
        </form>
        </FormStyle>

        <div className='orderSummary'>
        <h3>Summary of order:</h3>
        <strong>Your Name:</strong><p>{user.name}</p>
        <strong>Pizza Size:</strong><p>{user.size}</p>
        <p><strong>List of Toppings:</strong></p>
        <p>{user.Pepperoni === true ? 'Pepperoni' : ' '}</p>
        <p>{user.Ham === true ? 'Ham' : ' '}</p>
		<p>{user.Chicken === true ? 'Chicken' : ' '}</p>
		<p>{user.Bacon === true ? 'Bacon' : ' '}</p>
		<p>{user.Sausage === true ? 'Sausage' : ' '}</p>
		<p>{user.Meatballs === true ? 'Meatballs' : ' '}</p>
        <strong>Special Requests:</strong><p>{user.specialRequest}</p>
        </div>
           
        </>
    )
  }
  export default OrderForm;