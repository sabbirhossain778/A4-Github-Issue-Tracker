const loadAllIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then((res) => res.json())
    .then((json) => displayIssues(json.data))
}

const loadAllCard = () => {
    console.log();
    
}

const displayIssues = (issues) =>{
    // console.log(issues);
    for(let i = 0; i < issues.length; i++){
        const issue = issues[i];
        console.log(issue.title);
    }
    
}
loadAllIssues();