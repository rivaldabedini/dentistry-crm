# Dentistry CRM - Dynamic Form Configuration

The following JSON object describes a dynamic form configuration used in the Dentistry CRM application. It includes multiple fields with various input types and properties to render a user-friendly and responsive form.

## Form Configuration

```javascript
formConfig = {
  title: 'Dynamic Form Example',
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter first name',
      class: 'col-lg-6',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      class: 'col-lg-6',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      class: 'col-lg-6',
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      placeholder: 'Enter your age',
      class: 'col-lg-6',
    },
    {
      name: 'birthDate',
      label: 'Date of Birth',
      type: 'date',
      placeholder: 'Select your birth date',
      class: 'col-lg-6',
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { value: 'Male', viewValue: 'Male' },
        { value: 'Female', viewValue: 'Female' },
        { value: 'Other', viewValue: 'Other' },
      ],
      class: 'col-lg-6',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      options: [
        { value: 'us', viewValue: 'United States' },
        { value: 'in', viewValue: 'India' },
        { value: 'uk', viewValue: 'United Kingdom' },
      ],
      class: 'col-lg-6',
    },
    {
      name: 'hobbies',
      label: 'Hobbies',
      type: 'checkbox',
      class: 'col-lg-6',
    },
    {
      name: 'comments',
      label: 'Additional Comments',
      type: 'textarea',
      placeholder: 'Enter your comments here',
      class: 'col-lg-12',
    },
  ],
};
```

## Layout and Classes
Each field uses the `class` property to specify its responsive grid layout (e.g., `col-lg-6` for half-width fields and `col-lg-12` for full-width fields).
