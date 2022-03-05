const createCard = teamData => {
    const team = teamData.map(data => {
        const role = data.getRole();
        
        if (role === 'Manager') {
            return createManager(data);
        } else if (role === 'Engineer') {
            return createEngineer(data);
        } else {
            return createIntern(data);
        }
    });
    return team.join('');
};

const createManager = manager => {
    return `
                    <div class="col-4 justify-content-around rounded bg-dark text-light m-4">
                        <h2>${manager.name}</h2>
                        <h4 class="font-italic bg-dark">Manager</h4>
                        <p>ID: ${manager.id}</p>
                        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office Number: ${manager.officeNumber}</p>
                    </div>
    `;
};

const createEngineer = engineer => {
    return `
                    <div class="col-4 justify-content-around rounded bg-dark text-light m-4">    
                        <h2>${engineer.name}</h2>
                        <h4 class="font-italic bg-dark">Engineer</h4>
                        <p>ID: ${engineer.id}</p>
                        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
    `;
};

const createIntern = intern => {
    return `
                    <div class="col-4 justify-content-around rounded bg-dark text-light m-4">
                        <h2>${intern.name}</h2>
                        <h4 class="font-italic bg-dark">Intern</h4>
                        <p>ID: ${intern.id}</p>
                        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p>School: ${intern.school}</p>
                    </div>
    `;
};

module.exports = teamData => {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
    </head>
    <body>
        <header class="b-container">
            <div class="row">
                <h1 class="col bg-info p-6 text-light">Team Profile</h1>
            </div>
        </header>
        <div class="b-container">
            <div class="row bg-info justify-content-around">
                <main class="col col-10 bg- m-2 rounded">
                    <div class="row bg-warning justify-content-around">
                       ${createCard(teamData)}
                   </div>
                </main>
            </div>
        </div>
    </body>
    </html>
    `;
};