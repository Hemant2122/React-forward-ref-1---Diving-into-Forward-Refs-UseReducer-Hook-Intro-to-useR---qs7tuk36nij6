'use client';
import React from 'react';

const InputField = React.forwardRef((props, ref) => {
  const { values, setValues } = props;
  return (
    <div>
      <input id='input' type='text' ref={ref} value={values} onChange={(e) => {
        setValues(e.target.value);
      }}/>
    </div>
  );
});

export default InputField;
