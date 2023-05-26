import {Fragment} from 'react';
import {DatePicker, Stack} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface BasicDatePickerProps {
  label: string
  change: (event: Date | null) => void
}

const BasicDatePicker = ({label, change}:BasicDatePickerProps) => {
  return (
    <Fragment>
      <Stack direction="column" alignItems="flex-start" spacing={6}>
        <DatePicker format={`yyyy-MM-dd`} placeholder={label} placement="bottomStart" oneTap onChange={change}/>
      </Stack>
    </Fragment>
  );
}

export default BasicDatePicker