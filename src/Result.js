import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { updateOperand, deleteOperand, changeOperator } from './redux/actions';
class Result extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
   
    render() {
        return(
            <View style={styles.result}>
                <Text style={styles.instructions}>
                   {this.props.operand}
                </Text>
                <Text style={styles.instructions1}>
                   {this.props.result}
                </Text>
            </View>
        );
    }
}

const mapState = ({operand, result}) => ({operand, result});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Result);


const styles = StyleSheet.create({
    result: { 
        width: '100%', 
        height: '20%',
        marginTop: '5%',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    instructions: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    instructions1: {
        fontSize: 35,
        textAlign: 'center',
        margin: 20,
    }
});