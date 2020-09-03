let initialState = {
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
}

export const accountReducer = (state = initialState, action) => {
    return state;
}