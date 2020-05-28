import React, { Component } from "react";
import { Container, Text, List } from "native-base";
import { Dimensions, View, StyleSheet } from "react-native";

import FactBox from "../components/FactBox";

let helperArray = require("../data/foodList.json");

export default class FoodDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.route.params.item,
      replacementList: helperArray.filter(
        (i) =>
          i.group.toLowerCase() ==
            this.props.route.params.item.group.toLowerCase() &&
          i.name.toLowerCase() !=
            this.props.route.params.item.name.toLowerCase()
      ),
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: this.state.item.name });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nutritionalFactsTitle}>Dados Nutricionais</Text>
        <Text style={styles.measurementLabel}>
          {this.state.item.measurement} ({this.state.item.bulk}g) de
        </Text>
        <Text style={styles.measurementLabel}>{this.state.item.name}</Text>

        <View style={styles.nutritionalFacts}>
          <FactBox
            label={"Calorias"}
            value={this.state.item.kilocalorie}
            unit={"Kcal"}
          />
          <FactBox
            label={"Carboidratos"}
            value={this.state.item.carbohydrates}
            unit={"g"}
          />
          <FactBox
            label={"Proteínas"}
            value={this.state.item.protein}
            unit={"g"}
          />
          <FactBox
            label={"Carga Glicêmica"}
            value={this.state.item.glicemicLoad}
            unit={""}
          />
          <FactBox label={"Fibras"} value={this.state.item.fibers} unit={"g"} />
          <FactBox
            label={"Lipídeos"}
            value={this.state.item.lipids}
            unit={"g"}
          />
        </View>

        <Text style={styles.replacementOptionsTitle}>
          Opções de substituição:
        </Text>

        <Container style={styles.replacementListContainer}>
          <List
            style={styles.replacementList}
            dataArray={this.state.replacementList}
            renderRow={(item) => (
              <View key={item.id} style={styles.replacementListRow}>
                <Text style={styles.replacementListItemName}>{item.name}</Text>
                <Text style={styles.replacementListItemBulk}>
                  {/* {item.measurement}  */}
                  {item.bulk}g
                </Text>
              </View>
            )}
          ></List>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nutritionalFactsTitle: {
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 5,
  },
  measurementLabel: {
    fontSize: 14,
    color: "#999999",
  },
  nutritionalFacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 10,
  },
  item: {
    width: Dimensions.get("window").width * 0.3333,
    height: 100,
    borderWidth: 0.4,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  itemValue: {},
  itemLabel: {
    paddingTop: 6,
    fontSize: 12,
  },
  replacementListContainer: {
    width: "100%",
  },
  replacementOptionsTitle: {
    fontWeight: "bold",
    padding: 10,
  },
  replacementList: {},
  replacementListRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 0,
    height: 45,
    borderBottomColor: "lightgray",
    borderBottomWidth: 0.4,
  },
  replacementListItemName: {
    fontSize: 14,
  },
  replacementListItemBulk: {
    fontSize: 13,
    color: "#999999",
  },
});
