export interface ReducerState {
  isLoading: boolean;
  selectedCrypto: string;
}

type RequestErrorAction = {
  type: 'REQUEST_ERROR';
  payload: {
    error: string;
    errorType: 'get' | 'set';
  };
};

type RequestUtilityListAction = {
  type: 'SET_LIST_CRYPT';
  payload: {
    valueCrypto: string;
  };
};

export type UtilitiesReducerActions =
  | RequestUtilityListAction
  | RequestErrorAction;

export const reducer = (
  prevState: ReducerState,
  actions: UtilitiesReducerActions
) => {
  switch (actions.type) {
    case 'SET_LIST_CRYPT': {
      return {
        ...prevState,
        isLoading: false,
        selectedCrypto: actions.payload.valueCrypto,
      };
    }
    default: {
      throw new Error('Unexpected action type in Utility Context');
    }
  }
};
