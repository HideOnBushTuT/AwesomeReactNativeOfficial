import React from 'react';
import { View, Text } from 'react-native';

class First extends React.Component {
    static navigationOptions = {
        title: 'First'
    };

    render() {
        return <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => this.props.navigation.navigate('Second')}>First</Text>
        </View>
    }
}

export default First;