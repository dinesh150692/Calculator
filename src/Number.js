import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import {  updateOperand } from './redux/actions';
class Number extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return(
            <TouchableHighlight
                style={styles.numberContainer}
                onPress={() => {(this.props.updateOperand(this.props.children))}}
                underlayColor={'grey'}
            >
                <Text style={styles.welcome}>
                        {this.props.children}
                    </Text>
            </TouchableHighlight>
        
         );
    }
}
const mapState = ({}) => ({});
const mapDispatch = {updateOperand};

export default connect(mapState, mapDispatch)(Number);


const styles = StyleSheet.create({
    numberContainer: {
        width: '30%', 
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'silver',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    }
});