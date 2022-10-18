import { FieldSetData } from "../model";

const fieldSetData: FieldSetData = [
    [{
        id: 'FirstName',
        placeholder: 'First name',
        required: true,
        type: 'text',
    },
    {
        id: 'LastName',
        placeholder: 'Last name',
        required: true,
        type: 'text',
    }],
    {
        id: 'Email',
        required: true,
        placeholder: "Email Address",
        type: 'text',
    },
    {
        id: 'Address1',
        placeholder: 'Address 1',
        type: 'text',
    },
    [{
        id: 'City',
        type: 'text',
    },
    {
        id: 'State',
        type: 'text',
    },
    {
        id: 'Zip',
        type: 'text',
    }],
    {
        id: 'Phone',
        required: true,
        placeholder: "(xxx)-xxx-xxxx",
        type: 'text',
    },
    {
        id: 'JobTitle',
        options: [
            'Engineer - lead',
            'Engineer - mid level',
            'Engineer - junion',
            'Engineer - front end focused',
            'Engineer - backend focused',
            'Engineer - full stack',
        ],
        placeholder: 'Please select job title',
        type: 'select',
    },
    {
        id: 'Reason',
        placeholder: 'Describe why you are a good fit for the job you are applying for.',
        type: 'textarea',
    }
];

export default fieldSetData;
