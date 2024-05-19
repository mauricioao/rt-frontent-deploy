import React, { useRef, useState } from 'react'
import { Alert, Box, Button, Container, Typography, Zoom } from '@mui/material'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import Papa from 'papaparse'
import { useNavigate } from 'react-router-dom';
import { uploadData } from '../../services/upload-service';
import useStore from '../../../../store/store';
import LoadingButton from '@mui/lab/LoadingButton';
// import s from "./UploadCharge.module.css";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadCharge = () => {

  const [localFile, setLocalFile] = useState(null)
  const [showButtonGroup, setShowButtonGroup] = useState(false)
  const [error, setError] = useState({
    flag: false,
    message: ""
  })
  const [jsonCSV, setJsonCSV] = useState({})
  const [loadingUpload, setLoadingUpload] = useState(false)
  const [loadingSend, setLoadingSend] = useState(false)

  const inputFile = useRef("");
  const navigate = useNavigate();
  const { setHeaders, setUsers, setErrors } = useStore()

  const handleUpload = (e) => {
    setLoadingUpload(true)
    if (e.target.files[0].name.endsWith('.csv')) {
      Papa.parse(e.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const { uploated, errors } = handleData(results.data);
          setHeaders(results.meta.fields);
          setUsers(uploated);
          setErrors(errors);
          setJsonCSV(results.data)
        }
      })
      setLocalFile(e.target.files[0])
      setShowButtonGroup(true)
      setError({
        flag: false,
        message: ""
      })
      setTimeout(() => {
        setLoadingUpload(false)
      }, 1000)
      return
    }
    setError({
      flag: true,
      message: "Only .csv files are allowed"
    })
    setTimeout(() => {
      setLoadingUpload(false)
    }, 1000)
  }

  const handleClear = () => {
    setLocalFile(null)
    setShowButtonGroup(false)
    setError({
      flag: false,
      message: ""
    })
    inputFile.current.value = ""
  }

  const handleSendFile = async () => {
    setLoadingSend(true)
    const res = await uploadData(jsonCSV)
    if (res.ok) {
      setTimeout(() => {
        setLoadingSend(false)
      }, 1000)
      navigate('/upload/edit')
      return
    }
    setError({
      flag: true,
      message: res.message
    })
    setTimeout(() => {
      setLoadingSend(false)
    }, 1000)
  }

  const handleData = (data) => {
    const withEmptyStrings = data.filter(obj => Object.values(obj).some(value => value === ''));
    const withoutEmptyStrings = data.filter(obj => !Object.values(obj).some(value => value === ''));
    return {
      uploated: withoutEmptyStrings,
      errors: withEmptyStrings
    }
  }

  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 2, justifyContent: "center", alignItems: "center", height: "100dvh" }}>
      <Typography variant="h4" component={"h1"}>{localFile ? `File name: ${localFile.name}` : "No file selected"}</Typography>

      <Box sx={{ display: "flex", gap: 1 }}>

        <LoadingButton
          component="label"
          variant="contained"
          tabIndex={-1}
          loading={loadingUpload}
          loadingPosition="start"
          startIcon={<CloudUploadIcon />}
          sx={{ with: "100%" }}
        >
          Upload file
          <VisuallyHiddenInput ref={inputFile} type="file" onChange={handleUpload} accept=".csv" />
        </LoadingButton>

        {
          showButtonGroup && (
            <>
              <Zoom in={showButtonGroup}>
                <Button variant="outlined" color='error' startIcon={<DeleteIcon />} onClick={() => { handleClear() }}>
                  Delete
                </Button>
              </Zoom>
              <Zoom in={showButtonGroup} color='secondary' style={{ transitionDelay: showButtonGroup ? '500ms' : '0ms' }}>
                <LoadingButton variant="contained" loading={loadingSend}
                  loadingPosition="end" endIcon={<SendIcon />} onClick={handleSendFile}>
                  Send
                </LoadingButton>
              </Zoom>
            </>
          )}

      </Box>
      <Zoom in={error.flag}>
        <Alert severity="error">{error.message}</Alert>
      </Zoom>

    </Container>
  )
}

export default UploadCharge