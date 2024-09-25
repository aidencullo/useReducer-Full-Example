export default function reducer(state, { type, payload: { name, step } }) {
  switch (type) {
    case "add_adventurer": {
      if (name === "") {
        break;
      }

      let hasThisName = false;
      state.forEach((e) => {
        if (e.name === name) {
          alert(
            `There is already a ${name} in your party.
Differentiate them somehow!`
          );
          hasThisName = true;
        }
      });

      if (hasThisName) return;
      state.push({ name: name, health: 100 })
      break;
    }
  case "remove_adventurer": {
    const index = state.findIndex(member => member.name === name);
      if (index !== -1) {
        state.splice(index, 1);
      }
      break;
    }
    case "increment_health": {
      state.forEach((s) => {
        if (s.name === name) {
          let newHealth = s.health + step;
          s.health = newHealth > 100 ? 100 : newHealth;
        }
      });
      break;
    }
    case "decrement_health": {
      state.forEach((s) => {
        if (s.name === name) {
          let newHealth = s.health - step;
          s.health = newHealth < 0 ? 0 : newHealth;
        }
      });

      const oldState = state;
      state = state.filter((s) => s.health !== 0);
      if (oldState.length !== state.length) {
        alert(`${name} has retired from adventuring...`);
      }

      break;
    }
    default: {
      throw Error("Unknown Action: " + type);
    }
  }
}
