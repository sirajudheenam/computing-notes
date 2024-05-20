def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        print("Array Index is ", i)
        swapped = False
        for j in range(0, n - i - 1):
            print("J is : ", j)
            if arr[j] > arr[j + 1]:
                print(
                    "arr[",
                    j,
                    "]: ",
                    arr[j],
                    "is greater than arr[",
                    j + 1,
                    "] is: ",
                    arr[j + 1],
                )
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # Swap!
                swapped = True
        if not swapped:  # If no swaps occurred in inner loop, the list is sorted.
            break
    return arr


result = bubble_sort([5, 1, 4, 2, 8])
print(result)
