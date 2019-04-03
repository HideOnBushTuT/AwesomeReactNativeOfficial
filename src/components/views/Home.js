import React from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => this.props.navigation.navigate('Discover')}>Home</Text>
        </View>
    }
}

export default Home;