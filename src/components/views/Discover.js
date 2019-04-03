import React from 'react';
import { View, Text } from 'react-native';

class Discover extends React.Component {
    static navigationOptions = {
        title: 'Discover'
    };

    render() {
        return <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => this.props.navigation.navigate('Mine')}>Discover</Text>
        </View>
    }
}

export default Discover;