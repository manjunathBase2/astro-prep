# Time Complexity

Time complexity analyzes the amount of time an algorithm takes to run as a function of the input size. It helps to understand the efficiency of an algorithm, especially as inputs grow larger.

## Key Concepts

- **Big-O Notation:**  
  Expresses the upper bound of an algorithm's running time. Common notations include:
  - **O(1):** Constant time  
  - **O(n):** Linear time  
  - **O(n²):** Quadratic time  
  - **O(log n):** Logarithmic time

- **Best, Average, and Worst Cases:**  
  Understanding these cases helps evaluate performance under different scenarios.

- **Dominant Terms:**  
  When combining terms in time complexity, the highest-order term is the most significant for large input sizes.

## Examples

### 1. Constant Time - O(1)

Accessing an element in an array takes constant time regardless of the array's size.

```python
def get_first_element(arr):
    return arr[0]
```

### 2. Linear Time - O(n)

A loop that iterates through all elements in an array demonstrates linear time complexity.

```python
def sum_elements(arr):
    total = 0
    for num in arr:
        total += num
    return total
```

### 3. Quadratic Time - O(n²)

Nested loops iterating over the same array illustrate quadratic time complexity.

```python
def print_pairs(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):
            print(arr[i], arr[j])
```

### 4. Logarithmic Time - O(log n)

Binary search algorithm halves the search space at each step, resulting in logarithmic time complexity.

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

## Analyzing Time Complexity

1. **Identify core operations:** Consider loops, recursive calls, and algorithms that dominate the processing time.
2. **Consider worst-case scenarios:** Evaluate the time taken in the most demanding situations.
3. **Focus on the highest-order term:** Lower-order terms and constants are generally ignored for large inputs.

## Practical Considerations

- **Scalability:** Choose algorithms with lower time complexity for handling large datasets.
- **Trade-offs:** Sometimes, faster running time may require increased space, so consider time-space trade-offs.
- **Optimization:** Aim to reduce nested loops and use more efficient algorithms (e.g., binary search vs. linear search).

---
*Last Updated: February 23, 2025*