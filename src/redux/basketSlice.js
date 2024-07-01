import { createSlice } from '@reduxjs/toolkit'; // creating a slice of reduce store which keep state, reducers, and actions all in one place

//setup initial state
const initialState = {
  items: [],
  total: 0,
};

// generate item key
const generateItemKey = (item) =>
  `${item.id}-${item.name}-${item.description}-${item.price}`;

// set up the slice

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = { ...action.payload }; // copy of item
      item.price = item.price || 0; // assign to default if there is no price
      const itemKey = generateItemKey(item); // create item key
      const existingItem = state.items.find(
        (i) => generateItemKey(i) === itemKey // existing item key
      );
      if (existingItem) {
        // if item is already on the list
        existingItem.quantity += 1; // increase the quantity
        existingItem.totalPrice += item.price; // increase the item total price by adding existing item price
      } else {
        item.quantity = 1;
        item.totalPrice = item.price;
        state.items.push(item); // add item to the items list
      }
      state.total += item.price; //update the total price
    },
    removeItem: (state, action) => {
      const index = action.payload; // removed item index
      const item = state.items[index]; // find the index from state
      if (item.quantity > 1) {
        // if item quantity is more than 1
        item.quantity -= 1; // decrease quantity by 1
        item.totalPrice -= item.price; //decrease price by one item price
        state.total -= item.price; //decrease total price by 1 item price
      } else {
        state.total -= item.price; // decrease removed item price from state
        state.items.splice(index, 1); //Remove the item from the items array in the state using splice
      }
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((acc, item) => acc + item.price, 0); //sum up the price of all items in the state.items list
    },
  },
});
export const { addItem, removeItem, calculateTotal } = basketSlice.actions;
export default basketSlice.reducer;
