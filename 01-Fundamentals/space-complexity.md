# Space Complexity

Space complexity measures the total amount of memory required by an algorithm with respect to the size of its input. It accounts for both the space taken by the input itself and any additional auxiliary space needed during computation.

## Key Concepts

- **Total Space vs. Auxiliary Space:**  
  - **Total Space:** The sum of the space used by the input data and any extra space used by the algorithm.  
  - **Auxiliary Space:** Only the extra space or temporary space used by an algorithm, excluding the space for the input.

- **Big-O Notation:**  
  Space complexity is often expressed using Big-O notation to indicate the worst-case scenario for additional memory usage. For example, O(1) describes constant space, while O(n) shows linear space with respect to input size.

## Examples

### 1. Iterative Approach with Auxiliary Data Structure

An algorithm that creates an auxiliary array proportional to the input size demonstrates O(n) space complexity.

```python
def double_elements(arr):
    n = len(arr)
    doubled = [0] * n  # O(n) auxiliary space
    for i in range(n):
        doubled[i] = arr[i] * 2
    return doubled
```

### 2. Recursive Algorithms

Recursive algorithms might use additional space due to the call stack. For instance, a recursive function for computing factorials uses O(n) space because of n recursive calls.

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

In the above example, the maximum height of the recursion tree is n, which implies O(n) space complexity due to the call stack.

## Analyzing Space Complexity

When evaluating an algorithm's space complexity:
1. **Identify all variables and data structures:** Determine if the algorithm creates extra arrays, lists, or other structures.
2. **Examine recursion:** Consider the maximum depth of recursion and whether tail recursion optimization is possible.
3. **Combine Input and Auxiliary Space:** Understand whether to include the input size within the space complexity or focus solely on extra space requirements.

## Practical Considerations

- **Memory Constraints:** In memory-limited systems, prefer in-place algorithms that use O(1) auxiliary space.
- **Trade-offs:** Sometimes, using more space can lead to faster algorithms (time-space trade-off).
- **Optimization:** Assess whether recursive solutions can be refactored into iterative solutions to minimize additional space used by call stacks.

---

*Last Updated: February 23, 2025*