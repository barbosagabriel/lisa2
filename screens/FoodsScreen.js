import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Body,
  Icon,
  Text,
  ListItem,
  Item,
  Input,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";

let helperArray = require("../data/foodList.json");

export default class FoodsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFoods: helperArray,
      foodsFiltered: helperArray,
    };
  }

  componentDidMount() {}

  searchFood = (text) => {
    this.setState({
      foodsFiltered: this.state.allFoods.filter((i) =>
        i.name.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Pesquisar..."
              onChangeText={(text) => this.searchFood(text)}
            />
          </Item>
        </Header>
        <Content>
          {this.state.foodsFiltered.map((item) => (
            <ListItem
              key={item.id}
              button
              onPress={() =>
                this.props.navigation.navigate("FoodDetail", {
                  item: item,
                })
              }
            >
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.group}</Text>
              </Body>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
