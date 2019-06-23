import {PureComponent} from "react";
import {Button, Text, View, Image} from "react-native";
import React from "react";

export default class FourthScreen extends PureComponent {

    state = {
        image : '',
    }

    componentDidMount(){
        try {
            console.log(this.props.navigation.state.params.car.image);
            this.setState({image : this.props.navigation.state.params.car.image})
        }catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Image source = {{uri:this.state.image}}
                               style = {{ width: '100%', height: 200 }}/>
                <Button
                    title="Go to FifthScreen"
                    onPress={() => this.props.navigation.navigate('FifthScreen')}
                />
            </View>
        );
    }
}