import requests


def query(payload, model_id, api_token):
    headers = {"Authorization": f"Bearer {api_token}"}
    API_URL = f"https://api-inference.huggingface.co/models/{model_id}"
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()


model_id = "distilbert-base-uncased"
# huggingFace API # get yours at hf.co/settings/tokens
api_token = "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"

# search for missking token in a sentence
data = query("The goal of life is [MASK].", model_id, api_token)

print(data)
