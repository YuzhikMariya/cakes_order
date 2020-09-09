const CHANGE_SORT_TYPE  = 'CHANGE-SORT-TYPE';
const ADD_TO_CATALOG = 'ADD-TO-CATALOG';

let initialState = {
    catalog: [
        {
          id: 1,
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sb qkwehkmnfd j lkjfh glkjsbgflvj sbqkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 2,
          photo: "cake2.png",
          title: "Kkjsdfh  ksf  h",
          price: 13,
          time: 54,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 3,
          photo: "cake3.png",
          title: "Ojn  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 4,
          photo: "cake4.png",
          title: "Lnsf f ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 5,
          photo: "cake5.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 6,
          photo: "cake6.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 7,
          photo: "cake7.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 8,
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          id: 9,
          photo: "cake8.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        }
      ],
      sortType: "sortBy50"
}

export const catalogReducer = (state = initialState, action) => {


    switch (action.type){
        case ADD_TO_CATALOG:{
            let cake = {
                photo: action.photo,
                title: action.title,
                price: action.price,
                time: action.time,
                description: action.description
            }
            let newState = {...state};
            newState.catalog.push(cake);
            return newState;
        }
        case CHANGE_SORT_TYPE:{
            let newState = {...state};
            newState.sortType = action.newType;
            return newState;
        }
        default: 
            return state;
    }
}

export const changeSortTypeActionCreator = (newType) => {
    return {
        type: CHANGE_SORT_TYPE, 
        newType: newType
    }
}