import React from 'react';
import { Container, Typography } from '@material-ui/core';
import SignupForm from '../components/SignupForm';
import formData from '../data/formData.json';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom>
        Signup Form
      </Typography>
      <SignupForm fields={formData.data} />
    </Container>
  );
};

export default Home;
