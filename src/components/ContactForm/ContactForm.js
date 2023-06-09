import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FormInputName } from 'components/FormInputName/FormInputName';
import { FormInputNumber } from 'components/FormInputNumber/FormInputNumber';

import {
  FormLabel,
  LabelSpan,
  BtnSubmit,
} from 'components/ContactForm/ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
  id: '',
};

export const ContactForm = ({ addContact }) => {
  const handleSubmit = values => {
    values.id = nanoid();
    addContact(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormLabel htmlFor="name">
          <LabelSpan>Name</LabelSpan>
          <FormInputName />
        </FormLabel>
        <FormLabel htmlFor="number">
          <LabelSpan>Number</LabelSpan>
          <FormInputNumber />
        </FormLabel>
        <div>
          <BtnSubmit type="submit">Submit</BtnSubmit>
        </div>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
