import React from 'react';

interface TypeSelectProps {
  queryType: string;
  setQueryType: React.Dispatch<React.SetStateAction<string>>;
}

const GenderSelect: React.FC<TypeSelectProps> = ({
  queryType,
  setQueryType,
}) => {
  return (
    <label className="flex flex-col">
      Query Type
      <select
        value={queryType}
        onChange={(e) => setQueryType(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="country">Country</option>
        <option value="currency">Currency</option>
        <option value="language">Language</option>
        <option value="capitol">Capitol</option>
      </select>
    </label>
  );
};

export default GenderSelect;
