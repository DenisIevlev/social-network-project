
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) =>{ 
  return items.map(user => {
  if (objPropName.id === itemId) {
    return { ...user, ...newObjProps};
  }
  return user;
})
}