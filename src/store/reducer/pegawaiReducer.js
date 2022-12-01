import { createSlice } from '@reduxjs/toolkit'


//KITA MENAMAKAN HALAMAN INI DENGAN INISIAL pegawaiSlice 
//DAN MEMBUAT createSlice  DISINI DENGAN MEMBUAT createSlice,DAN MEMBUAT NAMANYA DI SINI SESUAI APA YANG DIBUAT YAITU 'PEGAWAI'
//dan MEMBUAT initialState  DENGAN MEMBUAT ARRAY KOSONG
const pegawaiSlice = createSlice({
    name: 'pegawai',
    initialState: {
        pegawai: [],
    },
    reducers: {
        tambahPegawai: (state, payload) => {
            // state, adalah data initialState
            // payload, adalah data baru yg akan dimasukkan ke initialState
            state.pegawai.push(payload);
        },

        updateListPegawai: (state, { payload }) => {
            console.log(payload)
            state.pegawai = [...payload];
            // return state;
        }
    }
})
//DAN tambahPegawai dan updateListPegawai ADALAH METHOD  DARI tambahPegawai dan updateListPegawai DI ATAS
export const { tambahPegawai, updateListPegawai } = pegawaiSlice.actions

export default pegawaiSlice;