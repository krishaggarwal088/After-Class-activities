class Robot:
    
    def __init__(self, name, color):
        self.name = name
        self.color = color
    
    def introduce(self):
        print("Hello! My name is", self.name, "and my color is", self.color)


robot1 = Robot("Tom", "Blue-Gray")
robot2 = Robot("Jerry", "Brown")

robot1.introduce()
robot2.introduce()