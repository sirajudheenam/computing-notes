
# Data creation

#Create some random values, save them in two lists:

import matplotlib.pyplot as plot
import random

randomlistX = []
randomlistY = []

for i in range(0,30): 
    n = random.randint(1,30)
    m = random.randint(100,400)
    randomlistX.append(n)
    randomlistY.append(m)

# Histogram plot:

#Histogram plot of randomlistX
plot.hist(randomlistX)
# plot.show()

# Scatter plot

#Scatter plot
plot.scatter(randomlistX, randomlistY)
plot.show()