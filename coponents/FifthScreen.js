import React, { PureComponent } from "react";
import {Button, Text, View, FlatList, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import {saveData} from "../store/actions/index";

class FifthScreen extends PureComponent {

    state = {
        isLoading: false,
        dataSource: null,
    }

    _renderSeparator = () => (
        <View
            style={{
                backgroundColor: '#A9A9A9',
                width: '100%',
                height: 1,
            }}
        />
    )

    _renderFooter = () => (
        <View
            style={{
                backgroundColor: '#A9A9A9',
                width: '100%',
                height: 1,
            }}
        />
    )

    _goToFourthComponent = (item) => {
        this.props.navigation.push('FourthScreen',{car : item})
    }

    _renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this._goToFourthComponent(item)
                }}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        color: '#006400',
                        fontWeight: 'bold',}}>
                    {item.make}
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => this._renderItem({ item })}
                    ItemSeparatorComponent={this._renderSeparator}
                    ListFooterComponent={this._renderFooter}
                    data={this.props.item}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.cars.get('data')
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect( mapStateToProps, mapDispatchToProps) (FifthScreen);