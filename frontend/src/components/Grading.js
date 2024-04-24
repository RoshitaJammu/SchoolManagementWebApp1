import React, { useState } from 'react';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText, Container } from '@mui/material';

const Grading = () => {
  const [gradingItems, setGradingItems] = useState([
    { id: 1, name: 'Assignment 1', grade: 'A' },
    { id: 2, name: 'Assignment 2', grade: 'B' },
    { id: 3, name: 'Assignment 3', grade: 'C' },
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemGrade, setNewItemGrade] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const addGradingItem = () => {
    if (newItemName && newItemGrade) {
      const newId = gradingItems.length ? gradingItems[gradingItems.length - 1].id + 1 : 1;
      setGradingItems([...gradingItems, { id: newId, name: newItemName, grade: newItemGrade }]);
      setNewItemName('');
      setNewItemGrade('');
    }
  };

  const deleteGradingItem = (id) => {
    setGradingItems(gradingItems.filter((item) => item.id !== id));
  };

  const editGradingItem = (id) => {
    const itemToEdit = gradingItems.find((item) => item.id === id);
    if (itemToEdit) {
      setNewItemName(itemToEdit.name);
      setNewItemGrade(itemToEdit.grade);
      setEditItemId(id);
    }
  };

  const updateGradingItem = () => {
    setGradingItems(
      gradingItems.map((item) =>
        item.id === editItemId ? { ...item, name: newItemName, grade: newItemGrade } : item
      )
    );
    setNewItemName('');
    setNewItemGrade('');
    setEditItemId(null);
  };

  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h4" gutterBottom color="primary">Grading Page</Typography>
        <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#f0f0f0" p={3} borderRadius={10}>
          <Typography variant="h5" gutterBottom color="secondary">Add/Edit Grading Item</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <TextField
              type="text"
              label="Item Name"
              variant="outlined"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              style={{ marginRight: '10px', width: '200px' }}
            />
            <TextField
              type="text"
              label="Grade"
              variant="outlined"
              value={newItemGrade}
              onChange={(e) => setNewItemGrade(e.target.value)}
              style={{ marginRight: '10px', width: '100px' }}
            />
            {editItemId ? (
              <Button variant="contained" color="primary" onClick={updateGradingItem} style={{ backgroundColor: '#4caf50', marginRight: '10px' }}>
                Update
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={addGradingItem} style={{ backgroundColor: '#2196f3', marginRight: '10px' }}>
                Add
              </Button>
            )}
          </Box>
          <Typography variant="h5" gutterBottom color="secondary">Grading Items</Typography>
          <List>
            {gradingItems.map((item) => (
              <ListItem key={item.id} sx={{ borderBottom: '1px solid #e0e0e0', '&:last-child': { borderBottom: 'none' } }}>
                <ListItemText primary={`${item.name} - ${item.grade}`} />
                <Button variant="outlined" color="primary" onClick={() => editGradingItem(item.id)} style={{ backgroundColor: '#2196f3', color: '#fff', marginRight: '10px' }}>
                  Edit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => deleteGradingItem(item.id)} style={{ backgroundColor: '#f44336', color: '#fff' }}>
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
          {/* Additional Button */}
          <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
            Additional Button
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Grading;
