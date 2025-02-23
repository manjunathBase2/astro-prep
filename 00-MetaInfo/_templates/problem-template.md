# Problem Title

## Problem Description
_A concise description of the problem goes here. Describe what is being asked and provide any relevant background information._

## Constraints
- List any constraints on input size, values, or performance.
- Example: 1 ≤ n ≤ 10⁵, 0 ≤ element ≤ 10⁹

## Input Format
_Describe the format of the input._
- Example:  
  - First line: an integer denoting the number of elements.  
  - Second line: space-separated integers.

## Output Format
_Describe the expected output format._
- Example:  
  - A single integer or a string representing the outcome.

## Example
**Input:**
```
5
1 2 3 4 5
```

**Output:**
```
15
```

**Explanation:**
_Explain the example and how the output is derived from the input._

## Approach
_Outline the approach or algorithm to solve the problem. Include pseudocode or a high-level explanation._

## Complexity Analysis
- **Time Complexity:** _O(n)_, _O(n log n)_ etc.
- **Space Complexity:** _O(1)_, _O(n)_ etc.

## Code Solution
_Provide your implementation below in your preferred programming language._

```python
def solve():
    # Read input
    n = int(input().strip())
    arr = list(map(int, input().strip().split()))
    
    # Implement your solution here
    result = sum(arr)
    
    # Output the result
    print(result)

if __name__ == "__main__":
    solve()
```

---
*Last Updated: February 23, 2025*