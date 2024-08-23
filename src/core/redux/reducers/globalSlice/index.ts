import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
// import { RootState } from '../..';

type IAccounts = {
  wallets?: [];
  phrase?: string;
};

interface IGlobalSlice {
  accounts: IAccounts[];
  password?: string;
  current: {
    accountIndex?: number;
    walletIndex?: number;
    network?: string;
  };
}

const initialState: IGlobalSlice = {
  accounts: [],
  password: "",
  current: {
    accountIndex: 0,
    walletIndex: 0,
    network: "",
  },
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    createPasswordAction: (state, action) => {
      state.password = action.payload;
    },
    createAccountAction: (state, action) => {
      state.accounts = [...state.accounts, action.payload];
    },
    createFreshAccountNetworkWallet: (state, action) => {
      state.accounts = [...state.accounts, action.payload];
    },
    setCurrentAccountStatus: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const {
  createPasswordAction,
  createAccountAction,
  createFreshAccountNetworkWallet,
  setCurrentAccountStatus
} = globalSlice.actions;
export const globalSliceSelector = (state: RootState) => state.globalSlice;
export default globalSlice.reducer;
