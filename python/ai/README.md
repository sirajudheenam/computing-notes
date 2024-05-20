# Notes on AI

# Models:

Human brain - est. 100-500 trillion synapses
Most Powerful GPU - NVIDIA A100 800
Size of a Model: 316.2 GB

# The pretrain and Finetune paradigm

## Pretraining

Need lot data to train such a big model

- We don't clean data for pre-training
- unclean data is cheap. like the entire Internet.
- Once pretrained then the model can be trained and fine-tuned.
- EXPENSIVE TRAINING & CHEAP DATA

## Fine Tuning

- Need quality or well-curated data to fine tune.
- Quality data is expensive.
- EXPENSIVE DATA & CHEAP TRAINING

## In-Context Learning (2022)

- Instead of fine-tuning the model to suit our purpose, we can use model which can take learn from prompts.
  Common Task in NLP is Sentiment Analysis.
- Give inputs like
  I Love you : POSITIVE
  He hates loosing : NEGATIVE
- Ask for Result
  you like it
- Based on the above inputs, it can provide output
  you like it : { POSITIVE }

## Transformers

- "Attentions is all you need"
- Attention allows all token in a sequence to interact with each other.
- Massively paralellizeable - Enable scaling to huge models.
  I Love => Embedding => Attention + MLP => I Love NLP

### Three types of transformers

- Encoder and Decoder

  - Seq2Seq Modelling (eg., T5, T0 transformers)
  - Translation can be done with this type of transformers
  - "I love NLP" will be encoded and decoded to "ich liebe NLP"
  - ["I love NLP"] => [Embeddings] => [Attention + MLP] x N  
     || => [Attention + MLP] x N => ["Ich liebe NLP"]
  -                           ["Ich liebe"] => [Embeddings] => |^|

- Encoder-Only

  - Masked Language Modeling (e.g., BERT, RoBERTa transformers)
  - Input "I [MASK] NLP"
  - The model is supposed to learn to fill the masked word then complete the sentence.
  - ["I [MASK] NLP"] => [Embeddings] => [Attention + MLP] x N => ["I Love NLP"].

- Decoder-Only
  - Casual Language Modeling (e.g., GPT3, Llama transformers)
  - Input "I [MASK] NLP"
  - The model is supposed to learn to fill the masked word then complete the sentence.
  - ["I love"] => [Embeddings] => [Attention + MLP] x N => ["I Love NLP"].

### Big Models:

- GPT3
  - 170 Billion parameters
  - 316 GB of Data

### Summarizing Text

- Original Text to a Summary
- It takes a large text and produces summary information.
- Model - T5

### Speech to text

- Model - Whisper from openAI.
- Attention is all you need.
- Trained on massive dataset of parallel audio and transcriptions.
- Custom preprocessing for audio, Encoder-Decoder transformer.

## Workshop

- Audio => Whisper => Finetuned T5 => Summary

- [REPLIT](https://replit.com/learn)
- [Hugging Face](https://huggingface.co/welcome)
- [cohere](https://dashboard.cohere.com/)
  GPT (aka ChatGPT)
  Bard (LaMDA)
  Bing Chat
  LLaMA

https://sdk.openui5.org/

## Other Resources

- [AICamp](https://www.aicamp.ai/)

Large Large Models (LLM)

- [LifeArchitect AI Models](https://lifearchitect.ai/models/)
- [Summary of current models: View the full data (Google sheets)](https://docs.google.com/spreadsheets/d/1O5KVQW1Hx5ZAkcg8AIRjbQLQzx2wVaLl0SqUu-ir9Fs/edit#gid=1158069878)

Data Sources:
the Internet

- Wikipedia
- Reddit
- Common Crawl

- Prompting:
  - Asking a question to the models
    e.g., (Tell a joke)
    with more context - Tell a joke about a cat?
- Tailoring Own prompts

  - bigstarcollectibles.com
  - Mayor of Binaryville

- Challenge - Generating Creative Content with GPT4

  - Using the GPT-4, generate the superpower for the binaryville Character named bubbles to put in your app.

- Summarization and classification prompts.
- Giving GPT-4 a persona - ( Rex from BinaryVille, from the UK it gives price in Pounds)
- Formating your values (key value pair)
- in dot jot format and ask for json or yaml format.

- # Advanced Prompts
  - In System Prompt -
    you are a helpful assistant who is trying to find the user's favorite color.Until the user tells you the favorite color, keep asking them for it.
- # Adding Context for a more powerful application
  - Help the user track of what their order contains.
  - I want to add a Rex action figure
  - Add a delorius figure as well
  - Replace Rex with bubbles action figure.
- # Prompts chaining

  - Combine multiple chain together.

- Other Tools: (from LinkedIn learning)
  - LangChain
  - VoiceFlow

## Cool Sites to explore:

Descript - Text to audio
D-ID - Use image to create a video
voice.ai (Change your voice sound like another person)
VideoBGRemover.com
Adobe Podcast (Remove all the background noice)
ChatGPT
cleanup.pictures (remove unwanted objects from image)

FutureTools.io (Latest AI Tools)

https://gravitywrite.com/

invideo.io (to generate youtube videos headless) [ Promo Code:rms25 ]

clickbank.com

YouTube ThumbNail:
canva.com

vidiq.com
Search your video title with vidiq.com to generate keywords

runway.com
midjourney.com
pictory.ai (script to video)
https://neuralframes.com
https://firefly.adobe.com/
https://vidrapid.com/ (YouTube Video Summary)
Creatorkit.com
GravityWrite.com
BrandCrowd.com (Logo Design)
https://www.watermarkremover.io
Remove watermarks from your images
lumen5.com (Text to a Video)
predis.ai ()
Mubert (find music for YouTube background)
