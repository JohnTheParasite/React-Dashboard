import { Box, Button, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import UserTextField from './Fields/UserTextField';
import { useFormikContext } from 'formik';

const UserCreation = () => {
  const { submitForm } = useFormikContext();

  return (
    <Box display="flex" flexDirection="column" gap="30px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Box display="flex" gap="30px">
        <UserTextField field="firstName" label="First Name" />

        <UserTextField field="lastName" label="Last Name" />
      </Box>

      <UserTextField field="email" label="Email" />

      <UserTextField field="contact" label="Contact number" />

      <UserTextField field="address1" label="Address 1" />

      <UserTextField field="address2" label="Address 2" />

      <Box display="flex" justifyContent="end">
        <Button onClick={submitForm} color="secondary" variant="contained">
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default UserCreation;
