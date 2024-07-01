import { createSlice } from '@reduxjs/toolkit'; // creating a slice of reduce store which keep state, reducers, and actions all in one place

//setup initial state
const initialState = {
  items: [],
  total: 0,
};

// set up the slice

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = { ...action.payload }; // copy of item
      item.price = item.price || 0; // assign to default if there is no price
      state.items.push(item); // add item to the items list
      state.total += item.price; //update the total price
    },
    removeItem: (state, action) => {
      const index = action.payload; // removed item index
      const item = state.items[index]; // find the index from state

      state.total -= item.price; // decrease removed item price from state
      state.items.splice(index, 1); //Remove the item from the items array in the state using splice
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((acc, item) => acc + item.price, 0); //sum up the price of all items in the state.items list
    },
  },
});
export const { addItem, removeItem, calculateTotal } = basketSlice.actions;
export default basketSlice.reducer;
