import React, { useReducer } from "react";
import { reducer, ReducerState } from "./reducer";

interface CryptoSelectedProps {
  label: string
  value: string
}

export interface ContextValueTypes extends ReducerState {
  setCryptoList: (cryptoSelected: CryptoSelectedProps) => Promise<void>
}

const AppContext = React.createContext<ContextValueTypes | null>(null)

export const useAppState = (): ContextValueTypes => {
  const context = React.useContext(AppContext)
  if (context === null)
    throw Error('Context cannot be used outside of a provider')

  return context
}

export const withAppContext = <T extends {}>(
  Component: React.ComponentType<T>,
): React.FC<T> => {
  const AppState: React.FC = (props) => {
    const initialState: ReducerState = {
      isLoading: true,
      selectedCrypto: "",
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const setCryptoList = React.useCallback(async (cryptoSelected: CryptoSelectedProps) => {
      try {
        dispatch({
          type: "SET_LIST_CRYPT",
          payload: {
            valueCrypto: cryptoSelected.value
          }
        })
      } catch (e) {
        dispatch({
          type: 'REQUEST_ERROR',
          payload: {
            error: 'There was a problem in update user utility',
            errorType: 'set',
          },
        })
      }
    }, [])

    const contextValue: ContextValueTypes = {
      ...state,
      setCryptoList,
    }
    return (
      <AppContext.Provider value={contextValue}>
        <Component {...props as T} />
      </AppContext.Provider>
    )
  }
  return AppState
}