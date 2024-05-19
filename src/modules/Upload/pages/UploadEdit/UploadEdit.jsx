import React, { useEffect } from 'react'
import useStore from '../../../../store/store'
import { Box, Button, Collapse, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { useMemo } from 'react'

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import UsersActions from '../../components/UsersActions'

import s from "./UploadEdit.module.css";
import { useNavigate } from 'react-router-dom'

const UploadEdit = () => {

  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  const [loading, setLoading] = useState(true)
  const [showAlertSuccess, setShowAlertSuccess] = useState(true)
  const [showAlertError, setShowAlertError] = useState(true)

  const navigate = useNavigate();

  const { errors, users, setHeaders, setErrors, setUsers } = useStore()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  const handleNewFile = () => {
    setHeaders([])
    setErrors([])
    setUsers([])
    navigate("/upload")
  }

  const columns = useMemo(() => [
    { field: "id", headerName: "ID", maxWidth: 100 },
    {
      field: "name", headerName: "Name", flex: 1, minWidth: 200, editable: true, renderCell: (cellValues) => {
        if (cellValues.value === "") return (<div className={s.errorCell}>{cellValues.value} <span className={s.errorCell__spanValidation}>The name field has an error</span></div>)
      }
    },
    {
      field: "email", headerName: "Email", flex: 1, minWidth: 200, editable: true, renderCell: (cellValues) => {
        if (cellValues.value === "") return (<div className={s.errorCell}>{cellValues.value} <span className={s.errorCell__spanValidation}>The email field has an error</span></div>)
      }
    },
    {
      field: "age", headerName: "Age", type: "number", flex: 1, minWidth: 160, maxWidth: 160, editable: true, renderCell: (cellValues) => {
        if (cellValues.value === "") return (<div className={s.errorCell}>{cellValues.value} <span className={s["errorCell__spanValidation-age"]}>The age field has an error</span></div>)
      }
    },
    {
      field: "rol", headerName: "Rol", type: "singleSelect", valueOptions: ["admin", "user"], flex: 1, minWidth: 160, maxWidth: 160, editable: true, renderCell: (cellValues) => {
        if (cellValues.value === "") return (<div className={s.errorCell}>{cellValues.value} <span className={s.errorCell__spanValidation}>The rol field has an error</span></div>)
      }
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      maxWidth: 100,
      renderCell: (params) => (
        <UsersActions {...{ params, rowId, setRowId }} />
      ),
    },
  ], [rowId])

  return (
    <Box
      sx={{
        height: "500px",
        width: '90%',
        position: 'relative'
      }}
    >
      <Button variant='contained' sx={{ my: 2, position: 'absolute', right: 0, top: "-3.4rem" }} onClick={handleNewFile}>New File</Button>

      <Collapse in={showAlertSuccess} sx={{ my: 2 }}>
          <Alert severity="success" onClose={() => { setShowAlertSuccess(false) }}>{users.length} records uploads successfully</Alert>
      </Collapse>
      
      <Collapse in={showAlertError} sx={{ my: 2 }}>
          <Alert severity="error" onClose={() => { setShowAlertError(false) }}>The ({errors.length}) records listed below encountered errors. Please rectify these issues and retry.</Alert>
      </Collapse>


      <Typography
        variant='body3'
        component="h3"
        sx={{
          textAlign: 'left',
          my: 2
        }}
      >
        Manage Users
      </Typography>

      <DataGrid
        rows={errors}
        columns={columns}
        editMode="row"
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        loading={loading}
        processRowUpdate={params => setRowId(params.id)}
        onProcessRowUpdateError={error => { return error }}

        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        slots={{
          toolbar: GridToolbar,
        }}
      />

    </Box>
  )
}

export default UploadEdit