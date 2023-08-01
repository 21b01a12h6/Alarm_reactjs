import React from 'react'
import { useForm } from 'react-hook-form'
const Loginform = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (FormData) => console.log(FormData)
  const styles = {
    marginLeft: '550px',
    marginTop: '50px',
    padding: '10px',
  }
  return (
    <table cellSpacing={'20px'} style={styles}>
      <div style={{ border: '2px solid black', width: '500px', height: '550px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <tr>

            <td><label style={{ fontSize: '20px' }}>UserName :</label></td>
            <td><input type='text' {...register('username',
              {
                required: true,
                pattern: /^[a-z][a-z\s]*$/i,
                message: 'Please enter valid username..!',
              }
            )} />
              {errors.username && <p style={{ color: 'red', fontSize: '10px' }}>*Enter valid UserName..!</p>}
            </td>
            <br></br>
          </tr>
          <tr>
            <td><label style={{ fontSize: '20px' }}>DOB :</label></td>
            <td>
              <input type='date' {...register('dob',
                {
                  required: true,
                  min: "1900-01-01",
                  max: "2022-12-31",
                }
              )} />
              {errors.dob && <p style={{ color: 'red', fontSize: '10px' }}>*Enter valid dob..!</p>}
            </td><br></br>
          </tr>
          <tr>
            <td><label style={{ fontSize: '20px' }}>Email address :</label></td>
            <td>
              <input type='email' {...register('mail',
                {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} />

              {errors.mail && <p style={{ color: 'red', fontSize: '10px' }}>*Enter valid mail..!</p>}
            </td><br></br>
          </tr>
          <tr>
            <td><label style={{ fontSize: '20px' }}>Phone no :</label></td>
            <td><input type='tel' {...register('num',
              {
                required: true,
                pattern: /^[0-9]{10}$/i,
              })} />
              {errors.num && <p style={{ color: 'red', fontSize: '10px' }}>*Enter valid num..!</p>}
            </td><br></br>
          </tr>
          <tr>
            <td><label style={{ fontSize: '20px' }}>Home address:</label></td>
            <td>
              <input type='text' {...register('address',
                {
                  required: true,
                })} />

              {errors.address && <p style={{ color: 'red', fontSize: '10px' }}>*fill address..!</p>}
            </td><br></br>
          </tr>
          <tr>
            <td><label style={{ fontSize: '20px' }}>Gender :</label></td>
            <td><input type='radio' value='male' {...register('gen',
              {
                required: true,
              })} />  Male
              <input type='radio' value='female' {...register('gen',
                {
                  required: true,
                })} />  female
              {errors.gen && <p style={{ color: 'red', fontSize: '10px' }}>*fill gender..!</p>}
            </td>
          </tr>
          <br></br>
          <tr>
            <td><label style={{ fontSize: '20px' }}>Hobbies :</label></td>
            <td><input type='checkbox' value='Sleeping'{...register('hobbies')} />sleeping<br></br>
              <input type='checkbox' value='Eating chocolates'{...register('hobbies')} />Eating chocolates</td>
            <td><input type='checkbox' value='Bike rides'{...register('hobbies')} />Bike rides<br></br>
              <input type='checkbox' value='Dancing'{...register('hobbies')} />Dancing</td>
          </tr>
          <br></br>
          <br></br>
          <input type='Submit' value='submit'
            style={{ backgroundColor: 'dodgerblue', color: 'white', border: '50px', width: '100px', height: '30px', marginLeft: '250px' }}></input>
        </form>
      </div>
    </table>
  )
}
export default Loginform