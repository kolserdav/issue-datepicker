import { forwardRef, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {

  const inputRef = useRef(null);

  const [date, setDate] = useState('');
  const [selected, setSelected] = useState(null);

  const changeDateRawHandler = (e) => {
    setDate(e.target.value);
    // added inputRef emit focus
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 10);
  }

  const changeDateHandler = (e) => {
    setSelected(e);
  }

  const DateInput = forwardRef(
    ({ onClick, value }, ref) => (
      <div>
        {/** inputRef to input */}
        <input
          value={value}
          ref={inputRef}
          placeholder="dd.mm.YYYY"
          onChange={changeDateRawHandler}
        />
        {/** ref to button */}
        <button ref={ref} onClick={onClick} type="submit">
          click
        </button>
      </div>
    )
  );
  return (
    <div className="App">
      <DatePicker
          customInput={<DateInput />}
          onChange={changeDateHandler}
          selected={selected}
          required
          locale="ru"
          value={date}
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
        />
    </div>
  );
}

export default App;
