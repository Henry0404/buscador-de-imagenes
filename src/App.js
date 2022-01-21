import { Formik, Form, Field } from "formik";
import "./App.css";
import "./header.css";
const App = () => {
  return (
    <div>
      <header>
        <Formik
          inicialValues={{ search: "" }}
          onSubmit={async (values) => {
            //llamar a api de unsplash
            console.log(values);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default App;
