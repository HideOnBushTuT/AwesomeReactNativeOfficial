import React from 'react';
import { View, Text } from 'react-native';

class Mine extends React.Component {
    static navigationOptions = {
        title: 'Mine'
    };

    render() {
        return <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => this.props.navigation.goBack()}>Mine</Text>
        </View>
    }
}

export default Mine;