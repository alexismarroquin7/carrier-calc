import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit"

export const carriers = {
  vzw: {
    id: uuid(),
    title: 'Verizon',
    name: 'vzw'
  },
  att: {
    id: uuid(),
    title: 'AT&T',
    name: 'att'
  },
  tmo: {
    id: uuid(),
    title: 'T-Mobile',
    name: 'tmo'
  },
  other: {
    id: uuid(),
    title: '',
    name: 'other'
  }
}

class Line {
  constructor(type){

    const validTypes = [
      'smartphone',
      'tablet',
      'watch',
      'hotspot'
    ];

    if(!validTypes.includes(type)){
      throw Error(`unkown type: ${type}`);
    }

    this.id = uuid();
    this.name = '';
    this.phoneNumber = '';
    this.type = type;
    this.plan = {
      name: '',
      title: '',
      dueMonthly: 0
    }
    this.protection = {
      name: '',
      title: '',
      dueToday: 0,
      dueMonthly: 0
    }
    this.device = {
      name: '',
      price: 0,
      downpayment: 0,
      tradeInCredit: 0,
      dueToday: 0,
      dueMonthly: 0,
    };
  }
}

class Quote {
  constructor(carrier){
    if(!carriers[carrier]) throw Error(`unkown carrier`);

    this.id = uuid();
    this.name = 'Untitled';
    this.carrier = carriers[carrier];
    this.account = {
      plan: {
        name: '',
        title: '',
        dueMonthly: 0
      },
      protection: {
        name: '',
        title: '',
        dueMonthly: 0
      }
    };
    this.lines = [];
  }

}

const initialState = {
  list: [],
  selected: {
    quote: {
      id: null
    }
  }
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    create: (state, {payload}) => {
      const newQuote = new Quote(
        payload.carrier
      );
      state.list = [...state.list, newQuote];
      state.selected.quote.id = newQuote.id;
    },
    selectQuoteById: (state, {payload}) => {
      state.selected.quote.id = state.list.filter(item => item.id === payload)[0].id;
    },
    addALine: (state, {payload}) => {
      state.list = state.list.map(item => {
        if(item.id === state.selected.quote.id){
          item.lines = [
            ...item.lines,
            new Line(payload)
          ]
        }
        return item;
      })
    },
    updateLineById: (state, {payload}) => {
      const {
        lineId,
        changes
      } = payload;
      state.list = state.list.map(item => {
        if(item.id === state.selected.quote.id){
          item.lines = item.lines.map(line => {
            if(line.id === lineId){
              line = {...line, ...changes};
            }
            
            return line;
          })
        }
        return item;
      })
    },
    updateSelectedQuote: (state, {payload}) => {
      state.list = state.list.map(item => {
        if(item.id === state.selected.quote.id){
          item = {
            ...item,
            ...payload
          }
        }
        return item;
      })
    },
    duplicateSelectedQuote: (state) => {
      const [copy] = state.list.filter(item => item.id === state.selected.quote.id);
      const copyToUse = {
        ...copy,
        id: uuid(),
        name: `${copy.name} - Copy`
      }
      state.list = [...state.list, copyToUse];
      state.selected.quote.id = copyToUse.id;
    },
    deleteSelectedQuote: (state) => {
      const filteredQuoteList = state.list.filter(item => item.id !== state.selected.quote.id);

      if(filteredQuoteList.length > 0){
        state.selected.quote.id = filteredQuoteList[0].id;
      }

      state.list = filteredQuoteList;


    },
    deleteLineFromSelectedQuote: (state, {payload}) => {
      state.list = state.list.map(item => {
        if(item.id === state.selected.quote.id){
          item.lines = item.lines.filter(line => line.id !== payload.lineId);
        }
        return item;
      })
    }
  }
});