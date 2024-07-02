import { TextField, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import dayjs from "dayjs";
import { Accordion } from "react-bootstrap";

import DateCalendart from "../../../../../components/calendar-mui";
import { Session } from "../../../../../components/session-card";
import { UserInformation } from "../../../../../contexts/user-info";

function SessionSelector() {
  return (
    <>
      <h5>
        <strong>Sesiones: </strong>
      </h5>
      <div className="flex items-center justify-center gap-4 max-md:flex-col">
        <div
          className="absolute start-0 top-0 z-10 hidden h-full w-full items-center bg-gray-950 bg-opacity-40 md:static md:block md:h-auto md:w-auto md:bg-opacity-0"
          id="background-datecalendar"
          onClick={() => {
            document
              .getElementById("background-datecalendar")
              ?.classList.toggle("hidden");
            document
              .getElementById("background-datecalendar")
              ?.classList.toggle("flex");
          }}
        >
          <DateCalendart
            className="bg-body relative z-20"
            id="date-calendar"
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          />
        </div>
        <div className="block flex-1 md:hidden">
          <TextField
            label="Fecha"
            inputProps={{
              readOnly: true,
            }}
            value={dayjs("12/02/2003").format("DD/MM/YYYY")}
            onClick={() => {
              document
                .getElementById("background-datecalendar")
                ?.classList.toggle("hidden");
              document
                .getElementById("background-datecalendar")
                ?.classList.toggle("flex");
            }}
          />
        </div>
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
                startAngle: 180,
                endAngle: -180,
                cx: 55,
              },
            ]}
            height={100}
            width={129}
          />
        </div>
      </div>
      <Accordion className="d-flex flex-column gap-5">
        <Session session={UserInformation.bootcamps[0].CoursesInfo[0]} />
      </Accordion>
    </>
  );
}

export default SessionSelector;
