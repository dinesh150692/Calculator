/////////////////CONSTANTS/////////////////////
export const CHANGE_OPERATOR = "CHANGE_OPERATOR";
export const UPDATE_OPERAND = "UPDATE_OPERAND";
export const DELETE_OPERAND = "DELETE_OPERAND";


/////////////////ACTIONS//////////////
const updateOperandAction = (value) => ({type: UPDATE_OPERAND, value});
const changeOperatorAction = (value) => ({type: CHANGE_OPERATOR, value});
const deleteOperandAction = (value) => ({type: DELETE_OPERAND, value});


/////////////// ACTION DISPATCHER FUNCTIONS///////////////////
export const updateOperand = (value) => dispatch => {
    dispatch(updateOperandAction(value))
};

export const deleteOperand = (value) => dispatch => {
    dispatch(deleteOperandAction(value))
};

export const changeOperator = (value) => dispatch => {
    dispatch(changeOperatorAction(value))
};

/////////////// EVALUATE FUNCTION //////////
export const execute = (expression) => {
    if(expression.length === 0){
        return '';
    }else if(['-', '*', '/', '+'].indexOf(expression) === expression.length){
        console.log(true);
        return '';
    }else{
        let result = (new Function('return ' + expression)()).toString();
        console.log();
        let result1 = '';
        if(result === 'Infinity'){
            result1 = '∞';
        }else if(result === expression || ['-', '*', '/', '+'].indexOf(expression) === expression.length){
            result1 = '';
        }else{
            if(result.indexOf('.') > -1){
                result1 = Number(result).toFixed(10);
            }else{
                result1 = result;
            }
        }
        return result1;
    }
}