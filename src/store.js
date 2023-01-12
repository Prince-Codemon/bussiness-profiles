import userData from "./userData.json";
const initialState = {
  originalData: userData,
  filteredData: userData,
  domains: [],
  team: JSON.parse(localStorage.getItem("team")) || [],
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

    case "ADD_TO_TEAM":
      const user = action.payload;
      const present =  state.team.find((u) => u.id === user.id);
      const same = state.team.find((u) => u.domain === user.domain);
      if (present) {
        alert("User already added");
        return state;
      } else if (same) {
        alert("You can't add more than one member from same domain");
        return state;
      } else {
        return {
          ...state,
          team: [...state.team, user],
        };
      }

    case "REMOVE_MEMBER":
      const id = action.payload;
      return {
        ...state,
        team: state.team.filter((user) => user.id !== id),
      };
    default:
      return state;
  }
};

export default reducer;
