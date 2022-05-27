const createRemoveButton = (cricketerListItem) => {
    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.classList.add('delete-button-container');
    cricketerListItem.appendChild(deleteButtonContainer)
    
    const deleteListItemButton = document.createElement("button");
    deleteListItemButton.textContent = "Remove";
    deleteListItemButton.setAttribute("id", "delete-list-item")
    deleteButtonContainer.appendChild(deleteListItemButton);
    return deleteListItemButton;

}



module.exports = {createRemoveButton};
