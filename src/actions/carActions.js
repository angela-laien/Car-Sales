export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE = 'ADD_FEATURE';

export function addFeature(feature) {
    return {
        type: ADD_FEATURE,
        payload: feature
        // payload: {id: feature.id, name: feature.name, price: feature.price}
    };
};

export function removeFeature(feature) {
    return {
        type: REMOVE_FEATURE,
        payload: feature
        // payload: {id: feature.id, name: feature.name, price: feature.price}
    };
};