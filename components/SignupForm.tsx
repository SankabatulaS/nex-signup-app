import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
interface Field {
  id: number;
  name: string;
  fieldType: string;
  minLength?: number;
  maxLength?: number;
  defaultValue: string;
  required: boolean;
  listOfValues1?: string[];
}

interface SignupFormProps {
  fields: Field[];
}

const SignupForm: React.FC<SignupFormProps> = ({ fields }) => {

  // const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {fields.map((field, index) => (
          <Grid item xs={12} key={index}>
            {field.fieldType === 'TEXT' && (
              <TextField
                label={field.name}
                name={field.name}
                defaultValue={field.defaultValue}
                fullWidth
                required={field.required}
              />
            )}
            {field.fieldType === 'LIST' && (
              <TextField
                select
                label={field.name}
                name={field.name}
                defaultValue={field.defaultValue}
                fullWidth
                required={field.required}
                SelectProps={{
                  native: true,
                }}
              >
                {field.listOfValues1?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            )}
            {field.fieldType === 'RADIO' && (
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  {field.name} {field.required && '*'}
                </Typography>
                <RadioGroup
                  aria-label={field.name}
                  name={field.name}
                  defaultValue={field.defaultValue ? "Yes": "No"}
                  style={{display: "flex", flexDirection: "row"}}
                  // onChange={(e) => setSelectedValue(e.target.value)}
                >
                  {field.listOfValues1?.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </div>
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;
