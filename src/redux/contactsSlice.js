import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    isDeleting: false,
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isDeleting = false;
        state.error = false;
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isDeleting = false;
        state.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { contacts: [] },
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.contacts.findIndex(
//         contact => contact.id === action.payload
//       );
//       if (index !== -1) {
//         state.contacts.splice(index, 1);
//       }
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
