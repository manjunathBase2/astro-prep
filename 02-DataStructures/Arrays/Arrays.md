# Arrays

Arrays are one of the most fundamental data structures, providing a simple way to store and access a collection of elements. They allow constant-time access to elements by their index, making them efficient for many operations.

## Key Concepts

- **Contiguous Memory Allocation
- **Fixed Size vs. Dynamic Arrays:**  
  - **Fixed Size Arrays:** Have a predetermined size; common in low-level programming languages.
  - **Dynamic Arrays:** Can resize during runtime; examples include Python lists and JavaScript arrays.
  
  ![[Pasted image 20250301161741.png|500]]

- **Efficiency Considerations:**
  - **Access:** O(1)
  - **Search:** O(n) in unsorted arrays.
  - **Insertion/Deletion:** O(n) in the worst case due to subsequent element shifts.

- Subarray - A range of contiguous values within an array.
    - Example: given an array `[2, 3, 6, 1, 5, 4]`, `[3, 6, 1]` is a subarray while `[3, 1, 5]` is not a subarray.

- Subsequence - A sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements.
    - Example: given an array `[2, 3, 6, 1, 5, 4]`, `[3, 1, 5]` is a subsequence but `[3, 5, 1]` is not a subsequence.

## Common Operations

1. **Accessing Elements:**  
   Retrieve an element by its index quickly.

2. **Searching:**  
   Locate an element with linear search (O(n)) if the array is unsorted.

3. **Insertion:**  
   - At the end in dynamic arrays: Amortized O(1).
   - In the middle or beginning: O(n) due to element shifting.

4. **Deletion:**  
   Removing an element requires shifting remaining elements, resulting in O(n) time complexity.

## Example Code

Below are examples in Python demonstrating basic array operations:

```python
def search_element(arr, target):
    """Perform a linear search to find the target element in the array."""
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

def reverse_array(arr):
    """Reverse an array in-place."""
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr
```

## Practical Considerations

- **Memory Efficiency:**  
	  Arrays use contiguous memory, which is efficient for caching but may lead to issues with resizing in fixed-size arrays.

- When using an index to iterate through array elements, be careful not to go out of bounds.

- **Use Cases:**  
	  -  Storing ordered collections.
	  -  Scenarios where fast access by index is required.
	  -  Implementing foundational structures like heaps and queues.

- **Trade-offs:**  
	  While arrays offer fast lookups, insertion and deletion operations might require shifting elements, which can be costly in terms of performance.

---

*Last Updated: February 23, 2025*