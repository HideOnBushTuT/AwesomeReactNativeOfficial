import React from 'react';
import { View, Text } from 'react-native';

class Second extends React.Component {
    static navigationOptions = {
        title: 'Second'
    };

    render() {
        return <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => this.props.navigation.push('Third')}>Second</Text>
        </View>
    }
}

export default Second;