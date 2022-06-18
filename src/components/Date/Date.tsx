import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";

export function Date() {
  const [firstDate, setFirstDate] = React.useState<Date | null>();
  const [secondDate, setSecondDate] = React.useState<Date | null>();

  const handleFirstChange = (newValue: Date | null) => {
    setFirstDate(newValue);
  };
  const handleSecondChange = (newValue: Date | null) => {
    setSecondDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: "Check-in", end: "Check-out" }}>
      <div style={{ display: "flex" }}>
        <DesktopDatePicker
          label="Start Date"
          inputFormat="MM/dd/yyyy"
          value={firstDate}
          onChange={handleFirstChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="End Date"
          inputFormat="MM/dd/yyyy"
          value={secondDate}
          onChange={handleSecondChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}
