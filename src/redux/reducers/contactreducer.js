const initialState = [
    {
        id:0,
        name:"khalid mansoor",
        phone:"123455",
        email:"khlaid@gmail.com"
    },
    {
        id:1,
        name:"Aqib muhammad",
        phone:"12345",
        email:"Aqib@gmail.com"
    }
]

const contactReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CONTACT':
            return [...state,action.payload];
        case 'DELETE_CONTACT':
            return state.filter((contact) => contact.id !== action.payload);
        case 'EDIT_CONTACT':
            return state.map(contact => contact.id === action.payload.id ? action.payload : contact);
        default:
            return state;
    }
}

export default contactReducer;