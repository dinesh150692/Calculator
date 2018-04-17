import React, {Component} from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { changeOperator, deleteOperand } from './redux/actions';
class Operator extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    operatorClick = (item) => {
        this.props.changeOperator(item);
    }

    render() {
        return(
            <View style={styles.operatorsContainer}>
                <TouchableHighlight
                    style={styles.operatorContainer}
                    onPress={() => this.props.deleteOperand('C')}
                    underlayColor={'#bababa'}
                >
                    <Text style={styles.welcome}>
                        C
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.operatorContainer}
                    onPress={() => this.operatorClick('/')}
                    underlayColor={'#bababa'}
                >
                    <Text style={styles.welcome}>
                        /
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.operatorContainer}
                    onPress={() => this.operatorClick('*')}
                    underlayColor={'#bababa'}
                >
                    <Text style={styles.welcome}>
                        *
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.operatorContainer}
                    onPress={() => this.operatorClick('+')}
                    underlayColor={'#bababa'}
                >
                    <Text style={styles.welcome}>
                        +
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.operatorContainer}
                    onPress={() => this.operatorClick('-')}
                    underlayColor={'#bababa'}
                >
                    <Text style={styles.welcome}>
                        -
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapState = ({operand}) => ({operand});
const mapDispatch = {changeOperator, deleteOperand};

export default connect(mapState, mapDispatch)(Operator);


const styles = StyleSheet.create({
    operatorsContainer: {
        width: '25%', 
        height: '100%',
        marginLeft: '-10%',
        flexDirection: 'column',
        backgroundColor: '#808080',
    },
    operatorContainer: {
        width: '90%', 
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      color: '#ffffff'
    }
});