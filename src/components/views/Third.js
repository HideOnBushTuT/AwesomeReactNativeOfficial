import React from 'react';
import { View, Text } from 'react-native';

class Third extends React.Component {
    static navigationOptions = {
        title: 'Third'
    };

    render() {
        return <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => this.props.navigation.goBack()}>Third</Text>
        </View>
    }
}

export default Third;