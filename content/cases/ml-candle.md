---
slug: ml-candle
title: Machine Learning Predicts Candle Burn Rate
verdict: over-engineered
tags: [Data Science, Machine Learning]
date: 2025-01-05
summary: AI rediscovers linear regression, claims victory over candles.
paperLink: https://doi.org/example-ml-candle
---

## The Paper

Researchers trained a **neural network** to predict how long a candle will burn based on its dimensions and wax composition.

### The Setup
- Collected data on 500 candles
- Features: height, diameter, wax type, wick size
- Target: burn time
- Solution: 3-layer neural network with dropout regularization

### The Results
- Prediction accuracy: 94.2%
- Model: 47,000 parameters
- Training time: 6 hours on GPU
- **Alternative method**: Linear regression in 0.3 seconds with 93.8% accuracy

Wait, what? 🤔

---

## Sense ✅

Let's be fair - the methodology is solid:

### What They Did Right

**1. Proper data collection**
- Measured 500 candles systematically
- Controlled laboratory conditions
- Documented all variables
- Validated measurements

**2. Professional ML practices**
- Train/test split
- Cross-validation
- Hyperparameter tuning
- Regularization to prevent overfitting

**3. Reproducible research**
- Code published on GitHub
- Dataset available
- Clear documentation
- Others can verify results

**4. Honest reporting**
They *did* include the linear regression baseline. They acknowledged it worked almost as well. They didn't hide the truth.

So what's the problem?

---

## Nonsense 🤔

### The Elephant in the Room

**They built a neural network to solve a problem that is *literally linear*.**

Candle burn time = (wax volume) / (burn rate)

This is **high school physics**. The relationship between candle dimensions and burn time is fundamentally linear. There's no hidden complexity to discover.

### The Absurdity Scale

Let's compare approaches:

**Method 1: Common Sense**
```
time = height / burn_rate_per_inch
```
- Accuracy: ~90%
- Time: 5 seconds
- Cost: $0
- Parameters: 1

**Method 2: Linear Regression**
```python
model = LinearRegression()
model.fit(X, y)
```
- Accuracy: 93.8%
- Time: 0.3 seconds
- Cost: $0
- Parameters: 5

**Method 3: Neural Network** (what they did)
```python
model = Sequential([
    Dense(128, activation='relu'),
    Dropout(0.3),
    Dense(64, activation='relu'),
    Dense(1)
])
```
- Accuracy: 94.2%
- Time: 6 hours GPU
- Cost: ~$20 in compute
- Parameters: 47,000

**They gained 0.4% accuracy at the cost of 6 hours and 47,000 parameters.** 🎉

---

## The Bigger Picture

### Why This Happens

This paper exists because:

**1. "Machine Learning" gets grants**
- "We'll use linear regression" → Rejected
- "We'll use deep learning" → Funded
- Same problem, different buzzword

**2. Publication bias**
- Journals want "novel" methods
- "We used the appropriate simple solution" doesn't get published
- "We applied AI to X" gets citations

**3. Resume building**
- Junior researchers need ML papers
- Whether ML was *necessary* is irrelevant
- It's about demonstrating you can use the tools

**4. The AI hype cycle**
- Everything must involve neural networks
- Even when a calculator would suffice
- Especially when a calculator would suffice

---

## Lesson 📚

### **Complexity is Not Intelligence**

The smartest solution is often the simplest one.

### What This Teaches Us

**1. Match the tool to the problem**
- Linear problem? Linear solution.
- Nonlinear problem? Maybe try nonlinear methods.
- Don't use a neural network because it's 2025

**2. Occam's Razor still applies**
- Simpler models are easier to interpret
- Fewer parameters = less can go wrong
- 47,000 parameters to predict candle burn time is absurd

**3. The "Because We Can" fallacy**
Just because you *can* use deep learning doesn't mean you *should*.

Example:
- ❌ "We trained a GAN to predict if numbers are even or odd"
- ✅ "We used modulo 2"

**4. Incremental improvements have costs**
That 0.4% accuracy boost:
- Requires GPU
- Takes 6 hours
- Needs 47,000 parameters
- Can't be explained to stakeholders
- Breaks if you look at it wrong

---

## Real-World Implications

This pattern appears everywhere in modern data science:

### The Enterprise Version

**Client**: "We need to predict customer churn"

**Consultant A**: "Let's try logistic regression first"
**Result**: 87% accuracy, easy to explain, runs in seconds

**Consultant B**: "Let's build a transformer model with attention mechanisms"
**Result**: 88% accuracy, impossible to explain, requires ML engineer on staff

**Who gets hired?** 

Consultant B. Because it's 2025 and "we use AI" sounds better than "we use statistics."

---

## The Irony

The researchers demonstrated:
- Skill with modern ML tools ✅
- Proper experimental design ✅
- Honest reporting ✅
- **Complete lack of judgment** ❌

### What They Should Have Done

**Title**: "Comparing Prediction Methods for Candle Burn Time"

**Conclusion**: "Linear regression is sufficient. Neural networks provide no meaningful improvement. Don't use deep learning for linear problems. Thanks for coming to our TED talk."

**Impact**: Would have saved the world from thousands of similar papers.

**What they did instead**: Contribute to the pile of "AI for Everything" papers that make everyone think they need neural networks to predict anything.

---

## The Meta-Lesson

### AI is Amazing... When Appropriate

Neural networks have revolutionized:
- Image recognition
- Natural language processing
- Game playing
- Drug discovery
- Actually complex problems

But using them for candle burn time prediction is like:
- Using a flamethrower to light a candle
- Hiring a lawyer to open a door
- Getting an MRI for a paper cut

**Technically possible. Hilariously inappropriate.**

---

## Why This Belongs at IAN

This paper represents **peak academic overengineering**:
- Methodologically sound ✅
- Utterly unnecessary ✅
- Symptom of larger problem ✅
- Makes us question humanity's priorities ✅

It's the research equivalent of using a sledgehammer to hang a picture frame - sure, the nail went in, but was that really the best approach?

🧰 **Our verdict**: Over-engineered to the point of parody.

---

**The Real Tragedy:**

Someone spent months on this. They could have:
- Solved an actually hard problem
- Discovered something new
- Advanced human knowledge

Instead, they proved that neural networks can... do multiplication slowly.

And that's why we're here. 🐸

---

**Paper**: [Read the original](https://doi.org/example-ml-candle)  
**Field**: Data Science / Machine Learning  
**Published**: 2024  
**Our Verdict**: 🧰 Over-engineered (magnificently so)
