// REDUCERS: son funciones puras(solo se debe VER,OBTENER y DEVOLVER el estado , sin mutarlo ) que toman como parametro el estado anteriror y la acction y regresa un nuevo estado.

const initialState = {
  authenticate: false,
  // category: [],
  // product: [],
  // categoryProducts: [],
  // productDescription: [],
  // search: false,
  // itemsCarrito: [],
  // saldo: null,
  // pedido: null,
  // sesion: { jwt: null, isAuthenticated: false, profile: null },
  // searchValue: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "@login/authenticate":
      return {
        ...state,
        authenticate: action.payload,
      };

    default:
      return state;
  }
}
