from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet

text = """JavaScript String Questions (with Examples)

1. Write a function to find the length of a string.
Example: stringLength("Abc") → 3

2. Convert lowercase letters to uppercase manually.
Example: changingCase("abc") → "ABC"

3. Toggle the case of each character.
Example: toggleCase("ABCdef") → "abcDEF"

4. Count vowels and consonants.
Example: countVowels("abcdefHe") → {vcount: 3, ccount: 5}

5. Count number of words in a sentence.
Example: countWords("Hello How are you") → 4

6. Validate whether a string contains only alphabets or digits.
Example: validateString("abcd234") → true

7. Reverse a string.
Example: reverseString("abcd") → "dcba"

8. Check if a string is palindrome.
Example: isPalindrome("madam") → true

9. Check for duplicate characters.
Example: isDuplicate("finding") → true

10. Detect duplicates using hashing.
Example: isDuplicateHt("kanak") → ["k","a"]

11. Find duplicates using bit manipulation.
Example: isDuplicateUsingBit("finding") → ["i","n"]

12. Check if two strings are anagrams.
Example: isAnagram("medical", "decimal") → true

13. Print all permutations of a string.
Example: permutations("abc") → abc, acb, bac, bca, cab, cba

14. Reverse a string (alternative version).
Example: reverseStr("abc") → "cba"

15. Reverse words of a sentence.
Example: reverseWords("Hello How are you") → "you are How Hello"

16. Check if one string is rotation of another.
Example: areRotations("abcd", "dabc") → true

17. Remove duplicate characters.
Example: removeDuplicates("finding") → "findg"

18. Find maximum occurring character.
Example: getMaxOccuringChar("abcd deadaa") → "a"

19. Capitalize each word of sentence.
Example: capitalize("hello how are you") → "Hello How Are You"
"""

styles = getSampleStyleSheet()
story = [Paragraph(t, styles["Normal"]) for t in text.split("\n")]

pdf_path = "/mnt/data/javascript_string_questions.pdf"
doc = SimpleDocTemplate(pdf_path)
doc.build(story)

pdf_path
