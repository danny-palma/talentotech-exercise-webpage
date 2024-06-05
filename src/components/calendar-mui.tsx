import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Typography } from "@mui/material";
import { CoursesInfo, UserInformation } from "../contexts/user-info";
import { PieChart } from "@mui/x-charts/PieChart";

interface ServerDayProps extends PickersDayProps<Dayjs> {
    highlightedDays: typeof CoursesInfo;
}

const initialValue = dayjs(Date.now());

// Array estático de fechas a resaltar con información adicional sobre el tipo de resaltado
const staticHighlightedDays = UserInformation.bootcamps[0].CoursesInfo;

function ServerDay({
    highlightedDays = [],
    day,
    outsideCurrentMonth,
    ...other
}: ServerDayProps) {
    const highlight = highlightedDays.find((highlightedDay) =>
        highlightedDay.date.isSame(day, "day")
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
                    color: isSelected
                        ? getBadgeColor(highlight.type)
                        : "transparent",
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

export default function DateCalendart() {
    const [highlightedDays] = React.useState(staticHighlightedDays);
    const [currentDate, setCurrentDate] = React.useState(initialValue);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="d-flex flex-column text-center ">
                <Box display="flex" alignItems="center">
                    <DateCalendar
                        value={currentDate}
                        loading={false}
                        onChange={(newDate) => {
                            setCurrentDate(newDate);
                        }}
                        slots={{
                            day: (props) => (
                                <ServerDay
                                    {...props}
                                    highlightedDays={highlightedDays}
                                />
                            ),
                        }}
                    />
                    <div className="d-flex flex-column">
                        <Typography>Estado Asistencia</Typography>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        {
                                            id: 1,
                                            value: 37,
                                            color: "#FF6384",
                                        },
                                        {
                                            id: 2,
                                            value: 63,
                                            color: "#36A2EB",
                                        },
                                    ],
                                    innerRadius: 0,
                                    outerRadius: 40,
                                    paddingAngle: 0,
                                    cornerRadius: 0,
                                    startAngle: -180,
                                    endAngle: 180,
                                    cx: 50,
                                },
                            ]}
                            height={100}
                        />
                    </div>
                </Box>
            </div>
        </LocalizationProvider>
    );
}
