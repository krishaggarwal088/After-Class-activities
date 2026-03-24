# Function 1: Multiply using 1 iteration (direct multiplication)
def multiply_once(n, m):
    return n * m

# Function 2: Multiply using N iterations (repeated addition)
def multiply_n_times(n, m):
    result = 0
    for i in range(n):      # loop runs n times
        result += m
    return result

# Main program
n = int(input("Enter value of N: "))
m = int(input("Enter value of M: "))

# Calling both functions
result1 = multiply_once(n, m)
result2 = multiply_n_times (n, m)

# Display results
print("Using 1 iteration (direct):", result1)
print("Using N iterations (loop):", result2)
