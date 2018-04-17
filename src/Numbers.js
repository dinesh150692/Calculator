import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { updateOperand, deleteOperand, changeOperator } from './redux/actions';
import Number from './Number';
class Numbers extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '=']
        }
    }
   
    render() {
        return(
            <View style={styles.numbersContainer}>
               {this.state.numbers.map(
                   (item) => <Number key={item.toString()}>{item}</Number>
               )}
            </View>
        );
    }
}

const mapState = ({operator, operand1, operand2}) => ({operator, operand1, operand2});
const mapDispatch = {updateOperand, deleteOperand, changeOperator};

export default connect(mapState, mapDispatch)(Numbers);


const styles = StyleSheet.create({
    numbersContainer: {
        width: '90%', 
        height: '80%',
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
});