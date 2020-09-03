const CHANGE_SORT_TYPE  = 'CHANGE-SORT-TYPE';
const ADD_TO_CATALOG = 'ADD-TO-CATALOG';

let initialState = {
    catalog: [
        {
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake2.png",
          title: "Kkjsdfh  ksf  h",
          price: 13,
          time: 54,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake3.png",
          title: "Ojn  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake4.png",
          title: "Lnsf f ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake5.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake6.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake7.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
          photo: "cake1.png",
          title: "Kkjsdfh  ksf kjdsfk h",
          price: 13,
          time: 4,
          description: "qkwehkmnfd j lkjfh glkjsbgflvj sb"
        },
        {
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
        case ADD_TO_CATALOG:
            let cake = {
                photo: action.photo,
                title: action.title,
                price: action.price,
                time: action.time,
                description: action.description
            }
        
            state.catalog.push(cake);
            return state;
        case CHANGE_SORT_TYPE:
            state.sortType = action.newType;
            return state;
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