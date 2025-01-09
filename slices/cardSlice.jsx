import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      cvv: "696",
      expiryDate: "22/54",
      id: "49461516555111",
      name: "Karthick",
      number: "23369875451",
    },
    {
      cvv: "649",
      expiryDate: "12/25",
      id: "1736412808465",
      name: "ravi",
      number: "586947583694",
    },
    {
      cvv: "456",
      expiryDate: "08/32",
      id: "173641598465",
      name: "rohit",
      number: "156324526985",
    },
    {
      cvv: "859",
      expiryDate: "22/45",
      id: "1736634808465",
      name: "jagan",
      number: "100236691253458",
    },
  ],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    updateCard: (state, action) => {
      const updatedCard = action.payload; 
      const index = state.cards.findIndex((card) => card.id === updatedCard.id);
      if (index !== -1) {
        state.cards[index] = { ...state.cards[index], ...updatedCard }; 
      }
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, updateCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
