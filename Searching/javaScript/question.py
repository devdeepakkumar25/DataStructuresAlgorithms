from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

text = """
Searching Algorithms — Questions, Examples & Time Complexity

1. Linear Search
Question: Write a function to perform Linear Search.
Example: linearSearch([7,1,3,6,5], 5) → 4
Time Complexity:
• Best: O(1)
• Worst: O(n)
• Average: O(n)

2. Binary Search (Iterative)
Question: Write a function to perform Binary Search using iteration.
Example: binarySearchItr([1..100], 50) → 49
Time Complexity:
• Best: O(1)
• Worst: O(log n)
• Average: O(log n)

3. Binary Search (Recursive)
Question: Write a function to perform Binary Search using recursion.
Example: recBinarySearch([1..100], 20) → 19
Time Complexity:
• Best: O(1)
• Worst: O(log n)
• Average: O(log n)

4. Ternary Search
Question: Write a function to perform Ternary Search.
Example: ternarySearch([1..100], 100) → 99
Time Complexity:
• Best: O(1)
• Worst: O(log n)
• Average: O(log n)

5. Jump Search
Question: Write a function that performs Jump Search.
Example: jumpSearch([1..100], 19) → 18
Time Complexity:
• Best: O(1)
• Worst: O(√n)
• Average: O(√n)

6. Exponential Search
Question: Write a function to perform Exponential Search.
Example: exponentialSearch([1..100], 20) → 19
Time Complexity:
• Range Expansion: O(log n), range:[bound/2,bound]
• Binary Search: O(log n)
Overall: O(log n) 
Average / Worst:  O(log i)
"""

styles = getSampleStyleSheet()
story = []

for line in text.split("\n"):
    story.append(Paragraph(line, styles["Normal"]))
    story.append(Spacer(1, 10))

pdf_path = "/mnt/data/searching_algorithms.pdf"
doc = SimpleDocTemplate(pdf_path)
doc.build(story)

pdf_path
