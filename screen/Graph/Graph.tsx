import { Dimensions, StyleSheet, Text, View } from "react-native"
import { LineChart } from "react-native-chart-kit";

const GraphScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>BTC/USD</Text>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: [
                  5678.12,
                  5678.32,
                  5678.42,
                  5677.42,
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width - 10}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,

          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  chart: {
    flex: 1
  }
});

export { GraphScreen }