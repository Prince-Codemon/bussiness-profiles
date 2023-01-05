import userData from "./userData.json";
const initialState = {
  originalData: userData,
  filteredData: userData,
  domains: [],
};
const getDomains = () => [
  ...new Set(initialState.originalData.map((user) => user.domain)),
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      let { domain, gender, availability } = action.payload;
      if (
        domain === undefined &&
        gender === undefined &&
        availability === undefined
      ) {
        return {
          ...state,
          filteredData: state.originalData,
        };
      }
      if (gender && !domain && !availability) {
        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) => user.gender === gender
          ),
        };
      }
      if (domain && !gender && !availability) {
        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) => user.domain === domain
          ),
        };
      }
      if (availability && !domain && !gender) {
        availability = availability === "true" ? true : false;
        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) => user.available === availability
          ),
        };
      }
      if (availability && gender && !domain) {
        availability = availability === "true" ? true : false;
        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) => user.available === availability && user.gender === gender
          ),
        };
      }
      if (availability && domain && !gender) {
        availability = availability === "true" ? true : false;
        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) => user.available === availability && user.domain === domain
          ),
        };
      }
      if (domain && gender && !availability) {
        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) => user.domain === domain && user.gender === gender
          ),
        };
      }
      if (availability && domain && gender) {
        availability = availability === "true" ? true : false;

        return {
          ...state,
          filteredData: state.originalData.filter(
            (user) =>
              user.available === availability &&
              user.domain === domain &&
              user.gender === gender
          ),
        };
      }
      return {
        ...state,
        filteredData: state.originalData,
      };

    case "SEARCH":
      return {
        ...state,
        filteredData: state.filteredData.filter((user) => {
          const name = user.first_name + " " + user.last_name;
          return name.toLowerCase().includes(action.payload.toLowerCase());
        }),
      };
    case "DOMAINS":
      return {
        ...state,
        domains: getDomains(),
      };

    default:
      return state;
  }
};

export default reducer;
