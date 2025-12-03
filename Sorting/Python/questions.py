from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

text = """
Sorting Algorithms — Questions with Explanation (No Solutions)

1. Bubble Sort
Question: Explain Bubble Sort and how it repeatedly compares and swaps adjacent elements.
Explanation: Bubble Sort works by repeatedly scanning the list and swapping neighboring elements that are out of order, pushing the largest element to the end in each pass.

2. Selection Sort
Question: Explain Selection Sort and how it selects the minimum element.
Explanation: Selection Sort finds the smallest element in the unsorted portion and swaps it with the first unsorted index, shrinking the unsorted region.

3. Insertion Sort
Question: Explain Insertion Sort and how elements are inserted into the sorted part.
Explanation: Insertion Sort builds a sorted region by inserting each new element into its correct position relative to the already sorted portion.

4. Merge Sort
Question: Explain Merge Sort and its divide-and-conquer strategy.
Explanation: Merge Sort splits the array into halves, sorts each half recursively, and merges them back together in sorted order.

5. Quick Sort
Question: Explain Quick Sort and the concept of partitioning around a pivot.
Explanation: Quick Sort chooses a pivot, partitions elements around it (smaller on one side, larger on the other), and recursively sorts each side.

6. Heap Sort
Question: Explain Heap Sort and how a heap is used for sorting.
Explanation: Heap Sort creates a max heap, extracts the largest element, swaps it to the end, and rebuilds the heap until fully sorted.

7. Counting Sort
Question: Explain Counting Sort and when it is used.
Explanation: Counting Sort counts how many times each value occurs and reconstructs the array; works efficiently for small integer ranges.

8. Radix Sort
Question: Explain Radix Sort and digit-wise sorting.
Explanation: Radix Sort sorts numbers by processing digits from least significant to most significant using a stable sorting method like Counting Sort.

9. Bucket Sort
Question: Explain Bucket Sort and how elements are distributed into buckets.
Explanation: Bucket Sort distributes elements into multiple buckets, sorts each bucket individually, and concatenates them for the final sorted array.
"""

styles = getSampleStyleSheet()
story = []

for line in text.split("\n"):
    story.append(Paragraph(line, styles["Normal"]))
    story.append(Spacer(1, 10))

pdf_path = "/mnt/data/sorting_algorithms_questions.pdf"
doc = SimpleDocTemplate(pdf_path)
doc.build(story)

pdf_path
