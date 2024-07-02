import * as React from "react";

import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import dayjs, { Dayjs } from "dayjs";

import { UserInformation } from "../contexts/user-info";
import { ISessionInfo } from "../types/global/bootcamp-session-info";

interface ServerDayProps extends PickersDayProps<Dayjs> {
  highlightedDays: ISessionInfo[];
}

const initialValue = dayjs(Date.now());

// Array estático de fechas a resaltar con información adicional sobre el tipo de resaltado
const staticHighlightedDays = UserInformation.bootcamps[0].CoursesInfo;

function ServerDay({
  highlightedDays = new Array<ISessionInfo>(),
  day,
  outsideCurrentMonth,
  ...other
}: ServerDayProps) {
  const highlight = highlightedDays.find((highlightedDay) =>
    highlightedDay.date.isSame(day, "day"),
  );
  const isSelected = !outsideCurrentMonth && highlight;

  const getBadgeColor = (type: number) => {
    switch (type) {
      case 1:
        return "red";
      case 2:
        return "green";
      case 3:
        return "yellow";
      default:
        return "default";
    }
  };

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "  " : undefined}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: isSelected
            ? getBadgeColor(highlight.type)
            : "transparent",
          color: isSelected ? getBadgeColor(highlight.type) : "transparent",
        },
      }}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DateCalendart(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  const [highlightedDays] = React.useState(staticHighlightedDays);
  const [currentDate, setCurrentDate] = React.useState(initialValue);

  return (
    <div {...props}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={currentDate}
          loading={false}
          onChange={(newDate) => {
            setCurrentDate(newDate);
          }}
          slots={{
            day: (props) => (
              <ServerDay {...props} highlightedDays={highlightedDays} />
            ),
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
