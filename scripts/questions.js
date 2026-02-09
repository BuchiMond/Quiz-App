// Quiz Questions Data
// Modify this object to change quiz content, topics, or add/remove questions

// INSTRUCTIONS:
// For Multiple Choice: Include "options" array and "correctAnswer" as index (0-3)
// For Short Answer: Remove "options" array and set "correctAnswer" as a string

const quizData = {
    title: "Python Control Flow Quiz",
    subtitle: "Test your knowledge of conditionals, loops, and control statements (50 questions)",
    questions: [
        // MULTIPLE CHOICE QUESTIONS (1-40)
        {
            question: "What is the primary purpose of control flow in programming?",
            options: [
                "To make code run faster",
                "To determine the order in which code executes",
                "To reduce memory usage",
                "To compile the program"
            ],
            correctAnswer: 1,
            explanation: "Control flow determines the order in which your code executes, allowing programs to make decisions, repeat actions, and skip code based on conditions."
        },
        {
            question: "In Python, what is used to define code blocks instead of braces?",
            options: [
                "Semicolons",
                "Parentheses",
                "Indentation",
                "Curly brackets"
            ],
            correctAnswer: 2,
            explanation: "Python uses indentation (typically 4 spaces) to define code blocks, which is different from languages that use braces."
        },
        {
            question: "What will this code print if age = 15?\n\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
            options: [
                "Adult",
                "Minor",
                "Nothing",
                "Error"
            ],
            correctAnswer: 1,
            explanation: "Since age (15) is not >= 18, the condition is false, so the else block executes and prints 'Minor'."
        },
        {
            question: "What does 'elif' stand for in Python?",
            options: [
                "Else if finally",
                "Else if",
                "Eliminate if",
                "Electronic if"
            ],
            correctAnswer: 1,
            explanation: "'elif' is short for 'else if' and is used to check multiple conditions in sequence."
        },
        {
            question: "When using if-elif-else, what happens after the first true condition is found?",
            options: [
                "All remaining conditions are checked",
                "Only the next condition is checked",
                "The remaining conditions are skipped",
                "The program restarts"
            ],
            correctAnswer: 2,
            explanation: "Python evaluates conditions from top to bottom and stops at the first true condition. Once a condition matches, the remaining conditions are skipped."
        },
        {
            question: "Which comparison operator checks if two values are NOT equal?",
            options: [
                "<>",
                "=/=",
                "!=",
                "!=="
            ],
            correctAnswer: 2,
            explanation: "The != operator is used in Python to check if two values are not equal."
        },
        {
            question: "What is the result of: True and False?",
            options: [
                "True",
                "False",
                "None",
                "Error"
            ],
            correctAnswer: 1,
            explanation: "The 'and' operator returns True only if both operands are True. Since one is False, the result is False."
        },
        {
            question: "What is the result of: True or False?",
            options: [
                "True",
                "False",
                "None",
                "Error"
            ],
            correctAnswer: 0,
            explanation: "The 'or' operator returns True if at least one operand is True. Since one operand is True, the result is True."
        },
        {
            question: "What does the 'not' operator do?",
            options: [
                "Multiplies values",
                "Reverses a boolean value",
                "Compares two values",
                "Deletes a variable"
            ],
            correctAnswer: 1,
            explanation: "The 'not' operator reverses a boolean value: 'not True' becomes False and 'not False' becomes True."
        },
        {
            question: "What is a nested conditional?",
            options: [
                "A conditional inside a loop",
                "An if statement inside another if statement",
                "Multiple elif statements",
                "A conditional with multiple operators"
            ],
            correctAnswer: 1,
            explanation: "A nested conditional is an if statement placed inside another if statement, allowing for more complex decision-making."
        },
        {
            question: "What type of loop is best for iterating over a sequence like a list?",
            options: [
                "while loop",
                "do-while loop",
                "for loop",
                "infinite loop"
            ],
            correctAnswer: 2,
            explanation: "For loops are designed to iterate over sequences like lists, strings, or ranges, making them ideal for this purpose."
        },
        {
            question: "What does range(5) generate?",
            options: [
                "Numbers from 1 to 5",
                "Numbers from 0 to 5",
                "Numbers from 0 to 4",
                "Numbers from 1 to 4"
            ],
            correctAnswer: 2,
            explanation: "range(5) generates numbers from 0 to 4 (5 numbers total, starting from 0 and stopping before 5)."
        },
        {
            question: "What will range(2, 8) generate?",
            options: [
                "2, 3, 4, 5, 6, 7",
                "2, 3, 4, 5, 6, 7, 8",
                "3, 4, 5, 6, 7, 8",
                "2, 4, 6, 8"
            ],
            correctAnswer: 0,
            explanation: "range(2, 8) generates numbers from the start value (2) to one less than the end value (7), so: 2, 3, 4, 5, 6, 7."
        },
        {
            question: "What is the step parameter in range(0, 10, 2)?",
            options: [
                "The starting number",
                "The ending number",
                "The increment between numbers",
                "The total count of numbers"
            ],
            correctAnswer: 2,
            explanation: "The step parameter (2 in this case) determines the increment between numbers. range(0, 10, 2) generates 0, 2, 4, 6, 8."
        },
        {
            question: "What is the main characteristic of a while loop?",
            options: [
                "It runs a fixed number of times",
                "It only works with numbers",
                "It continues while a condition is true",
                "It cannot be stopped"
            ],
            correctAnswer: 2,
            explanation: "While loops continue executing as long as their condition evaluates to True."
        },
        {
            question: "What is an infinite loop?",
            options: [
                "A loop that runs very fast",
                "A loop whose condition never becomes false",
                "A loop with many iterations",
                "A loop inside another loop"
            ],
            correctAnswer: 1,
            explanation: "An infinite loop occurs when the loop's condition never becomes false, causing it to run forever."
        },
        {
            question: "What does enumerate() provide when used in a for loop?",
            options: [
                "Only the values",
                "Only the indices",
                "Both index and value",
                "The loop count"
            ],
            correctAnswer: 2,
            explanation: "enumerate() provides both the index and the value for each item in the sequence."
        },
        {
            question: "What does zip() do when used with two lists?",
            options: [
                "Combines lists into one",
                "Pairs up elements from both lists",
                "Compresses the lists",
                "Sorts both lists"
            ],
            correctAnswer: 1,
            explanation: "zip() pairs up corresponding elements from multiple sequences, allowing you to iterate over them together."
        },
        {
            question: "What does the 'break' statement do in a loop?",
            options: [
                "Pauses the loop temporarily",
                "Skips to the next iteration",
                "Exits the loop immediately",
                "Restarts the loop"
            ],
            correctAnswer: 2,
            explanation: "The 'break' statement immediately exits the loop, stopping all further iterations."
        },
        {
            question: "What does the 'continue' statement do in a loop?",
            options: [
                "Exits the loop",
                "Skips the rest of the current iteration and moves to the next",
                "Restarts the loop from the beginning",
                "Pauses the loop"
            ],
            correctAnswer: 1,
            explanation: "The 'continue' statement skips the rest of the current iteration and immediately moves to the next iteration of the loop."
        },
        {
            question: "What is the key difference between break and continue?",
            options: [
                "Break is faster than continue",
                "Break exits the loop, continue skips to next iteration",
                "Continue exits the loop, break skips to next iteration",
                "They do the same thing"
            ],
            correctAnswer: 1,
            explanation: "Break exits the entire loop, while continue only skips the current iteration and proceeds to the next one."
        },
        {
            question: "In nested loops, which loop does 'break' exit?",
            options: [
                "All loops",
                "The outermost loop",
                "The innermost loop",
                "No loop"
            ],
            correctAnswer: 2,
            explanation: "The 'break' statement only exits the innermost loop where it appears, not outer loops."
        },
        {
            question: "What will be printed?\n\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)",
            options: [
                "0 1 2",
                "0 2",
                "1 2",
                "0 1"
            ],
            correctAnswer: 1,
            explanation: "When i equals 1, continue skips the print statement. So only 0 and 2 are printed."
        },
        {
            question: "How many times will this loop run?\n\nfor i in range(0, 10, 3):\n    print(i)",
            options: [
                "3 times",
                "4 times",
                "10 times",
                "33 times"
            ],
            correctAnswer: 1,
            explanation: "range(0, 10, 3) generates 0, 3, 6, 9, which is 4 numbers, so the loop runs 4 times."
        },
        {
            question: "What is the output?\n\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1",
            options: [
                "0 1 2",
                "1 2 3",
                "0 1 2 3",
                "Infinite loop"
            ],
            correctAnswer: 0,
            explanation: "The loop starts at 0, prints and increments until count reaches 3, printing 0, 1, 2."
        },
        {
            question: "Which operator would you use to check if a number is between 10 and 20 (inclusive)?",
            options: [
                "num > 10 and num < 20",
                "num >= 10 and num <= 20",
                "num between 10 and 20",
                "10 < num < 20"
            ],
            correctAnswer: 1,
            explanation: "To include both 10 and 20, you need >= and <=. You can also write it as: 10 <= num <= 20 in Python."
        },
        {
            question: "What happens if none of the conditions in an if-elif-else chain are true?",
            options: [
                "An error occurs",
                "The program stops",
                "The else block executes",
                "Nothing happens"
            ],
            correctAnswer: 2,
            explanation: "If none of the if or elif conditions are true, the else block (if present) executes as the default case."
        },
        {
            question: "What does this code do?\n\nfor letter in 'Python':\n    print(letter)",
            options: [
                "Prints 'Python'",
                "Prints each letter on a separate line",
                "Causes an error",
                "Prints the length of 'Python'"
            ],
            correctAnswer: 1,
            explanation: "For loops can iterate over strings. This prints each letter of 'Python' on a separate line: P, y, t, h, o, n."
        },
        {
            question: "What is the purpose of the condition variable in a while loop?",
            options: [
                "To store the loop count",
                "To control when the loop stops",
                "To hold the loop result",
                "To name the loop"
            ],
            correctAnswer: 1,
            explanation: "The condition variable is checked each iteration to determine whether the loop should continue or stop."
        },
        {
            question: "What will this print?\n\nnum = 7\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
            options: [
                "Even",
                "Odd",
                "7",
                "Nothing"
            ],
            correctAnswer: 1,
            explanation: "7 % 2 equals 1 (not 0), so the condition is false and 'Odd' is printed."
        },
        {
            question: "In a for loop with enumerate(), what is the default starting index?",
            options: [
                "-1",
                "0",
                "1",
                "None"
            ],
            correctAnswer: 1,
            explanation: "enumerate() starts counting from 0 by default, though you can specify a different start value."
        },
        {
            question: "What happens if you forget to update the condition variable in a while loop?",
            options: [
                "The loop runs once",
                "An error occurs",
                "You create an infinite loop",
                "The loop doesn't run"
            ],
            correctAnswer: 2,
            explanation: "If the condition variable never changes, the condition stays true forever, creating an infinite loop."
        },
        {
            question: "Which is more appropriate for user input validation until correct?",
            options: [
                "for loop",
                "while loop",
                "if statement only",
                "switch statement"
            ],
            correctAnswer: 1,
            explanation: "A while loop is ideal for validation because you don't know how many attempts the user will need."
        },
        {
            question: "What does % (modulo) operator do?",
            options: [
                "Divides two numbers",
                "Returns the remainder of division",
                "Calculates percentage",
                "Multiplies by 100"
            ],
            correctAnswer: 1,
            explanation: "The modulo operator (%) returns the remainder after division. For example, 7 % 3 = 1."
        },
        {
            question: "What is the output?\n\nfor i in range(5):\n    if i == 2:\n        break\n    print(i)",
            options: [
                "0 1 2",
                "0 1",
                "2 3 4",
                "0 1 2 3 4"
            ],
            correctAnswer: 1,
            explanation: "The loop prints 0 and 1. When i becomes 2, break exits the loop before printing."
        },
        {
            question: "Can you use multiple elif statements in a single if-elif-else chain?",
            options: [
                "No, only one elif is allowed",
                "Yes, you can have multiple elif statements",
                "Only if you don't have an else",
                "Only in Python 3"
            ],
            correctAnswer: 1,
            explanation: "You can use as many elif statements as needed to check multiple conditions in sequence."
        },
        {
            question: "What will this output?\n\nnames = ['Alice', 'Bob']\nfor i, name in enumerate(names):\n    print(f'{i}: {name}')",
            options: [
                "Alice Bob",
                "0: Alice 1: Bob",
                "1: Alice 2: Bob",
                "Alice: 0 Bob: 1"
            ],
            correctAnswer: 1,
            explanation: "enumerate() provides both index (starting at 0) and value, printing '0: Alice' and '1: Bob'."
        },
        {
            question: "What happens with zip() if the lists have different lengths?",
            options: [
                "An error occurs",
                "It stops at the shortest list",
                "It fills missing values with None",
                "It repeats the shorter list"
            ],
            correctAnswer: 1,
            explanation: "zip() stops when the shortest sequence is exhausted, ignoring extra elements in longer sequences."
        },
        {
            question: "What does this check?\n\nif password != 'secret123':",
            options: [
                "If password equals 'secret123'",
                "If password doesn't equal 'secret123'",
                "If password contains 'secret123'",
                "If password is longer than 'secret123'"
            ],
            correctAnswer: 1,
            explanation: "The != operator checks for inequality, so this checks if password is NOT equal to 'secret123'."
        },
        {
            question: "What is the correct syntax for a for loop in Python?",
            options: [
                "for (i = 0; i < 5; i++)",
                "for i in range(5):",
                "for i from 0 to 5:",
                "foreach i in range(5):"
            ],
            correctAnswer: 1,
            explanation: "Python for loops use 'for variable in sequence:' syntax. 'for i in range(5):' is correct."
        },

        // SHORT ANSWER QUESTIONS (41-50)
        {
            question: "What keyword is used in Python to create a conditional statement?",
            correctAnswer: "if",
            explanation: "The 'if' keyword is used to create conditional statements that execute code based on whether a condition is true."
        },
        {
            question: "What is the standard indentation size (in spaces) used in Python to define code blocks?",
            correctAnswer: "4",
            explanation: "Python uses 4 spaces as the standard indentation to define code blocks, though consistency is more important than the exact number."
        },
        {
            question: "What keyword immediately exits a loop before all iterations are complete?",
            correctAnswer: "break",
            explanation: "The 'break' keyword immediately exits the current loop, stopping all further iterations."
        },
        {
            question: "What keyword skips the rest of the current loop iteration and moves to the next one?",
            correctAnswer: "continue",
            explanation: "The 'continue' keyword skips the remaining code in the current iteration and proceeds to the next iteration of the loop."
        },
        {
            question: "What Python function generates a sequence of numbers commonly used in for loops?",
            correctAnswer: "range",
            explanation: "The range() function generates sequences of numbers and is commonly used to control for loop iterations."
        },
        {
            question: "What logical operator returns True only if BOTH conditions are true?",
            correctAnswer: "and",
            explanation: "The 'and' operator performs logical AND, returning True only when both operands are True."
        },
        {
            question: "What logical operator returns True if AT LEAST ONE condition is true?",
            correctAnswer: "or",
            explanation: "The 'or' operator performs logical OR, returning True if at least one operand is True."
        },
        {
            question: "What built-in function provides both the index and value when iterating over a sequence?",
            correctAnswer: "enumerate",
            explanation: "The enumerate() function returns both the index and value for each item when iterating over a sequence."
        },
        {
            question: "What type of loop continues executing as long as a condition remains true?",
            correctAnswer: "while",
            explanation: "A while loop continues executing its code block as long as the specified condition evaluates to True."
        },
        {
            question: "What comparison operator checks if two values are equal in Python?",
            correctAnswer: "==",
            explanation: "The == operator is used to check equality in Python. Note: this is different from = which is used for assignment."
        }
    ]
};
