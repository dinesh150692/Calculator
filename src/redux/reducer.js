import { UPDATE_OPERAND, CHANGE_OPERATOR, DELETE_OPERAND, execute } from './actions';

/////////////////REDUCER/////////////////////
//initiate your starting state
let initial = {
   operand: '',
   result: ''
};

const reducer = (state = initial, action) => {
    switch (action.type) {
        case UPDATE_OPERAND:
            switch(action.value){
                case '=':
                    return Object.assign({}, state, {operand: state.result, result: ''});
                default:
                    let operand = state.operand + action.value;
                    let result = execute(operand);
                    return Object.assign({}, state, {operand: operand, result: result});
            }
            return state;
        case CHANGE_OPERATOR: 
            let last_char = state.operand.substr(-1);
            let operand1 = state.operand + action.value;
            if( (last_char === '/' || last_char === '*' ) && action.value === '-'){
                return Object.assign({}, state, {operand: state.operand + action.value});
            }else if(['-', '*', '/', '+'].indexOf(last_char) > -1){
                return Object.assign({}, state, {operand: state.operand.slice(0, -1) + action.value, result: ''});
            }else{
                return Object.assign({}, state, {operand: operand1});
            }
            return state;
        case DELETE_OPERAND:
            let operand = state.operand.slice(0, -1);
            let last_char1 = operand.substr(-1);
            if(['-', '*', '/', '+'].indexOf(last_char1) > -1){
                return Object.assign({}, state, {operand: operand, result: ''}); 
            }else{
                let result = execute(operand);
                return Object.assign({}, state, {operand: operand, result: result});
            }
        default:
            return state;
    }
};

export default reducer;


