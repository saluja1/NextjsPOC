export function GetDataServiceFuntion(apiUrl){
	let jsonData;
    const response = fetch(apiUrl);
    jsonData = response.then(x => x.json())
    return jsonData;
}

