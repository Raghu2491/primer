import React from "react";
import {Button, Text, View} from "react-native";

export default class DetailsScreen extends React.Component {
    componentDidMount(){
        fetch('http://www.mocky.io/v2/5d0c61a53500006700b897b4')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.cars,
                }, function(){
                    console.log(this.state.dataSource)
                });

            })
            .catch((error) =>{
                console.error(error);
            });

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go Back to Home... again"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}