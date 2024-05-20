# File name:...\\MyPythonXI\PyChap14\summatrix.py
# Program to add matrices
r=int(input("Enter the number of Rows of matrix A:"))
c=int(input("Enter the number of Columns of matrix A:"))
r1=int(input("Enter the number of Rows  of matrix B:"))
c1=int(input("Enter the number of Columns of matrix B:"))
# Declaration of matrices
A=[[0 for x in range(c)]for x in range(r)]
B=[[0 for x in range(c1)] for x in range(r1)]
C=[[0 for x in range (c)]for x in range(r)]
# Before accepting the elements Check if no of rows and coloums both matrices are equal
if(r==r1 and c==c1):
    # Accept the Elements for matrix A
    for i in range(r):
        for j in range(c):
            print("Enter the element A[%d][%d]:"%(i,j),end="")
            A[i][j]=int(input())
    # Accept the Elements for matrix B
    for i in range (c):
        for j in range(c):
            print("Enter the element B[d%][d%]:"%(i,j),end="")
            B[i][j]=int(input())
    # Addition of two martices
    for i in range(r):
        for i in range(c):
            C[i][j]=A[i][j]+B[i][j]
            # First matrix
            print("\n Matrix A:")
    for i in range(r)
        print("*5) 
    for j in range(c)
    print ("{0:^3}".format(A[i][j],end='\t')
                                                   
             print()
             print("Matrix B:")
             for i in range(r)
                   print (""*5) 
                   for j in range(c)
                      print ("{0:^3}.format (B[i][j],end='\t')
                   print()
                #Print out the Resultant Matrix C
                print("Matrix C=(A+B):")
                for i in range(r):
=                        print(""*5)
                            for j in range (c)
                               print ("{0:^3}".format(C[i][j],end='\t')
                        print()
        else:
            print("Order of two martices is not same")