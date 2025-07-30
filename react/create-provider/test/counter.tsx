import {createProvider} from "../index";
import {useState} from "react";

const { Provider, useProvider } = createProvider(() => {
  const [count, setCount] = useState(0)
  return {
    count,
    setCount,
  }
})

function SingleCounter () {
  const {count, setCount} = useProvider()
  return <div>{count}</div>
}

export function Counter () {
  return <Provider>
    <button></button>
    <SingleCounter />
    <SingleCounter />
  </Provider>
}