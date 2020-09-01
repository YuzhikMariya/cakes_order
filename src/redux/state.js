let store = {
    _state: {
        personalInfo: {
            surname: "Yuzhyk",
            name: "Masha",
            email: "mari.yuzhik@mail.ru",
            phone: "+375296965625"
        },
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
        ],
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
        ],
        sortType: "sortBy50",
    
    },

    _role: "user",

    getRole(){
        return this._role;
    },

    changeSortType(newSortType){
        this._sortType = newSortType;
    },

    _callSubscriber(){
        console.log("subscribe");
    },

    getState(){
        return this._state;
    },

    addToCatalog(photo, title, price, time, description){
        let cake = {
            photo: photo,
            title: title,
            price: price,
            time: time,
            description: description
        }
    
        this._state.catalog.push(cake);
        this._callSubscriber(this._state);
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }
}


export default store;