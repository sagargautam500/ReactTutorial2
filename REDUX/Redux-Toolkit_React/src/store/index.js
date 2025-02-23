import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Counter';
import privacySlice from './Privacy';


//create store i,e configure store
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy:privacySlice.reducer,
  },
})
export default counterStore;