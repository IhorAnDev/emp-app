import { legacy_createStore as createStore } from 'redux';

// Define initial state
const initialState = {
    data: [
        {name: 'Fedor Pilikov', salary: 1000, increase: true, promotion: false, id: 1},
        {name: 'Semen Grud', salary: 800, increase: false, promotion: true, id: 2},
        {name: 'Ivan Strent', salary: 700, increase: false, promotion: false, id: 3},
        {name: 'Ihor Antonov', salary: 1700, increase: true, promotion: true, id: 4},
        {name: 'Alexandra Pipetkova', salary: 1200, increase: false, promotion: false, id: 5},
    ],
    searchInput: '',
    filter: ''
};


// Define actions
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

// Define reducers
function dataReducer(state = initialState.data, action) {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return [...state, action.payload];
        case DELETE_EMPLOYEE:
            return state.filter(person => person.id !== action.payload);
        default:
            return state;
    }
}

function searchInputReducer(state = initialState.searchInput, action) {
    switch (action.type) {
        case 'SET_SEARCH_INPUT':
            return action.payload;
        default:
            return state;
    }
}

function filterReducer(state = initialState.filter, action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
        default:
            return state;
    }
}

// Combine reducers
const rootReducer = combineReducers({
    data: dataReducer,
    searchInput: searchInputReducer,
    filter: filterReducer
});

// Create store
const store = createStore(rootReducer);
