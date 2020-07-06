import * as React from "react";
import Button from "../Button/index";

interface Props<FormData> {
  children: JSX.Element | JSX.Element[];
  onSubmit: (formData: FormData) => void;
}

const Form: React.FC<Props<any>> = ({ children, onSubmit }) => {
  const [values, updateValues] = React.useState({});
  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    onSubmit("foo");
  };

  const handleChange = (
    value: string | number,
    name: string = "default"
  ): void => {
    updateValues({
      ...values,
      [name]: value,
    });
  };

  const getDefaultName = (index: number) => 'FormElement_' + index;

  const renderFormField = (formField: JSX.Element, index: number): JSX.Element => {
      if (formField.props.hasOwnProperty('onChange')) {
          return React.cloneElement(formField, {
            ...formField.props,
            value: values[formField.props.name || getDefaultName(index)],
            onChange: handleChange,
          });
      } else {
          return formField;
      }
  };

  React.useEffect(() => {
    const initialValues = {};
    React.Children.forEach(children, (formField, index) => {
        console.log(formField);
      const {name, value} = (formField as JSX.Element).props;
      initialValues[name || getDefaultName(index)] = value;
    });
    console.log(initialValues);
    updateValues(initialValues);
  }, [children]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {React.Children.map(children, (formField, index) => {
          return (
            <div key={index} className="FormField">
              {renderFormField(formField as JSX.Element, index)}
            </div>
          );
        })}
        <Button type="submit" text="Absenden" />
      </form>
      <style jsx>{`
        .FormField {
          padding: 1em 0;
        }
      `}</style>
    </>
  );
};

export default Form;
