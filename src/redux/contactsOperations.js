import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a1a67142ecd7d7f0a6de69.mockapi.io/';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchTodos',
//   async () => {
//     const response = await contacts.get('/fakeApi/todos');
//     return response.todos;
//   }
// );
