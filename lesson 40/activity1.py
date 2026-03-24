# Fibonacci using Recursion

# Function to find Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Taking input
terms = int(input("Enter number of terms: "))

# Print Fibonacci series
print("Fibonacci Series:")

for i in range(terms):
    print(fibonacci(i), end=" ")