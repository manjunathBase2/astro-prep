# Binary Search

Binary search is an efficient algorithm for finding an element in a sorted array. By repeatedly dividing the search space in half, it significantly reduces the time required to locate a target element.

## Key Concepts

- **Precondition:**  
  The array must be sorted for binary search to work correctly.

- **Algorithm Steps:**  
  1. Initialize two pointers: `low` and `high`.
  2. Compute the middle index: `mid = (low + high) // 2`.
  3. Compare the target with the element at `mid`.
     - If equal, return `mid`.
     - If the target is less than the element at `mid`, update `high = mid - 1`.
     - If the target is greater, update `low = mid + 1`.
  4. Repeat until `low` exceeds `high`.

- **Time Complexity:**  
  O(log n) due to the halving of the search space with each step.

- **Space Complexity:**  
  O(1) for the iterative approach and O(log n) for the recursive approach (due to the call stack).

## Example Code

### Iterative Implementation (Python)

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

### Recursive Implementation (Python)

```python
def binary_search_recursive(arr, target, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid - 1)
```

## Practical Considerations

- **Edge Cases:**  
  - Ensure the array is not empty.  
  - In cases with duplicate elements, binary search may return any one of the matching indices.

- **Applications:**  
  - Efficiently searching in sorted datasets.  
  - Integral to various divide and conquer algorithms.

- **Tips for Implementation:**  
  - In some programming languages, guard against integer overflow when calculating `mid` by using:  
    `mid = low + (high - low) // 2`.

---

*Last Updated: February 23, 2025*