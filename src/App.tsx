import React from 'react';
import { Formik, Field, Form, useField, FieldAttributes } from 'formik';
import { TextField,Button, Checkbox, Radio, FormControlLabel } from '@material-ui/core';

type myRadioProps = { label : string } & FieldAttributes<{}>;

const MyRadio: React.FC<myRadioProps> = ({label, ...props})=>{
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio/>} label={label} />
}

function App() {
  return (
    <div>
      <Formik 
        initialValues={{
          firstName : "Gevindu Mallikarachchi",
          isTall : false,
          cookies :[],
          yougurt:""
        }
        } 
        onSubmit={(data, {setSubmitting})=>{
          setSubmitting(true);
          console.log(data);
          setSubmitting(false)
        }}
      >
        {
          ({values,isSubmitting})=>(
              <Form>
                <Field name="firstName"  as={TextField}/>
                <Field name="isTall" type="checkbox" as={Checkbox}/>
                <div>Cookies: </div>
                <Field name="cookies" type="checkbox"  as={Checkbox} value="Chock"/>
                <Field name="cookies" type="checkbox" as={Checkbox} value="Vanila"/>
                <Field name="cookies" type="checkbox" as={Checkbox} value="Banana"/>
                <div>Yourgurt: </div>
                <MyRadio name="yougurt" type="radio"  as={Radio} value="A" label="A"/>
                <MyRadio name="yougurt" type="radio"  as={Radio} value="B" label="B"/>
                <MyRadio name="yougurt" type="radio"  as={Radio} value="C" label="C"/>
                <div>
                  <Button disabled={isSubmitting}  type="submit">Submit</Button>
                </div>
              </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
