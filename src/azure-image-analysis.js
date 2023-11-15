const API_KEY="496c0ec76846430886601da773f0a2c0"
const API_ENDPOINT="https://image-analyzer-pro.cognitiveservices.azure.com/"

export async function analyzeImage(imgUrl) {
	const response = await fetch(`${API_ENDPOINT}computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=objects&language=en`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': API_KEY,
		},
		body: JSON.stringify({
			"url": imgUrl
		})
	})
	return response.json()
}
