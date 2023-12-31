import { ChangeEventHandler } from "react";

interface FormRowSelectProps {
  name: string;
  label?: string;
  list: string[];
  defaultValue?: string;
  onChange?: ChangeEventHandler;
}

const FormRowSelect: React.FC<FormRowSelectProps> = ({
  name,
  label,
  list,
  defaultValue = "",
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="form-select"
        onChange={onChange}
      >
        {list.map((itemValue) => (
          <option key={itemValue} value={itemValue}>
            {itemValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
