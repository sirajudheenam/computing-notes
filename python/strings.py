s = 'hi'
print(s[1])          ## i
print(len(s))        ## 2
print(s + ' there')  ## hi there

pi = 3.14
# text = 'The value of pi is ' + pi      ## NO, does not work
# values other than strings are to be converted to strings before they can be combined with string and printed
text = 'The value of pi is '  + str(pi)  ## yes
print(text) ## the value of pi is 3.14

raw = r'this\t\n and that'

print(raw)

multi = """It was the best of times.
It was the worst of times."""
print(multi)

s = "  THIS text is part of the Python programming exercises. Mine is better  "
print("s = %s" % "  THIS text is part of the Python programming exercises. Mine is better  ")
print("s.strip().lower() : %s" % s.strip().lower() + "\n") 
print("s.strip().upper() : %s" %s.strip().upper()+ "\n") 
print(s.capitalize()+ "\n") ## This does not capitalize anything as there are blanks in the front
print(s.strip().capitalize()+ "\n") 
print('s is an alpha : ' + str(s.isalpha())+ "\n") 
print('s is a digit : ' + str(s.isdigit())+ "\n") 
numString = "201"
print("%s is a digit : " % numString , str(numString.isdigit())+ "\n") 

print('s has spaces in the begining: ' + str(s[:1].isspace()) + "\n") 
print('s has spaces in the end: ' +  str(s[-1:].isspace())+ "\n")
print("My name is .startswith('My') : %s and %s" % (str("My name is".startswith("My")), "it is nice to work with python")+ "\n")

k = "The end word of the sentence is fine"
print("[%s] (ends with - `%s`?) : %s" % ( k, "fine",  str(k.endswith("fine")) ) + "\n")

k = "This is a long sentence that describes about inner peace"
print("[%s] has the word [%s] at position [%s] found using find() method" % ( k, "peace", k.find("peace") ) + "\n")

k =" There was a cat called simba lived in the forest. The cat is often chased by the dog called jimmy"
print("%s is the original sentence. The word [cat] will be replaced with [rat] and [dog] will be replaced with [cat] \
      : \nThe replaced sentence is :\n [%s]" % (k, k.replace("cat", "rat").replace("dog", "cat") \
                                                 .replace("jimmy", "jimmy".capitalize()).replace("simba","simba".capitalize())) +  "\n")

print("'aaa,bbb,ccc'.split(',') : %s" % 'aaa,bbb,ccc'.split(',') + "\n")

print("This sentence is going to be split with whitespaces : %s" % "This sentence is going to be split with whitespaces".split())
print(' '.join(['The', 'values', 'are', '%s' % "A", "and", "%s" % "B"]) + "\n")


print("Last char of the string %s is : %s" % ("Reverse", str("Reverse"[-1])) + "\n")

value = 2.791514
print(f'approximate value = {value:.2f}')  # approximate value = 2.79

car = {'tires':4, 'doors':2}
print(f'car = {car}') # car = {'tires': 4, 'doors': 2}
