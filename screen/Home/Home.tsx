import { View, Text } from "react-native"
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { createSuscribe, tradeList } from "../../utils/trade";
import { useAppState } from "../../provider/AppContext";
import { SOCKET_URL } from "../../utils/const";

export interface CardProps {
  c: null | string | number
  p: number
  s: string
  t: number
  v: number
}

const initialState = [
  {
    c: null,
    p: 0,
    s: "BINANCE:BTCUSDT",
    t: 0,
    v: 0
  },
  {
    c: null,
    p: 0,
    s: "BINANCE:ETHUSDC",
    t: 0,
    v: 0
  }
]

const Home = () => {
  const { selectedCrypto } = useAppState()
  const [trade, setTrade] = useState<any[]>([])
  const [listCard, setListCard] = useState<any[]>(initialState)
  const socket = new WebSocket(SOCKET_URL);

  socket.addEventListener('open', function (event) {
    const listSuscribe = createSuscribe(selectedCrypto)

    if (listSuscribe.length > 0) {
      listSuscribe.map((list) => {
        socket.send(JSON.stringify({ 'type': list.type, 'symbol': list.symbol }))
      })
    }
  });

  socket.addEventListener('message', function (event) {
    const message = JSON.parse(event.data);
    if (message.type === 'ping') {
      socket.send(JSON.stringify({ type: 'pong' }));
    } else if (message.type === 'trade') {
      setTrade(message.data)
    }
  });

  useEffect(() => {
    const tradeCard = async () => {
      const cleanTrade = trade.filter((val) => tradeList.some((list) => list.id === val.s))
      const result = Object.values(cleanTrade.reduce((r, o) => {
        if (!r[o.s] || r[o.s].t < o.t) r[o.s] = o;
        return r;
      }, {}));
      const map2 = new Map(result.map((o: any) => [o.s, o]))
      const result2 = listCard.map(o => Object.assign({}, o, map2.get(o.s)));
      setListCard(result2)
    }
    tradeCard()
  }, [trade])

  useEffect(() => {
    setTrade([])
  }, [])

  return (
    <View style={{ height: "100%", padding: 15 }}>
      {listCard.map((card: CardProps, index) => {
        if (selectedCrypto === card.s) {
          return (
            <Card key={index} data={card} />
          )
        } else if (selectedCrypto === "all") {
          return (
            <Card key={index} data={card} />
          )
        }
      })}
    </View>
  )
}

export { Home }