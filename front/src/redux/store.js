import { catalogReducer } from "./catalogReducer";

let store = {
    _state: {
        catalogPage: {
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
        },
        accountPage:{
            personalInfo: {
              surname: "Yuzhyk",
              name: "Masha",
              email: "mari.yuzhik@mail.ru",
              phone: "+375296965625"
            },
            history: [
              {
                title: "The best cake",
                ref: "#",
                count: 2
              },
              {
                title: "Jsjdf fkjh sksfl lf",
                ref: "#",
                count: 2
              },
              {
                title: "The sldfk lsf best cake",
                ref: "#",
                count: 2
              },
              {
                title: "p  oI jhsk dksd best cake",
                ref: "#",
                count: 2
              },
              {
                title: "The best cake",
                ref: "#",
                count: 12
              }
            ]
        },
        cartPage:{
            cart: [
              {
                photo: "cake1.png",
                title: "Kkjsdfh  ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake2.png",
                title: "Kkjsdfh  ksf  h",
                price: 13,
                count: 54
              },
              {
                photo: "cake3.png",
                title: "Ojn  ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake4.png",
                title: "Lnsf f ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake5.png",
                title: "Kkjsdfh  ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake6.png",
                title: "Kkjsdfh  ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake7.png",
                title: "Kkjsdfh  ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake1.png",
                title: "Kkjsdfh  ksf kjdsfk h",
                price: 13,
                count: 4
              },
              {
                photo: "cake8.png",
                title: "Kkjsdfh  ksf kjdsfk h",
                price: 13,
                count: 4
              }
            ]
        },
        role: "user"

  },

    getState(){
      return this._state;
    },

    subscribe(observer){
      this._callSubscriber = observer;
    },

    _callSubscriber(){
        console.log("subscribe");
    },

    dispatch(action){
        this._state.catalogPage = catalogReducer(this._state.catalogPage, action);
        this._callSubscriber(this._state);
    }

}


export default store;