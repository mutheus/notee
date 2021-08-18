import { FiCheck } from "react-icons/fi";

export function RadioButton({ color, selectedColor, onChange }) {
  return (
    <div 
      onClick={() => onChange(color)} 
      style={{backgroundColor: `${color}`}}
    >
      {selectedColor === color && <FiCheck size={'60%'} />}
    </div>  
  );
}
