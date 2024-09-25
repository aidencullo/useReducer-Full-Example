export default function reducer(state, { type, payload: { name, step } }) {
  switch (type) {
    case "add_adventurer": {
      if (name === "") {
        return;
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
      return;
    }
    case "remove_adventurer": {
      state = state.filter((s) => s.name !== name);
      return;
    }
    case "increment_health": {
      state.forEach((s) => {
        if (s.name === name) {
          let newHealth = s.health + step;
          s.health = newHealth > 100 ? 100 : newHealth;
        }
      });
      return;
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

      return;
    }
    default: {
      throw Error("Unknown Action: " + type);
    }
  }
}
