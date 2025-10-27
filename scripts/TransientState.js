// Object to hold transient state for user selections (╥﹏╥)
const transientState = {
    entreeId: 0,
    sideId: 0,
    vegetableId: 0
};


// it's breaking (╥﹏╥)(╥﹏╥)(╥﹏╥)(╥﹏╥)(╥﹏╥)
// Functions to set the user's choices in transient state
export const setEntree = (id) => {
    transientState.entreeId = id;
    console.log("Entree set to:", id);
}

export const setSide = (id) => {
    transientState.sideId = id;
    console.log("Side set to:", id);
}

export const setVegetable = (id) => {
    transientState.vegetableId = id;
    console.log("Vegetable set to:", id);
}

// Function to get a copy of the current transient state
export const getTransientState = () => ({ ...transientState });
