const cricketer = require('./helpers/cricketers');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');

    const cricketerList = document.querySelector('#cricketer-list');

    const createCricketerListItem = form => {
        const cricketerListItem = document.createElement('li');
        cricketerListItem.classList.add('list-item')
    
        cricketerListItem.appendChild(cricketer.getName(form));
        cricketerListItem.appendChild(cricketer.getTeam(form));
        cricketerListItem.appendChild(cricketer.getRole(form));
        cricketerListItem.appendChild(cricketer.getAppearances(form));
        cricketerListItem.appendChild(cricketer.getRuns(form));
        cricketerListItem.appendChild(cricketer.getWickets(form));

        const deleteButtonContainer = document.createElement("div");
        deleteButtonContainer.classList.add('delete-button-container');
        cricketerListItem.appendChild(deleteButtonContainer)

        const deleteListItemButton = document.createElement("button");
        deleteListItemButton.textContent = "Remove";
        deleteListItemButton.setAttribute("id", "delete-list-item")
        deleteButtonContainer.appendChild(deleteListItemButton);

        const handleRemoveButton = () => {
            cricketerListItem.parentNode.removeChild(cricketerListItem);
        }
        
        deleteListItemButton.addEventListener("click", handleRemoveButton);

        return cricketerListItem;
    }

    const handleNewCricketerSubmit = e => {
        e.preventDefault();

        const cricketerListItem = createCricketerListItem(e.target);
        cricketerList.appendChild(cricketerListItem);

        e.target.reset();
    }

    const newCricketer = document.querySelector('#new-item-form');
    newCricketer.addEventListener('submit', handleNewCricketerSubmit);

    const deleteButton = document.querySelector("#delete-button");

    const handleDeleteButton = () => {
        while (cricketerList.firstChild) {
            cricketerList.removeChild(cricketerList.firstChild);
        }
      }
    
      deleteButton.addEventListener("click", handleDeleteButton);


})