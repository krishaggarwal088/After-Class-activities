def show_flowchart():
    print("\n--- DAILY ROUTINE FLOWCHART ---\n")

    print("Start")
    print("  ↓")
    print("Wake Up")
    print("  ↓")
    print("Brush Teeth")
    print("  ↓")
    print("Take Bath")
    print("  ↓")
    print("Have Breakfast")
    print("  ↓")
    print("Go to School / Study")
    print("  ↓")

    choice = input("Homework finished? (yes/no): ").lower()

    if choice == "yes":
        print("  ↓")
        print("Play / Relax")
    else:
        print("  ↓")
        print("Do Homework")

    print("  ↓")
    print("Dinner")
    print("  ↓")
    print("Sleep")
    print("  ↓")
    print("End")

# Run program
show_flowchart()