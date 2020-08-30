import React from 'react';
import { TextInput } from 'grommet';

const FilterComponent = ({ filter, onChange, column, ...rest }) => {
  const props = { ...{ size: 'medium' }, ...rest };
  return (
    <TextInput
      aria-label={`Filter data by ${
        typeof column.Header === 'string' ? column.Header : column.id
      }`}
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
      {...props}
    />
  );
};

export default FilterComponent;
