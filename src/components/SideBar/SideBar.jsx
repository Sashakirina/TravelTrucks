import { Form, Formik } from 'formik';
import LocationSearch from './components/LocationSearch/LocationSearch.jsx';

function SideBar() {
  const initialValues = {
    location: null,
    form: null,
    options: {},
  };

  const handleSubmit = values => {
    console.log('submit', values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <LocationSearch setFieldValue={setFieldValue} />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SideBar;
