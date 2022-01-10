
export const addIn = (item, arr, dispatch, type) => {
    const card = {
        id: item.id,
        logo: item.logo,
        name: item.name,
        price: item.price,
        size: 1
    }

    if (arr.length) {
        if (arr.some(elem => elem.id === item.id)) {
            return
        } else {
            dispatch(type(card))
        }
    } else {
        dispatch(type(card))
    }
}
