import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Third extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render = () => {
        return (
            <View style={{alignSelf:'center', marginTop:50}}>
                <Text style={{fontSize:36}}>Third</Text>
            </View>
        )
    }
}
