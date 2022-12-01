import { configureStore } from "@reduxjs/toolkit";
import pegawaiSlice from "./reducer/pegawaiReducer";


//NAMA DARI HALAMAN INI ADALAH STORE ,DAN DISINI MEMBUAT configureStore ,DAN DINAMAKAN REDUCER:DARI YANG NAMANYA PEGAWAI :DARI FILE ATAU HALAMAN pegawaiReducer.js,
//DAN DISINI DIBUAT pegawaiSlice dari function halaman  pegawaiReducer yaitu bernama pegawaiSlice
const store = configureStore({
    reducer: {
        pegawai: pegawaiSlice.reducer,

    },
});

// DAN DI SINI KITA MEMBUAT EXPORT DEFAULT YAITU STORE
export default store;

//INI MENCOSOLE DARI FUNCTION store di atas
store.subscribe(() => console.log(store.getState()))

