let initialState = {
  friendsList: [
    { id: 1, name: 'Victor', href: 'http://cdn.onlinewebfonts.com/svg/img_258083.png' },
    { id: 2, name: 'Danya', href: 'http://cdn.onlinewebfonts.com/svg/img_258083.png' },
    { id: 3, name: 'Sarah', href: 'http://cdn.onlinewebfonts.com/svg/img_258083.png' }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;