import { useState } from 'react';
import { useForm,  } from 'react-hook-form';

import Select from 'react-select';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email().optional(),
  website: z.string().url(),
  country: z.string(),
});

const countryOptions = [
  { value: 'asgard', label: 'Asgard' },
  { value: 'scotland', label: 'Scotland' },
  { value: 'usa', label: 'USA' },
];

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'website', label: 'Website', type: 'text' },
  { name: 'country', label: 'Country', type: 'select', options: countryOptions },
];

const SimpleForm = ({ onSave, user = {} }) => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const handleSave = (formValues) => {
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
              {field.label}
            </label>
            {field.type === 'select' ? (
             <Select
             {...field}
             className="w-full"
             value={countryOptions.find(({ value }) => value === (control[field.name]?.value))}
             onChange={(selectedOption) => control[field.name]?.onChange(selectedOption.value)}
             options={field.options}
           />
           
            ) : (
              <input
                className={`w-full px-3 py-2 border rounded-md ${errors[field.name] ? 'border-red-500' : 'border-gray-300'}`}
                {...register(field.name)}
                type={field.type}
              />
            )}
            {errors[field.name]?.message && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name]?.message}</p>
            )}
          </div>
        ))}
        <div className="mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SimpleForm;
