# Armstrong Number Program

# Taking input
num = int(input("Enter a number: "))

# Store original number
original = num

# Count number of digits
n = len(str(num))

# Initialize sum
sum = 0

# Loop to calculate sum of powers
while num > 0:
    digit = num % 10
    sum = sum + (digit ** n)
    num = num // 10

# Check Armstrong
if sum == original:
    print("It is an Armstrong number.")
else:
    print("It is NOT an Armstrong number.")