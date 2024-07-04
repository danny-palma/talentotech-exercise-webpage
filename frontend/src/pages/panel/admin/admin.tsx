import { useContext, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowsProp,
  GridSlots,
  GridToolbar,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import {
  randomArrayItem,
  randomCreatedDate,
  randomEmail,
  randomId,
  randomTraderName,
} from "@mui/x-data-grid-generator";

import { pageContext } from "../../../contexts/panelPageContext";

//import { MdPassword } from 'react-icons/md';

const roles = ["Profesor", "Alumno", "Monitor"];
const randomRole = () => {
  return randomArrayItem(roles);
};

const initialRows: GridRowsProp = [
  {
    id: randomId(),
    name: randomTraderName(),
    age: 25,
    joinDate: randomCreatedDate(),
    role: randomRole(),
    email: randomEmail(),
    pasword: randomRole(),
  },
  // ... otros registros iniciales
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer className="flex items-center">
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Adicionar Registro
      </Button>
      <GridToolbar />
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("admin");
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event,
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit },
    });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View },
    });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nombre",
      minWidth: 180,
      flex: 1,
      editable: true,
      type: "string",
    },
    {
      field: "age",
      headerName: "Edad",
      type: "number",
      minWidth: 80,
      flex: 0.5,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "joinDate",
      headerName: "Fecha",
      minWidth: 130,
      flex: 1,
      editable: true,
      type: "dateTime",
    },
    {
      field: "role",
      headerName: "Roles",
      editable: true,
      flex: 1,
      minWidth: 180,
      type: "singleSelect",
      valueOptions: ["Profesor", "Alumno", "Supervisor"],
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 130,
      editable: true,
      type: "string",
    },
    {
      field: "pasword",
      headerName: "Contraseña",
      flex: 0.5,
      minWidth: 130,
      editable: true,
      type: "boolean",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Acciones",
      cellClassName: "actions",
      flex: 0.5,
      minWidth: 130,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: "40rem",
        width: "100%",
        display: "block",
        flexDirection: "column",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
        paddingBottom: "2rem",
      }}
    >
      <h1>Administrar informacion de usuarios</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          margin: "auto",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "background.paper",
          },
        }}
        disableColumnResize
      />
    </Box>
  );
}
