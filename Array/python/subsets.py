def subsets(arr):
    result = []

    def backtrack(index, current):
        if index == len(arr):
            result.append(current[:])
            return
        
        # Exclude current element
        backtrack(index + 1, current)
        
        # Include current element
        current.append(arr[index])
        backtrack(index + 1, current)
        current.pop()

    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))

def subsets(arr):
    n = len(arr)
    result = []

    for mask in range(1 << n):
        subset = []
        for i in range(n):
            if mask & (1 << i):
                subset.append(arr[i])
        result.append(subset)

    return result

print(subsets([1, 2, 3]))

def subsets(arr):
    result = [[]]
    
    for num in arr:
        result += [curr + [num] for curr in result]
    
    return result

print(subsets([1, 2, 3]))
