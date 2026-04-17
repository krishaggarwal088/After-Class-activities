# Program to find LCM of two numbers

# Function to calculate LCM
def find_lcm(a, b):
    # Find the greater number
    if a > b:
        greater = a
    else:
        greater = b

    # Loop until LCM is found
    while True:
        if (greater % a == 0) and (greater % b == 0):
            lcm = greater
            break
        greater += 1

    return lcm


# Taking input from user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Calling function
result = find_lcm(num1, num2)

# Display result
print("LCM of", num1, "and", num2, "is:", result)