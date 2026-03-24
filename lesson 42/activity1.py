import random

# list of numbers (data structure)
numbers = [5, 10, 15, 20, 25, 30, 35, 40]

# computer chooses a random number from list
secret_number = random.choice(numbers)

print("Guess the number from the list:")
print(numbers)

# user guess
guess = int(input("Enter your guess: "))

# checking
if guess > secret_number:
    print("Your guess is too HIGH 📈")
elif guess < secret_number:
    print("Your guess is too LOW 📉")
else:
    print("🎉 Correct! You guessed the number!")