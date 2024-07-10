import { StyleSheet, Text, View } from "react-native"
import { CardProps } from "../../screen/Home/Home"

interface ICard {
  data: CardProps
}

const Card = ({ data }: ICard) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, color: "#ffffff" }}>
          {data.s}
        </Text>
        <Text style={{ fontSize: 20, color: "#ffffff" }}>{data.p}</Text>
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 35, color: "#1db954" }}>{`%${Number(data.v * 100).toFixed(2)}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    height: '15%',
    marginBottom: 20
  },
  header: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  content: {
    marginTop: 5,
    flexDirection: 'row',
  }
})

export { Card }