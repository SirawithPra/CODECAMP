let dt
fetch('https://data.tmd.go.th/api/ThailandClimateNormal/v1/?uid=api&ukey=api12345')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    dt =data
    console.log(data)
})
//gg