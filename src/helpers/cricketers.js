const getName = form => {
    const name = document.createElement('h2');
    form.wicket_keeper.checked ? name.textContent = form.name.value + ' (WK)' : name.textContent = form.name.value; 
    return name;
}

const getTeam = form => {
    const team = document.createElement('p');
    team.textContent = `Team: ${form.team.value}`;
    return team;
}

const getRole = form => {
    const role = document.createElement('p');
    role.textContent = `Role: ${form.role.value}`;  
    return role;
}

const getAppearances = form => {
    const appearances = document.createElement('p');
    appearances.textContent = `Number of appearances: ${form.appearances.value}`;
    return appearances;
}

const getRuns = form => {
    const runs = document.createElement('p');
    runs.textContent = `Runs scored: ${form.runs.value}`;
    return runs;
}

const getWickets = form => {
    const wickets = document.createElement('p');
    wickets.textContent = `Wickets taken: ${form.wickets.value}`;
    return wickets;
}

module.exports = {getName, getTeam, getRole, getAppearances, getRuns, getWickets};