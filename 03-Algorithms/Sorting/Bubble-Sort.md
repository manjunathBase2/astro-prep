# Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

## Key Concepts

- **Comparison-Based:**  
  Adjacent elements are compared and swapped if needed.

- **Iterative Process:**  
  The algorithm makes several passes over the list until no swaps are required.

- **Time Complexity:**  
  - Worst and Average Case: O(n²)
  - Best Case (already sorted): O(n)

- **Space Complexity:**  
  O(1) since it sorts in-place.

## Algorithm Steps

1. Loop through the entire list.
2. For each element, compare it with the next element.
3. If an element is greater than its neighbor (for ascending order), swap them.
4. Continue the process until a complete pass is made without any swaps.

## Example Code

Below is a Python implementation of Bubble Sort:

```python
def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Track if any swap occurs in this pass
        swapped = False
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Compare adjacent elements
            if arr[j] > arr[j + 1]:
                # Swap if they are in the wrong order
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # If no two elements were swapped, break early
        if not swapped:
            break
    return arr

# Example usage:
if __name__ == "__main__":
    sample_list = [64, 34, 25, 12, 22, 11, 90]
    print("Sorted array:", bubble_sort(sample_list))
```

## Practical Considerations

- **Use Cases:**  
  Suitable for small or nearly sorted datasets due to its simplicity.
  
- **Optimizations:**  
  The algorithm can stop early if no swaps are detected in a pass, which helps in best-case scenarios.

- **Limitations:**  
  Not efficient for large datasets compared to more advanced algorithms like Quick Sort or Merge Sort.

---

*Last Updated: February 23, 2025*