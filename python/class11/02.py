# a=10
# b=20
# c = a + b
# print("value of c : ", c)

# # conditional statement
# if (c > 20) :
#     print("c is greater than 20")
# else:
#     print("c is less than 20")

# # iteration statement
# for i in range(10):
#     print(i)

#   #    0  1  2  3  4
# arr = [10,20,30,40,50] # arr[0]=10; arr[1]=20; arr[2]=30; arr[3]=40; arr[4]=50
# print(arr[0])
# print(arr[1])
# print(arr[2])
# print(arr[3])
# print(arr[4])

# for i in arr:
#     print(i)

# rows_matrix_a = input("Enter the number of Rows of matrix A:")
# r = int(rows_matrix_a)
# print("You have entered : ", r)

# invoking a function / method before defining it and it gives an error.
# count = find_count("Devesena")
# print(count)

# function definition
# def function_name(arguments):
# every function should return a value
def find_count(name):
    print("Inside a function")
    print("Inside a function - Another print")
    # return a value
    return len(name)
# calling a value before defining it gives an error.
# print(name)
# print ("Outside a function")
# Assign a value to a variable
name ="Devasena"
# calling a function after defining it.
# print(name)
# invoking or calling a function
count = find_count("Devesena")
print(count)
