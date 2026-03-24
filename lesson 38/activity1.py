# Exam Eligibility Program

# Taking input from user
total_days = int(input("Enter total working days: "))
absent_days = int(input("Enter total absent days: "))

# Calculating attended days
attended_days = total_days - absent_days

# Calculating percentage
percentage = (attended_days / total_days) * 100

# Display percentage
print("Attendance Percentage:", percentage)

# Checking eligibility
if percentage >= 75:
    print("You are eligible to sit in the exam.")
else:
    print("You are NOT eligible to sit in the exam.")