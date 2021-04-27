const con_api = "https://api.rootnet.in/covid19-in/stats/latest";

function loadData(){
    
    fetch(con_api).then(response => {
        return response.json();
    }).then(data => {
        const total = data.data.summary.total;
        const recover = data.data.summary.discharged;
        const death = data.data.summary.deaths;
        const active = parseInt(total-(recover+death));
        
        document.getElementById('recover-render').innerText = recover;
        document.getElementById('death-render').innerText = death;
        document.getElementById('active-render').innerText = active;
        document.getElementById('total-render').innerText = total;
    })
}

loadData();

function getData(){

    var state = document.getElementById("state_name").value;
    //console.log(city);
    // alert("You Selected "+city);

    fetch(con_api).then(response =>{
        return response.json();
    }).then(data =>{
        for(var i=0; i<=35; i++){
            if(state == data.data.regional[i].loc){
                const stateTotal = data.data.regional[i].totalConfirmed;
                const stateRecovered = data.data.regional[i].discharged;
                const stateDeath = data.data.regional[i].deaths;
                const stateActive = parseInt(stateTotal-(stateRecovered+stateDeath));

                document.getElementById('active-lab').innerText = `Total active cases of Corona in ${state}:-`;
                document.getElementById('active-render').innerText = stateActive;

                document.getElementById('recover-lab').innerText = `Total recovered from Corona in ${state}:-`;
                document.getElementById('recover-render').innerText = stateRecovered;
                
                document.getElementById('death-lab').innerText = `Total deaths due to Corona in ${state}:-`;
                document.getElementById('death-render').innerText = stateDeath;
                
                document.getElementById('total-lab').innerText = `Current Total cumulative data for ${state}:-`;
                document.getElementById('total-render').innerText = stateTotal;
            }
        }
    })
}