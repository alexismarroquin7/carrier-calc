
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";

const features = [
  {
    id: uuid(),
    name: 'Unlimited Talk, Text, & Data',
    level: 'line',
    type: 'feature'
  },
  {
    id: uuid(),
    name: 'Disney+, Hulu, ESPN+ Bundle',
    level: 'account',
    type: 'add_on'
  },
  {
    id: uuid(),
    name: 'Travel Pass (1 day/month)',
    level: 'line',
    type: 'add_on'
  },
  {
    id: uuid(),
    name: 'Decline Protection',
    level: 'line',
    type: 'protection'
  },
  {
    id: uuid(),
    name: 'Verizon Mobile Protection',
    level: 'line',
    type: 'protection'
  },
  {
    id: uuid(),
    name: 'Verizon Multi-Mobile Protection',
    level: 'account',
    type: 'protection'
  },
]

export const plans = [
  {
    id: uuid(),
    name: 'No Plan',
    price: 0,
    features: [],
  },
  {
    id: uuid(),
    name: '5G Get More',
    price: 0,
    features: []
  },
  {
    id: uuid(),
    name: '5G Do More',
    price: 0,
    features: []

  },
  {
    id: uuid(),
    name: '5G Play More',
    price: 0,
    features: []

  },
  {
    id: uuid(),
    name: '5G Start',
    price: 0,
    features: []
  },
]

const protectionPlans = [
  {
    id: uuid(),
    name: 'No Protection',
    description: '',
    price: 0
  },
  {
    id: uuid(),
    name: 'Verizon Mobile Protection',
    description: '',
    price: 0
  },
]

const initialState = {
  autopay: true,
  features: [],
  lines: []
}

export const verizonSlice = createSlice({
  name: 'verizon',
  initialState,
  reducers: {
    addALine: function (state, { payload }) {
      let newLine = {
        id: uuid(),
        open: true,
        device: {
          type: '',
          name: 's22 Ultra 128GB BLACK'
        },
        plan: plans[0],
        phoneNumber: '4082229933',
        name: 'Mary',
        installment: {
          amount: '0',
          downpayment: '0',
          credits: '0'
        },
      };

      if(
        payload.deviceType === 'smartphone' || 
        payload.deviceType === 'tablet' ||
        payload.deviceType === 'watch'
      ){
        newLine.device.type = payload.deviceType;
      } else {
        throw Error(`deviceType must equal 'smartphone', 'tablet', or 'watch'`);
      }

      state.lines = [...state.lines, newLine];
    },

    toggleLineOpen: function (state, { payload }) {
      state.lines = state.lines.map(line => {
        
        if(line.id === payload.id){
          line.open = !line.open;
        }
        
        return line;
      })
    }
  }
})