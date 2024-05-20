## Install hugginface package

```bash
pip install huggingface_hub

## Generate a Token on HuggingFace.com

huggingface-cli login
# To login, `huggingface_hub` requires a token generated from https://huggingface.co/settings/tokens

# Token:
# Add token as git credential? (Y/n) Y
# Token is valid (permission: read).
# Your token has been saved in your configured git credential helpers (osxkeychain).
# Your token has been saved to $HOME/.cache/huggingface/token
# Login successful

## Save it somewhere secure
set -Ux HUGGINGFACE_TOKEN $HOME/.cache/huggingface/token
huggingface-cli repo create first-ai --type {model, dataset, space}

# What it can do:

```

2017 - Attention is all what you need. - PAper from Google.
2018 - bert paper came out
BERT - Bidirectional Encoding Represenation for Transformers.
bert-base-uncased
LLM - Large Language Model.

roberta-base repo released by Facebook. - bert model - trained for longer time and with much text.
Language Models have a 'vocabulary' of tokens that can be used to form words and sentences.
Paris the [MASK] of France.
capital - 0.999 probability
distilbert-base-uncased-finetuned-sst-2-english
SST - Stanford Sentiment TreeBank
