export function addFeature(feature) {
    return {
        type: 'ADD_FEATURE',
        payload: {id: feature.id, name: feature.name, price: feature.price}
    };
};

export function removeFeature(feature) {
    return {
        type: 'REMOVE_FEATURE',
        payload: {id: feature.id, name: feature.name, price: feature.price}
    };
};