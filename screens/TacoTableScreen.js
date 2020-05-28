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
} from "native-base";
import { StyleSheet } from "react-native";

let helperArray = require("../data/tacoTable.json");

export default class TacoTable extends Component {
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
        i.description.toLowerCase().includes(text.toLowerCase())
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
                this.props.navigation.navigate("TacoFoodDetail", {
                  item: item,
                })
              }
            >
              <Body>
                <Text>{item.description}</Text>
                <Text note>{item.category}</Text>
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
