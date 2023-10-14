import { useEffect } from 'react';
import { Datepicker, Input, initTE, Select, Ripple } from 'tw-elements';
import input = Simulate.input;
import { Simulate } from 'react-dom/test-utils';

const tailwindElementsConfig = (
  disableFutureDatePicker?: boolean,
  disablePastDatePicker?: boolean,
  minDate?: Date,
  maxDate?: Date
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    initTE({ Datepicker, Input, Select, Ripple });

    // Disable Past
    const datepickerDisablePast = document.getElementById(
      'datepicker-disable-past'
    );
    new Datepicker(datepickerDisablePast, {
      disablePast: disablePastDatePicker,
    });

    // Disable Future
    const datepickerDisableFuture = document.getElementById(
      'datepicker-disable-future'
    );
    new Datepicker(datepickerDisableFuture, {
      disableFuture: disableFutureDatePicker,
    });

    // Set Date Limit - Between two Dates
    const datepickerWithLimits = document.getElementById(
      'datepicker-with-limits'
    );
    new Datepicker(datepickerWithLimits, {
      min: minDate,
      max: maxDate,
    });
  }, [input]);
};

export default tailwindElementsConfig;
