import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Fees = () => {
  const [feesList, setFeesList] = useState([
    { id: 1, course: 'SSC', amount: '10000' },
    { id: 2, course: 'IIT', amount: '20000' },
    { id: 3, course: 'CBSE', amount: '20000' },
  ]);
  const [course, setCourse] = useState('SSC');
  const [newAmount, setNewAmount] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const addFee = () => {
    if (newAmount) {
      const newId = feesList.length ? feesList[feesList.length - 1].id + 1 : 1;
      setFeesList([...feesList, { id: newId, course: course, amount: newAmount }]);
      setNewAmount('');
    }
  };

  const deleteFee = (id) => {
    setFeesList(feesList.filter((fee) => fee.id !== id));
  };

  const editFee = (id) => {
    const feeToEdit = feesList.find((fee) => fee.id === id);
    if (feeToEdit) {
      setCourse(feeToEdit.course);
      setNewAmount(feeToEdit.amount);
      setEditItemId(id);
    }
  };

  const updateFee = () => {
    setFeesList(
      feesList.map((fee) =>
        fee.id === editItemId ? { ...fee, course: course, amount: newAmount } : fee
      )
    );
    setCourse('SSC');
    setNewAmount('');
    setEditItemId(null);
  };

  return (
    <Box my={4}>
      <Typography variant="h4" align="center" gutterBottom color="primary">Fees</Typography>
      <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#f0f0f0" p={3} borderRadius={10}>
        <Typography variant="h5" gutterBottom color="secondary">Add Fee Details </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <TextField
            type="text"
            label="Course"
            variant="outlined"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{ marginRight: '10px' }}
            color="secondary"
          />
          <TextField
            type="text"
            label="Amount"
            variant="outlined"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            style={{ marginRight: '10px' }}
            color="secondary"
          />
          {editItemId ? (
            <Button variant="contained" color="primary" onClick={updateFee} style={{ marginRight: '10px', backgroundColor: '#4caf50' }}>
              Update
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={addFee} style={{ marginRight: '10px', backgroundColor: '#2196f3' }}>
              Add
            </Button>
          )}
        </Box>
        <TableContainer component={Paper} className="table-container" elevation={3} style={{ marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom color="secondary">Fees List</Typography>
          <Table className="styled-table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feesList.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.id}</TableCell>
                  <TableCell>{fee.course}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="primary" onClick={() => editFee(fee.id)} style={{ backgroundColor: '#2196f3', color: '#fff', marginRight: '10px' }}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => deleteFee(fee.id)} style={{ backgroundColor: '#f44336', color: '#fff' }}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Back and Home Buttons */}
        <Box mt={4} display="flex" justifyContent="space-between" width="100%">
          <Button component={Link} to="/" variant="contained" color="secondary">
            Back
          </Button>
          <Button component={Link} to="/home" variant="contained" color="primary">
            Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Fees;
