import turtle

screen = turtle.Screen()
screen.bgcolor("lightblue")   

t = turtle.Turtle()
t.speed(3)

t.penup()
t.goto(-200, 100)
t.pendown()

t.color("black", "yellow")  
t.begin_fill()

for i in range(3):
    t.forward(100)
    t.left(120)

t.end_fill()


t.penup()
t.goto(0, 100)
t.pendown()

t.color("black", "green")
t.begin_fill()

for i in range(2):
    t.forward(150)
    t.left(90)
    t.forward(80)
    t.left(90)

t.end_fill()


t.penup()
t.goto(-100, -100)
t.pendown()

t.color("black", "orange")
t.begin_fill()

for i in range(6):
    t.forward(80)
    t.left(60)

t.end_fill()



turtle.done()