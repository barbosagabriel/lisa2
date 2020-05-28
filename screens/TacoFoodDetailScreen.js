import React, { Component } from "react";
import { Text } from "native-base";
import { ScrollView, Dimensions, View, StyleSheet } from "react-native";

import FactBox from "../components/FactBox";

export default class FoodDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.route.params.item,
      value: 12,
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: this.state.item.description });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.nutritionalFactsContainer}>
          <Text style={styles.nutritionalFactsTitle}>Dados Nutricionais</Text>
          <Text style={styles.measurementLabel}>
            {this.state.item.base_qty}
            {this.state.item.base_unit} de
          </Text>
          <Text style={styles.measurementLabel}>
            {this.state.item.description}
          </Text>
        </View>

        <View style={styles.nutritionalFacts}>
          <FactBox
            label={"Calorias"}
            value={this.state.item.attributes.energy.kcal}
            unit={"Kcal"}
          />
          <FactBox
            label={"Carboidratos"}
            value={this.state.item.attributes.carbohydrate.qty}
            unit={this.state.item.attributes.carbohydrate.unit}
          />
          <FactBox
            label={"Proteínas"}
            value={this.state.item.attributes.protein.qty}
            unit={this.state.item.attributes.protein.unit}
          />
          <FactBox
            label={"Fibras"}
            value={this.state.item.attributes.fiber.qty}
            unit={this.state.item.attributes.fiber.unit}
          />
          <FactBox
            label={"Lipídeos"}
            value={this.state.item.attributes.lipid.qty}
            unit={this.state.item.attributes.lipid.unit}
          />
          <FactBox
            label={"Colesterol"}
            value={this.state.item.attributes.cholesterol.qty}
            unit={this.state.item.attributes.cholesterol.unit}
          />
          <FactBox
            label={"Sódio"}
            value={this.state.item.attributes.sodium.qty}
            unit={this.state.item.attributes.sodium.unit}
          />
          <FactBox
            label={"Cálcio"}
            value={this.state.item.attributes.calcium.qty}
            unit={this.state.item.attributes.calcium.unit}
          />
          <FactBox
            label={"Potássio"}
            value={this.state.item.attributes.potassium.qty}
            unit={this.state.item.attributes.potassium.unit}
          />
          <FactBox
            label={"Ferro"}
            value={this.state.item.attributes.iron.qty}
            unit={this.state.item.attributes.iron.unit}
          />
          <FactBox
            label={"Magnésio"}
            value={this.state.item.attributes.magnesium.qty}
            unit={this.state.item.attributes.magnesium.unit}
          />
          {/* <FactBox
            label={"Vitamina C"}
            value={this.state.item.vitaminC.qty}
            unit={this.state.item.vitaminC.unit}
          /> */}
          <FactBox
            label={"Manganês"}
            value={this.state.item.attributes.manganese.qty}
            unit={this.state.item.attributes.manganese.unit}
          />
          <FactBox
            label={"Fósforo"}
            value={this.state.item.attributes.phosphorus.qty}
            unit={this.state.item.attributes.phosphorus.unit}
          />
          <FactBox
            label={"Cobre"}
            value={this.state.item.attributes.copper.qty}
            unit={this.state.item.attributes.copper.unit}
          />
          <FactBox
            label={"Zinco"}
            value={this.state.item.attributes.zinc.qty}
            unit={this.state.item.attributes.zinc.unit}
          />
          <FactBox
            label={"Retinol"}
            value={this.state.item.attributes.retinol.qty}
            unit={this.state.item.attributes.retinol.unit}
          />
          <FactBox
            label={"Cinzas"}
            value={this.state.item.attributes.ashes.qty}
            unit={this.state.item.attributes.ashes.unit}
          />
          <FactBox
            label={"Tiamina"}
            value={this.state.item.attributes.thiamine.qty}
            unit={this.state.item.attributes.thiamine.unit}
          />
          <FactBox
            label={"Riboflavina"}
            value={this.state.item.attributes.riboflavin.qty}
            unit={this.state.item.attributes.riboflavin.unit}
          />
          <FactBox
            label={"Priodoxina"}
            value={this.state.item.attributes.pyridoxine.qty}
            unit={this.state.item.attributes.pyridoxine.unit}
          />
          <FactBox
            label={"Niacina"}
            value={this.state.item.attributes.niacin.qty}
            unit={this.state.item.attributes.niacin.unit}
          />
        </View>

        <View style={styles.legend}>
          <Text style={styles.legendItem}>TR: Traços </Text>
          <Text style={styles.legendItem}>NA: Não se aplica </Text>
          <Text style={styles.legendItem}>ND: Não disponível</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  nutritionalFactsContainer: {
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
    flex: 1,
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
  legend: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  legendItem: {
    fontSize: 14,
    color: "#999999",
  },
});
