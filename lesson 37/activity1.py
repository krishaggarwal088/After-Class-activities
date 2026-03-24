x = 5
y = 9
z = 1

print("Before swapping:")
print("x =", x, "y =", y, "z =", z)


if x > y:
    temp = x
    x = y
    y = temp

if x > z:
    temp = x
    x = z
    z = temp

if y > z:
    temp = y
    y = z
    z = temp

print("\nAfter swapping (Ascending Order):")
print("x =", x, "y =", y, "z =", z)