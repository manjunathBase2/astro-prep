![[Pasted image 20250306120111.png|600]]

- Similar to sorting a hand of cards (increasing order)
- j introduces the next element, while i updates the sorted subarray to be considered
- `while i>0 and A[i]>key` checks and shifts the elements to right, if sort order is invalidated

	- for loop over all elements --> `key=A[j]` 
	- while loop to check criteria and shift the elements is required
	- `A[i+1]` assignment at last for every iteration


---

| Complexity           | Value                                    |
| -------------------- | ---------------------------------------- |
| **Best Case**        | $O(n)$                                   |
| **Average Case**     | $O(n^2)$                                 |
| **Worst Case**       | $O(n^2)$                                 |
| **Space Complexity** | $O(1)$                                   |
| **Stability**        | Yes                                      |
| **Method**           | builds on sorted list one time at a time |

#### Additional
- Selection Sort is **not stable** because swapping may disrupt the order of duplicate elements.
- It always runs in **O(n2)O(n^2)O(n2) time**, regardless of input order.
- It performs **at most n−1n-1n−1 swaps**, making it better than bubble sort in terms of swaps.
- It is **in-place**, meaning it does not use extra memory beyond a few variables.
- Not ideal for large datasets but useful when memory writes are costly (due to minimal swaps).




Parent topics : [[Sorting Algorithms]]