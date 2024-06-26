import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';

const UsersActions = ({ params, rowId, setRowId }) => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    console.log(params.row);
    // const { role, active, _id } = params.row;
    // const result = await updateStatus({ role, active }, _id, dispatch);
    // if (result) {
    //   setSuccess(true);
    //   setRowId(null);
    // }
    setTimeout(() => {
      setRowId(null);
      
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1000)

    }, 1000)
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative',
      }}
    >
      {success ? (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color="primary"
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default UsersActions;