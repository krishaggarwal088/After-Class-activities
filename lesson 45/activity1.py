# Create a class
class Expression:
    
    # Constructor to initialize values
    def __init__(self, num1, num2, num3):
        self.num1 = num1
        self.num2 = num2
        self.num3 = num3
    
    # Method to calculate addition
    def calculate_sum(self):
        result = self.num1 + self.num2 + self.num3
        print("The sum is:", result)


# Create objects
exp1 = Expression(10, 20, 30)
exp2 = Expression(5, 15, 25)

# Call method
exp1.calculate_sum()
exp2.calculate_sum()